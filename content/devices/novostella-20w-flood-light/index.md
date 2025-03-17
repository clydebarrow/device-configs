---
board: esp8266
date_published: '2019-10-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
- gpio
- sensor
title: Novostella 20W Flood Light
---

## Overview

5-channel PWM RGBWW smart flood light, 2700k-6500k tunable white with RGB colors, 20W, 2000LM, 120V AC, IP66 Waterproof, natively Tuya/Smart Life, works with Tuya-convert to flash to ESPHome. FCC-ID is [2AI5T-SFGD-002](https://fccid.io/2AI5T-SFGD-002/Internal-Photos/Internal-photos-4401574).
This template has been updated with "comment:" and "captive_portal:" feautures added in ESPHome v. 1.14

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO4  | Red channel        |
| GPIO5  | Cold White channel |
| GPIO12 | Green channel      |
| GPIO13 | Warm White channel |
| GPIO14 | Blue channel       |

## Basic Configuration

## Split Configuration

If you have several of these bulbs, you may prefer to keep the shared code in one file and only put the device-specific code in the files for each bulb.
In novoflood_common.yaml:
Then in each bulb's yaml: