---
board: esp8266
date_published: '2021-05-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
title: Feit BPA800/RGBW/AG/2
---

## Overview

Another Costco Variant. **Do not confuse with Feit BPA800/RGBW/AG/2(P) as they use different GPIO pin numbers.**
Be warned that you will have to disassemble the device to flash the firmware if it is newer than about March 2020.
Tuya changed their firmware such that tuya-convert no longer works as before.
```yaml
substitutions:
   comment: "...any comment, like the device hostname..."
   devicename: my_device
   platform: ESP8266
   board: esp01_1m
 esphome:
   name: $devicename
   platform: $platform
   board: $board
   comment: "${comment}"
 wifi:
   ssid: !secret wifi_ssid
   password: !secret wifi_password
   # Define SSID for hotspot (captive portal) in case wifi connection fails
   ap:
     ssid: AP_${devicename}
 #enable captive portal for hotspot
 captive_portal:
 ota:
   password: !secret ota_pass
 api:
   encryption:
    key: !secret encryption_key
sm16716:
  data_pin: GPIO14
  clock_pin: GPIO4
  num_channels: 3
  num_chips: 1
output:
  - platform: sm16716
    id: output_red
    channel: 0
    power_supply: rgb_power
  - platform: sm16716
    id: output_green
    channel: 1
    power_supply: rgb_power
  - platform: sm16716
    id: output_blue
    channel: 2
    power_supply: rgb_power
  - platform: esp8266_pwm
    id: output_warm_white
    pin: GPIO12
  - platform: esp8266_pwm
    id: output_cold_white
    pin: GPIO05
light:
  - platform: rgbww
    name: "${devicename}"
    color_interlock: true
    restore_mode: RESTORE_DEFAULT_OFF
    red: output_red
    green: output_green
    blue: output_blue
    cold_white: output_cold_white
    warm_white: output_warm_white
    cold_white_color_temperature: 6500 K
    warm_white_color_temperature: 2700 K
    gamma_correct: 0.0
power_supply:
  - id: rgb_power
    pin: GPIO13
```