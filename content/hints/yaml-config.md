### YAML Configuration

Provide a sample YAML configuration that demonstrates how to use the device with ESPHome.

Include:
* Essential device-specific configuration
* Pin assignments and component setups
* Required features and customizations

Do not include:
* External components
* !include statements
* Generic configurations (API, Bluetooth, etc.)
* Secrets or sensitive data
* Optional features not core to the device

If a Wi-Fi configuration is required, include only the ssid and password fields like this:

```yaml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```

For guidance, see the [ESPHome documentation](https://esphome.io/guides/configuration.html).
