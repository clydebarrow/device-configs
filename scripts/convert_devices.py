#!/usr/bin/env python3
import os
import shutil
import sys

import yaml
from datetime import datetime, date, time
import re
from PIL import Image

def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^a-z0-9-]', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')

def extract_gpio_table(content):
    """Extract GPIO pin mappings from markdown tables"""
    gpio_pins = {}
    # Look for tables with GPIO pin definitions
    table_pattern = re.compile(r'^\s*\|\s*GPIO\d+\s*\|[^|]+\|')
    matches = table_pattern.findall(content)
    for match in matches:
        parts = [p.strip() for p in match.split('|') if p.strip()]
        if len(parts) >= 2:
            pin = parts[0].strip()
            function = parts[1].strip()
            gpio_pins[pin] = function
    
    # Remove all GPIO sections if we found pins
    if gpio_pins:
        # First find any GPIO section heading
        heading_match = re.search(r'(## GPIO[^\n]*)', content)
        heading = heading_match.group(1) if heading_match else '## GPIO Configuration'

        # Find any YAML block in the GPIO sections
        yaml_pattern = re.compile(r'```yaml[^`]*```', re.DOTALL)
        yaml_blocks = yaml_pattern.finditer(content)
        yaml_in_gpio = False
        yaml_block = None
        
        # Check if any YAML blocks are within GPIO sections
        for yaml_match in yaml_blocks:
            yaml_pos = yaml_match.start()
            section_before = content[:yaml_pos].split('##')[-1].strip()
            if section_before.lower().startswith('gpio'):
                yaml_in_gpio = True
                yaml_block = yaml_match.group(0)
                break
        
        # Remove all GPIO sections and their content
        content = re.sub(r'\n*## GPIO.*?(?=\n##|$)', '', content, flags=re.DOTALL)

        # Remove any table remnants if they weren't caught by the section removal
        content = re.sub(r'\n\s*\|[^\n]*GPIO[^\n]*\|[^\n]*\n\s*\|[^\n]*\|[^\n]*\n(\s*\|[^\n]*\|[^\n]*\n)*', '\n', content)

        # Split content into sections
        sections = re.split(r'(## [^\n]*(?:\n(?!## )[^\n]*)*)', content)
        cleaned_sections = []

        # Process frontmatter separately
        frontmatter_match = re.match(r'(---\n.*?\n---\n)', content, re.DOTALL)
        if frontmatter_match:
            cleaned_sections.append(frontmatter_match.group(1))
            sections = sections[1:] if sections[0].startswith('---') else sections

        # Process each section
        for section in sections:
            if not section.strip():
                continue
            if section.startswith('## '):
                # Check if section has any non-whitespace content after the heading
                content_after_heading = re.sub(r'^## [^\n]*\n', '', section)
                if content_after_heading.strip():
                    cleaned_sections.append(section)

        # Join sections and normalize newlines
        content = '\n\n'.join(s.strip() for s in cleaned_sections)
        content = re.sub(r'\n{3,}', '\n\n', content)

        # Add back YAML block if it was in a GPIO section
        if yaml_in_gpio and yaml_block:
            # Find the first heading after frontmatter
            first_heading_match = re.search(r'---\n.*?\n---\n*([^\n]+)', content, re.DOTALL)
            if first_heading_match:
                insert_pos = first_heading_match.start(1)
                content = content[:insert_pos] + f'{heading}\n\n{yaml_block}\n\n' + content[insert_pos:]
        
        # Add GPIO information in bullet point format at the end
#        gpio_section = f'\n\n{heading}\n\n'
#        for pin, function in gpio_pins.items():
#            gpio_section += f'- {pin}: {function}\n'
        #content = content.rstrip() + gpio_section

    return gpio_pins, content

def resize_image(src_path, dest_path, max_size=1200):
    """Resize image if it exceeds max dimensions while preserving aspect ratio"""
    try:
        with Image.open(src_path) as img:
            # Convert RGBA to RGB if necessary
            if img.mode == 'RGBA':
                img = img.convert('RGB')
            
            # Check if resize is needed
            width, height = img.size
            if width > max_size or height > max_size:
                # Calculate new dimensions
                ratio = min(max_size/width, max_size/height)
                new_size = (int(width * ratio), int(height * ratio))
                
                # Resize and save
                img = img.resize(new_size, Image.Resampling.LANCZOS)
                img.save(dest_path, quality=85, optimize=True)
            else:
                # Just copy if no resize needed
                shutil.copy2(src_path, dest_path)
    except Exception as e:
        print(f"Warning: Could not process image {src_path}: {e}")
        # Copy original if processing fails
        shutil.copy2(src_path, dest_path)

