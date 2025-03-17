---
board: esp32
date_published: '2024-09-03T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: CrowPanel 5.0" HMI ESP32 display (by Elecrow)
---

## Drivers

* Processor: ESP32-S3-WROOM-1-N4R8 (using `esp32-s3-devkitc-1` board)
* Touchscreen: `gt911`
* Display: ILI6122 & ILI5960 (using `rpi_dpi_rgb` plaform)

## GPIO Pinout

#

## I²C (used for touchscreen)

| Pin    | Function      |
| ------ | ------------- |
| GPIO19 | i2c SDA     |
| GPIO20 | i2c SCL     |
#

## Backlight

| Pin    | Function      |
| ------ | ------------- |
| GPIO2  | backlight   |
#

## Display

| Pin    | Function      |
| ------ | ------------- |
| GPIO40 | de_pin      |
| GPIO39 | hsync_pin   |
| GPIO41 | vsync_pin   |
| GPIO0  | pclk_pin    |
#

## Display Data pins

## Simple Configuration