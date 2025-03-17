---
board: esp8266
date_published: '2019-10-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
title: Reafoo 9W A26 Bulb
---

## Overview

5-channel PWM RGBWW smart light bulb, A26 shape, E26 base, 2700k-6500k tunable white with RGB colors, 100-240V AC 50/60Hz, natively Tuya/Smart Life, works with Tuya-convert to flash to ESPHome. FCC-ID is [2AJK8-LZ803](https://fccid.io/2AJK8-LZ803).

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO4  | Warm White channel |
| GPIO5  | Green channel      |
| GPIO12 | Blue channel       |
| GPIO14 | Cold White channel |
| GPIO15 | Red channel        |

## Basic Configuration

## Split Configuration

If you have several of these bulbs, you may prefer to keep the shared code in one file and only put the device-specific code in the files for each bulb.
In reafoo_common.yaml:
Then in each bulb's yaml: