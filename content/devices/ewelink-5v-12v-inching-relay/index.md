---
board: esp8266
date_published: '2025-01-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: eWelink 5V/12V Inching Relay
---

## Notes

- This device is advertised in eWelink as _Coolkit 0185_, which is a generic name used for more devices
- Has a red LED attached to the relay output that cannot be controlled independently
- Has a button for RF pairing, but the unit tested had no RF radio meaning it's a useless button

## Product Images

## Programming

This device is powered by a [PSF-B01](https://templates.blakadder.com/PSF-B.html) board (ESP8285). You can flash it through the programming pins:

The button which is aligned with the micro-USB port is connected to GPIO0. You can use it to boot the board into flashing mode.
You can also use the micro-USB to power the board with 5V during the flash, just make sure to still bridge GND with your programmer.

## GPIO Pinout

| Pin    | Function |
| ------ | ---------|
| GPIO00 | Button   |
| GPIO12 | Relay    |
| GPIO13 | Red LED  |