# ESPHome Device Configurations

A Hugo-powered documentation site for ESPHome device descriptions and sample configurations.

## Project Structure

```
├── content/               # Device documentation and configurations
│   ├── devices/          # Individual device pages
│   │   └── device-name/  # Each device in its own directory
│   │       ├── device.md # Device documentation
│   │       ├── config.yaml # ESPHome configuration
│   │       └── images/   # Device images
├── themes/
│   └── device-docs/      # Custom Hugo theme
└── config.yaml          # Hugo configuration
```

## Adding New Devices

1. Create a new directory under `content/devices/` with your device name
2. Add a `device.md` file with device documentation
3. Include the ESPHome configuration in `config.yaml`
4. Add device images in the `images/` subdirectory

## Local Development

To run the site locally:

1. Install Hugo
2. Run `hugo` in the project root
3. Run `npx pagefind --site public` to index the site for search
4. Run `hugo server` in the project root
5. Visit http://localhost:1313

## Deployment

The site is deployed to Cloudflare Pages on push or merge to the `main` branch.
Preview builds are triggered on pull requests.
