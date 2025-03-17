---
board: esp8266
date_published: '2023-12-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- switch
- gpio
- sensor
title: Martin Jerry US-SS02 Humidity Sensor Switch
---

## Overview

[Amazon Link](https://amzn.to/3GQvWBH)
[Device on Martin Jerry](https://www.martinjerry.com/us-ss02)

## Flashing

These switches come preflashed with custom tasmota firmware, which leaves no space for an ESPHome binary OTA update.
If you would try to flash it with an ESPHome binary - update will fail.
This can be worked around by flashing the device with a [Tasmota minimal binary](http://ota.tasmota.com/tasmota/tasmota-minimal.bin.gz) first, then re-flashing with your ESPHome binary.

## GPIO Pinout

| Pin   | Function |
| ----- | -------- |
| GPIO3 | button |
| GPIO5 | relay  |
| GPIO4 | i2c SCL  |
| GPIO12 | red LED  |
| GPIO13 | i2c SDA  |
| GPIO14 | blue LED |