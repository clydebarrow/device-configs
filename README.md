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

## Live site

The site is hosted at [https://devices.control-j.com](https://devices.control-j.com)

## Adding New Device Configurations by Form Submission

1. Go to the [ESPHome Device Configuration Form](https://devices.control-j.com/submission) and fill out the form.
2. Submit the form.
3. A PR will be created with the new device configuration.

## Adding New Devices by Manual Creation

0. Fork and clone the repository.
1. Create a new directory under `content/devices/` with your device name
2. Add a `device.md` file with device documentation
3. Include the ESPHome configuration in `config.yaml`
4. Add device images in the `images/` subdirectory
5. Create a PR with your changes

## Local Development

To run the site locally:

1. Install Hugo
2. Run `hugo` in the project root
3. Run `npx pagefind --site public` to index the site for search
4. Run `hugo server` in the project root
5. Visit http://localhost:1313

## Deployment

The site is deployed to Cloudflare Pages on push or merge to the `main` branch.
Preview builds are triggered on pull requests. A link to the preview will be added as a comment
in the PR.
