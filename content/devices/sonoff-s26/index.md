---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
- au
tags:
- plug
title: Sonoff S26
---

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO0  | Push Button (HIGH = off, LOW = on) |
| GPIO12 | Relay and Red LED                  |
| GPIO13 | Blue Status LED                    |

## Basic Configuration

```yaml
# Basic Config
esphome:
  name: sonoffs26_1
  
esp8266:
  board: esp01_1m
  board_flash_mode: dout
wifi:
  ssid: "ssid"
  password: "wifi_password"
  ap:
    ssid: "ap_ssid"
    password: "Password"
  domain: ".domain.com"
status_led:
  pin:
    number: GPIO13
    inverted: false
logger:
api:
  encryption:
    key: !secret api_encryption_key
ota:
  password: "OTA_password"
web_server:
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO0
      mode: INPUT_PULLUP
      inverted: True
    name: "Sonoff S26_1 Button"
    on_press:
      - switch.toggle: relay
  - platform: status
    name: "Sonoff S26_1 Status"
sensor:
  - platform: wifi_signal
    name: "sonoffs26_1 WiFi Signal"
    update_interval: 60s
switch:
  - platform: gpio
    name: "Sonoff S26_1 Relay"
    pin: GPIO12
    id: "relay"
  - platform: restart
    name: "sonoffs26_1 Restart"
```