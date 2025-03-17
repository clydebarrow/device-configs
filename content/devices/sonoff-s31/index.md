---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Sonoff S31
---

## Initial Install

This device cannot be converted to ESPHome using tuya-convert.
You must [remove the cover and use the serial header](https://www.adventurousway.com/blog/sonoff-s31) for first upload. Hold down the button while powering on the device to put it into bootloader mode.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO0  | Push Button (HIGH = off, LOW = on) |
| GPIO12 | Relay and its status LED           |
| GPIO13 | Green LED (HIGH = off, LOW = on)   |
| GPIO1  | RX pin (for external sensors)      |
| GPIO3  | TX pin (for external sensors)      |

## Basic Configuration

## Warnings

- `board: esp12e` is required to enable all 4MB of flash, allowing OTA updates to work after approximately version 2024.4.0
- `throttle_average: 60s` on cse7766 sensors is highly recommended with version 2024.2.0 or greater.
- `restore_mode: ALWAYS_OFF` avoids potential damage or instability when using the programmer’s supply.