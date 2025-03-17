---
board: esp32
date_published: '2025-01-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Lanbon L8 Smart Switch Panel
---

## Drivers

* Processor: ESP32-WROVER-B
* Touchscreen: `6336`
* Display: ST7789 (using `ili9xxxx` plaform)

## GPIO Pinout

#

## SPI (used for display)

| Pin    | Function      |
| ------ | ------------- |
| GPIO19 | clock   |
| GPIO23 | mosi    |
| GPIO25 | miso    |
| GPIO22 | cs      |
| GPIO21 | dc      |
| GPIO18 | reset   |
#

## I²C (used for touchscreen)

| Pin    | Function      |
| ------ | ------------- |
| GPIO4 | i2c SDA     |
| GPIO0 | i2c SCL     |
#

## Backlight

| Pin    | Function      |
| ------ | ------------- |
| GPIO5  | backlight   |
#

## Mood Light

| Pin    | Function      |
| ------ | ------------- |
| GPIO26  | red   |
| GPIO32  | green   |
| GPIO33  | blue   |
#

## Relay (3-gang switch model)

| Pin    | Function      |
| ------ | ------------- |
| GPIO12  | relay #1   |
| GPIO14  | relay #2   |
| GPIO27  | relay #3   |
#

## How To Flash

See BlackAdder's instruction on [how to flash custom firmware](https://blakadder.com/lanbon-L8-custom-firmware/).
No soldering required.
#