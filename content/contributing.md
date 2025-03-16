---
title: Contributing a New Device
lastmod: 2025-03-16
---

There are two ways to contribute a new device configuration to our database:

## 1. Using the Web Submission Form

The easiest way to contribute is through our web-based submission form at [device-submission.control-j.com](https://device-submission.control-j.com).

### Steps:
1. Visit [device-submission.control-j.com](https://device-submission.control-j.com)
2. Fill in the required device information:
   - Device name and manufacturer
   - Board type (e.g., ESP32, ESP8266)
   - Difficulty level:
     - Level 1: Comes with ESPHome
     - Level 2: Plug-n-flash
     - Level 3: Disassembly required
     - Level 4: Soldering required
     - Level 5: Chip needs replacing
   - Standard/Region (if applicable)
   - Tags for device features
3. Upload device photos
4. Provide the ESPHome configuration (YAML)
5. Submit the form

Your submission will be reviewed and, once approved, will be added to the device database.

## 2. Direct Pull Request

For those familiar with Git and GitHub, you can contribute directly by creating a pull request in our repository.

### Repository Structure
```
content/
└── devices/
    └── [device-name]/
        ├── index.md      # Device documentation
        ├── config.yaml   # ESPHome configuration
        └── images/       # Device photos
```

### Steps:

1. Fork the repository
2. Create a new branch for your device
3. Create a new directory under `content/devices/` with your device name - must only contain lowercase letters, numbers, and hyphens or dots
   - Example: `lilygo-t-display-2.0`
4. Add the required files:

   **index.md**:
   ```markdown
   ---
   title: "Device Name"
   board: "esp32"  # or appropriate board, e.g. "esp8266" or "esp32-s3"
   difficulty: 2    # Difficulty level (1-5)
   standard:        # Electrical standards, must be a list, or empty if not applicable
     - global          # or region-specific standards
   tags:              # List relevant features, using existing tags
     - display
     - touch
     - battery
   gpio_pins:
     GPIO00: BOOT
     GPIO04: LCD_BACKLIGHT

   project_url: https://example.com/device-url
   date_published: 2025-03-16T00:00:00Z
   ---

   # Device Overview
   Brief description of the device

   ## Hardware Features
   - List key hardware features
   - Include GPIO pin assignments
   - Note any special requirements

   ## Installation
   Installation/flashing instructions
   ```

   **config.yaml**: Your ESPHome configuration file
   
   **images/**: Add clear images of:
   - The complete device
   - Internal components (if disassembly is required)
   - Any special modifications needed

5. Test your configuration locally
6. Create a pull request with:
   - Clear description of the device
   - Any special considerations
   - Photos attached

### Pull Request Guidelines

- Ensure all required files are included
- Follow the existing file structure
- Use clear, descriptive commit messages
- Include good quality images
- Test your configuration before submitting
- Document any special requirements or modifications needed

## Need Help?

If you need assistance with your submission or have questions, you can:
- Join the [ESPHome community on Discord](https://discord.gg/KhAMKrd)
- [Open an issue](https://github.com/clydebarrow/device-configs/issues/new) in the repository
- Browse our [existing device configurations](/devices/) for examples

Thank you for contributing to our device database!
