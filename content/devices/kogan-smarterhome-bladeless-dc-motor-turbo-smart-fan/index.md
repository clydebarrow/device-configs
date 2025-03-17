---
board: esp8266
date_published: '2022-08-02T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- misc
title: Kogan SmarterHome Bladeless DC Motor Turbo Smart Fan
---

## Overview

[Product Listing](https://www.kogan.com/au/buy/kogan-smarterhome-bladeless-dc-motor-turbo-smart-fan-silver/)

## GPIO Pinout

| Pin   | Function |
| ----- | -------- |
| GPIO3 | RX      |
| GPIO1 | TX      |

## Basic Config

```yaml
substitutions:
  name: Kogan Smart Bladeless Fan
esphome:
  name: "${name}"
  platform: ESP8266
  board: esp01_1m
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
# Enable logging
logger:
  baud_rate: 0
# Enable Home Assistant API
api:
# Allow OTA updates
ota:
uart:
    rx_pin: GPIO3
    tx_pin: GPIO1
    baud_rate: 9600
tuya:
fan:
  - platform: tuya
    name: Your Fan Name
    switch_datapoint: 1
    speed_datapoint: 2
    speed_count: 9
    oscillation_datapoint: 8
```