---
board: esp8266
date_published: '2020-10-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- switch
- gpio
- sensor
title: Gosund SP112
---

## Flashing

The device can be flashed [using tuya-convert](/guides/tuya-convert). Fresh out of the factory it will be in autoconfig mode. When plugged in for the first time tuya-convert will pick it up directly.
If that doesn't work out for you, disassembly and wired flashing is explained [in this (German) video](https://www.youtube.com/watch?v=hfYFB1UENTQ).
**Attention**: As it turns out Tuya no longer builds them with esp chips. This means as of late 2021 you cannot flash esphome on new units.
**Alternative for newer devices:** [see below](#alternative-for-newer-devices)

## GPIO Pinout

| Pin    | Function                       |
| ------ | ------------------------------ |
| GPIO0  | LED red                        |
| GPIO2  | LED blue (Inverted: true)      |
| GPIO4  | HLWBL CF1 Pin                  |
| GPIO5  | BL0937 CF Pin                  |
| GPIO12 | HLWBL SEL Pin (Inverted: true) |
| GPIO13 | Relay USB                      |
| GPIO14 | Relay mains (Inverted: true)   |
| A0     | Button                         |

## Basic Configuration

## Alternative for newer devices

WARNING: Soldering involved, warranty broken, electric hazard, make sure you know what you are doing at your own responsibility
- Replace Cuco-chip with ESP-M2: https://github.com/c-klinger/Gosund-ESPMod/tree/main (courtesy: Chris Klinger)
- ESPHome basic configuration: