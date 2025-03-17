---
board: esp32
date_published: '2022-01-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: Rowi ESP32 Smart Plug AU and NZ
---

## Overview

ESP32-based Smart Plug (Rowi), delivered with the pre-flashed ESPHome firmware - no need to open the device!
Configuration: ESP32, Embedded temperature sensor SHTC3, RGB LED.

Maker: Vaiotech (https://www.vaiotech.co.nz/products/)
Purchase online in Australia and New Zealand: https://www.kiwi-warmer.co.nz/for-developers/

## GPIO Pinout

| Pin   | Function             |
| ----- | -------------------- |
| GPIO4 | Button               |
| GPIO2 | Relay                |
| GPI18 | LED RED (inverted)   |
| GPI19 | LED GREEN (inverted) |
| GPI21 | LED BLUE (inverted)  |
| GPI16 | I2C_SDA              |
| GPI17 | I2C_SCL              |