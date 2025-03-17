---
board: esp8266
date_published: '2023-06-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Sonoff S31-lite
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