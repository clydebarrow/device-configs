---
board: esp32
date_published: '2022-07-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Waveshare E-Paper Cloud module
---

## Overview

A module composed of:
- ESP32 chip
- E-Paper display of several different sizes
- Battery
Powered by USB-C
Vendor documentation:
- [Product page](https://www.waveshare.com/2.13inch-e-paper-cloud-module.htm)
- [Technical wiki](https://www.waveshare.com/wiki/2.13inch_e-Paper_Cloud_Module)

## GPIO Pinout

| PIN (e-Paper) | ESP32 | Description                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| VCC           | VCC   | Power input (3.3V)                                                      |
| GND           | GND   | GND                                                                     |
| KEY           | 12    | User button, Low active                                                 |
| SCK           | 13    | CLK pin of SPI, clock input                                             |
| DIN           | 14    | MOSI pin of SPI, data input                                             |
| CS            | 15    | Chip select pin of SPI, Low active                                      |
| BUSY          | 25    | Busy pin, it indicates whether the e-Paper is busy                      |
| RST           | 26    | Reset pin, Low active                                                   |
| DC            | 27    | Data/Command control pin, Low for Command and High for Data             |
| ADC           | 36    | ADC data input, the voltage detected is the 1/3 of the battery voltage. |

## Product Images

## Flashing

Make sure you have a working driver installed for the CP2102 USB to serial convertor chip. I had problems with the stock MacOS Monterey one.
After that simply connect to the USB-C port and flash as usual (in case of problems with enter programming mode, connect IO0 to GND,
reset the device with reset button (EN) and keep the connection between GPIO0 and GND until programming starts).