---
board: esp8266
date_published: '2022-06-14T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- light
title: Shelly DUO GU10
---

## GPIO Pinout

| Pin   | Function   |
| ----- | ---------- |
| GPIO4 | Temprature |
| GPIO5 | Brightness |
This template was made using the Tasmota template found [here](https://github.com/arendst/mgos-to-tasmota) with the [GPIO conversion in the Tasmota docs](https://tasmota.github.io/docs/GPIO-Conversion/#gpio-conversion).
```yaml
esphome:
  name: your-name
esp8266:
  board: esp01_1m
  restore_from_flash: true
# Enable logging
logger:
# Enable Home Assistant API
api:
ota:
  password: !secret ota_password
  safe_mode: true
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "YourSSID"
    password: !fallback_password
captive_portal:
  
output:
  - platform: esp8266_pwm
    id: warm_white
    pin: GPIO4
  - platform: esp8266_pwm
    id: brightness
    pin: GPIO5
light:
  - platform: cwww
    name: Your device name
    warm_white: warm_white
    cold_white: brightness
    cold_white_color_temperature: 6500 K
    warm_white_color_temperature: 2700 K
```