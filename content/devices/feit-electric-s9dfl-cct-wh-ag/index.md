---
board: bk72xx
date_published: '2024-04-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
title: Feit Electric S9DFL/CCT/WH/AG
---

## Basic Configuration

```yaml
substitutions:
  devicename: feit_electric_s9dfl-cct-wh-ag
esphome:
  name: $devicename
  friendly_name: Feit Electric S9DFL/CCT/WH/AG
bk72xx:
  board: cb3s
logger:
api:
  password: ""
ota:
  password: ""
wifi:
  networks:
  ap:
    password: !secret captive_portal_ap_password
web_server:
captive_portal:
output:
  - platform: libretiny_pwm
    # BP2308
    pin: P7
    frequency: 1 kHz
    id: br_pwm
    min_power: 0.005
    max_power: 1.00
    zero_means_zero: true
  - platform: libretiny_pwm
    # BP5926X
    pin: P6
    frequency: 1 kHz
    id: ct_pwm
    inverted: true
    min_power: 0.000
    max_power: 0.995
light:
  - platform: color_temperature
    name: $devicename
    brightness: br_pwm
    color_temperature: ct_pwm
    cold_white_color_temperature: 6500 K
    warm_white_color_temperature: 2700 K
```