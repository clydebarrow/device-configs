---
board: esp8266
date_published: '2024-10-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
- sensor
title: Cocoon DY180363 RGBW 8W Bulb
---

## General Notes

The Cocoon DY180363 was a RGB Smart Bulb sold at Aldi in Australia & the UK between 2020 and 2023.
The bulb had a few variants (`-E` for AU/Taiwan, and `-B` for the rest of the world), but this configuration should work for both.
[https://support.cocoonproducts.com.au/hc/en-au/sections/360000250915-Smart-LED-Light-Bulb-E27](https://support.cocoonproducts.com.au/hc/en-au/sections/360000250915-Smart-LED-Light-Bulb-E27)

## GPIO Pinout

| Pin     | Function                           |
|---------|------------------------------------|
| GPIO4   | PWM Light - red                    |
| GPIO5   | PWM Light - white                  |
| GPIO12  | PWM Light - green                  |
| GPIO14  | PWM Light - blue                   |

## Basic Configuration

Notes on the configuration code:
- Use the `mini`fied version to complete the initial flash, otherwise the compiled image will be too big for OTA.
- Then, once flashed, you can use the full example after updating the `use_address` value under `wifi:` to point to the new bulb  
#

## Minified Configuration

Take the output of this ESPHome build (which should be less than 500kb) and use it with [tuya-convert](https://github.com/ct-Open-Source/tuya-convert) to get a good base-flash.
#

## Full configuration

Once your device is configured, you can use the full-configuration below to add required sensors/connectivity, etc.