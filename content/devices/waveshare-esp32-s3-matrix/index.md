---
board: esp32
date_published: '2024-09-17T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Waveshare ESP32-S3 Matrix
---

## Overview

A module composed of:
- ESP32 S3 chip
- QMI8658C accelerometer and gyroscope
- 8 x 8 LED matrix
Powered by USB-C
Vendor documentation:
- [Product page](https://www.waveshare.com/esp32-s3-matrix.htm)
- [Wiki](https://www.waveshare.com/wiki/ESP32-S3-Matrix)

## GPIO Pinout

| PIN           | ESP32 | Description                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| VCC           | VCC   | Power input (3.3V)                                                      |
| GND           | GND   | GND                                                                     |
| QMI SDA       | 11    | QMI8658 I2C SDA pin                                                     |
| QMI SCL       | 12    | QMI8658 I2C SCL pin                                                     |
| QMI IRQ1      | 10    | QMI8658 iterrupt 1 (does not work as well as IRQ2)                      |
| QMI IRQ2      | 13    | QMI8658 iterrupt 2                                                      |
| WS2811 LED    | 14    | Controlling the 8x8 LED matrix via neopixel                             |

## Product Images

## Device Specific Config

> **NOTE**: While enabeling debug-logging works it recommended to disable it once everyhing works a expected if using interrupt updates. This because every update renders a lot of logging and have caused the online logging and even entire Home Assistant to become unresponsive until timeout and refresh.