def convert_frontmatter(old_frontmatter, content):
    """Convert old frontmatter format to new format"""
    # Keep original standard format
    standard = old_frontmatter.get('standard', [])
    if isinstance(standard, str):
        standard = [s.strip() for s in standard.split(',')]
    elif not isinstance(standard, list):
        standard = []
    # Keep original board type
    board_type = old_frontmatter.get('board', 'ESP8266')
    
    # Convert date-published to ISO format with time
    old_date = old_frontmatter.get('date-published', datetime.now())
    if isinstance(old_date, str):
        try:
            # Parse YYYY-MM-DD and set to noon UTC
            parsed_date = datetime.strptime(old_date, '%Y-%m-%d')
        except ValueError:
            # Use current time if parsing fails
            parsed_date = datetime.now()
    elif isinstance(old_date, date):
        # Convert date to datetime at noon UTC
        parsed_date = datetime.combine(old_date, time(12, 0, 0))
    else:
        # Use current time for any other type
        parsed_date = datetime.now()
    
    formatted_date = parsed_date.strftime('%Y-%m-%dT%H:%M:%SZ')
    
    new_frontmatter = {
        'title': old_frontmatter.get('title', ''),   # Required: Full device name (Hugo convention)
        'board': board_type,                         # Required: Board identifier
        'standard': standard,
        'date_published': formatted_date,            # Required: Publication date in ISO format
        'tags': [],
        'project_url': old_frontmatter.get('project_url', ''),
        'made_for_esphome': old_frontmatter.get('made-for-esphome', False),
        'difficulty': 1  # Default difficulty
    }
    
    # Extract tags
    if 'type' in old_frontmatter:
        parts = [x.strip() for x in old_frontmatter['type'].split(',')]
        new_frontmatter['tags'].extend(parts)
    

    return new_frontmatter

def extract_yaml_blocks(content):
    """Extract YAML code blocks from markdown content"""
    yaml_blocks = []
    # Find all yaml code blocks
    matches = re.finditer(r'```yaml\n(.+?)\n```', content, re.DOTALL)
    for match in matches:
        yaml_blocks.append(match.group(1).strip())
    # Join all yaml blocks with newlines
    yaml_content = '\n\n'.join(yaml_blocks)
    # Remove yaml blocks from content, preserving the section headers
    content_without_yaml = re.sub(r'```yaml\n.+?\n```', '', content, flags=re.DOTALL)
    return yaml_content, content_without_yaml

def process_device(src_dir, dest_dir):
    """Process a single device directory"""
    # Read source index.md
    with open(os.path.join(src_dir, 'index.md'), 'r') as f:
        content = f.read()
    
    # Split frontmatter and content
    _, fm, content = content.split('---', 2)
    old_frontmatter = yaml.safe_load(fm)
    
    # Extract GPIO table and update content
    gpio_pins, content = extract_gpio_table(content)

    # Convert frontmatter and add GPIO pins if found
    new_frontmatter = convert_frontmatter(old_frontmatter, content)
    if gpio_pins:
        new_frontmatter['gpio_pins'] = gpio_pins
    
    # Create slug from title
    slug = slugify(old_frontmatter['title'])
    device_dir = os.path.join(dest_dir, 'content/devices', slug)
    print("New device dir", device_dir)
    images_dir = os.path.join(device_dir, 'images')
    os.makedirs(device_dir, exist_ok=True)
    os.makedirs(images_dir, exist_ok=True)
    
    # Extract YAML blocks and update content
    yaml_content, content = extract_yaml_blocks(content)
    
    image_list = []
    # Copy and resize images if needed
    for img in os.listdir(src_dir):
        if img.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
            image_list.append(img)
            src_image = os.path.join(src_dir, img)
            dest_image = os.path.join(images_dir, img)
            if os.path.isfile(dest_image):
                continue
            resize_image(src_image, dest_image)
            # Update image reference in content
            content = content.replace(f']({img}', f'](images/{img}')
    
    # Clean up content and remove empty sections
    content = re.sub(r'\n+', '\n', content).strip()
    
    image_list = image_list[:3]

    for img in image_list:
        image_pattern = re.compile(r'!\[[^]]*]\([^)]*' + re.escape(img) + '[^)]*\)')
        content = image_pattern.sub('', content)

    # Split content into sections for processing
    sections = re.split(r'(## [^\n]+)', content)
    processed_sections = []
    current_section = ''
    
    # Process each section
    for i, section in enumerate(sections):
        if section.startswith('## '):
            # If we have content in the current section, add it
            if current_section.strip():
                lines = len(re.split(r'\n\n', current_section))
                if lines > 1:
                    processed_sections.append(current_section.strip())
            current_section = section + "\n\n"
        else:
            # Add content to current section if it's not empty
            if section.strip():
                current_section += section.strip() + '\n\n'
    
    # Add the last section if it has content
    if current_section.strip() and not all(s.isspace() or s == '' for s in current_section.split('\n')[1:]):
        processed_sections.append(current_section)
    
    # Combine processed sections
    content = '\n\n'.join(processed_sections)
    
    # Add sections in proper order
    sections = []
    if content.strip():
        if not content.startswith('##'):
            content = "## Overview\n\n" + content
        sections.append(content)

    # Write new index.md
    with open(os.path.join(device_dir, 'index.md'), 'w') as f:
        f.write('---\n')
        f.write(yaml.dump(new_frontmatter, default_flow_style=False))
        f.write('---\n\n')
        f.write(''.join(sections).strip())
    
    # Write config.yaml with extracted YAML content
    config_path = os.path.join(device_dir, 'config.yaml')
    if yaml_content:
        with open(config_path, 'w') as f:
            f.write(yaml_content)

def main():
    print(sys.argv)
    if len(sys.argv) > 1:
        device_name = sys.argv[1]
    else:
        device_name = None
    src_root = '/Users/clyde/dev/opensourceprojects/esp/esphome-devices/src/docs/devices'
    dest_root = '/Users/clyde/dev/opensourceprojects/esp/device-configs'
    
    # Process each device directory
    for device in os.listdir(src_root):
        if device_name and device != device_name:
            continue
        device_path = os.path.join(src_root, device)
        print(f'Processing {device}...')
        process_device(device_path, dest_root)

if __name__ == '__main__':
    main()
