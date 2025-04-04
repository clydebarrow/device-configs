---
board: esp8266
date_published: '2023-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Zemismart LED RGBWW Downlight
---

## Overview

The Zemismart LED RGBW Downlight is a Tuya-based downlight available
from various retailers online or from
[zemismart.com](https://www.zemismart.com) direct.

## Basic Configuration

Also known as *Zemismart 2,5 zoll WiFi RGBW Led Downlight 7w*:
``` yaml
output:
  - platform: esp8266_pwm
    pin: 14
    id: output_blue
  - platform: esp8266_pwm
    pin: 12
    id: output_green
  - platform: esp8266_pwm
    pin: 4
    id: output_red
  - platform: esp8266_pwm
    pin: 5
    id: output_coldwhite
  - platform: esp8266_pwm
    pin: 13
    id: output_warmwhite
light:
  - platform: rgbww
    name: '${device_name} Light'
    default_transition_length: 0s
    red: output_red
    green: output_green
    blue: output_blue
    cold_white: output_coldwhite
    warm_white: output_warmwhite
    cold_white_color_temperature: 6500 K
    warm_white_color_temperature: 2700 K
```