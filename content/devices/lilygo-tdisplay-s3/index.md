---
board: esp32s3
date_published: '2024-04-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: https://www.lilygo.cc/en-ca/products/t-display-s3
standard:
- global
tags:
- misc
title: Lilygo TDisplay S3
---

## Schematic

## Basic Configuration

```yaml
esphome:
  name: s3
  friendly_name: ESP32-S3 T-Display
  platformio_options:
    board_build.f_flash: 80000000L
    board_build.partitions: default_16MB.csv
    board_build.arduino.memory_type: qio_opi
external_components:
  - source: github://landonr/lilygo-tdisplays3-esphome
    components: [tdisplays3]
esp32:
  board: esp32-s3-devkitc-1
  variant: esp32s3
  framework:
    type: arduino
  flash_size: 16MB
logger:
api:
ota:
  platform: esphome
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO0
      inverted: true
    name: "Button 1"
  - platform: gpio
    pin:
      number: GPIO14
      inverted: true
    name: "Button 2"
output:
  - platform: ledc
    pin: GPIO38
    id: gpio38
    frequency: 2000
light:
  - platform: monochromatic
    output: gpio38
    name: "Backlight"
    restore_mode: RESTORE_DEFAULT_ON
# You can either setup the backlight as a switch like below or make it dimmable using a light output like above
# switch:
#   - platform: gpio
#     pin: GPIO38
#     name: "Backlight"
#     id: backlight
#     internal: true
#     restore_mode: RESTORE_DEFAULT_ON
display:
  - platform: tdisplays3
    id: disp
    update_interval: 1s
    rotation: 270
    lambda: |-
      it.printf(20, 70, id(roboto), Color(255, 0, 0), id(ha_time).now().strftime("%Y-%m-%d %H:%M:%S").c_str());
# Used for example above
font:
  - file: "gfonts://Roboto"
    id: roboto
    size: 30
time:
  - platform: homeassistant
    id: ha_time
```