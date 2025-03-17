---
board: esp8266
date_published: '2024-12-17T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
- gpio
title: Globe Edison Bulb 34873
---

## Overview

The LEDs are controlled by 2 PWM output (Cold and White channels).

## GPIO Pinout

| Pin    | Function         |
| ------ | ---------------- |
| GPIO12 | Warm White (PWM) |
| GPIO14 | Cold White (PWM) |

## Getting it up and running

#

## Tuya Convert

As the LED bulb do not have any physical buttons, by turning the bulb on and off three times, you will enter pairing mode. This will cause the bulb to start flashing.
Then follow the [tuya-convert](/guides/tuya-convert) guide.