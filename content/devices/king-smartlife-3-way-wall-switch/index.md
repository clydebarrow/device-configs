---
board: bk72xx
date_published: '2024-04-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- switch
- gpio
- sensor
title: King Smartlife 3-Way Wall Switch
---

## Notes

Silkscreen has King Smart Switch Tuya Panel V2021.10
This is a oem 'smartlife' branded switch. They come in 1-4 gang varieties. Moren than 4 gang is supplied on two modules mounted side by side.
The 6 gang is actually 2x3 switches.
Purchased from AliExpress.

## Flashing

Use cloud-cutter. Pick 2 `By Firmware Vesion and Name` at the time of writing search by firmware/vesion and use `1.1.0 - BK7231N / oem_bk7231n_dctrl_switch`
These are 'touch' buttons on this module. however i suspect there are a few different varieties.

## GPIO Pinout

#

## 3-Way Version

| Pin     | Function                              |
|---------|---------------------------------------|
| GPIO17  | Relay 1                               |
| GPIO6   | Button 1                              |
| GPIO26  | Relay 2                               |
| GPIO7   | Button 2                              |
| GPIO24  | Relay 3                               |
| GPIO8   | Button 3                              |
| GPIO28  | Status LED                            |

## Basic Configuration (3-Way)

## Button manipulation (Adds Double Click and Long Press event triggers)

## Home Assistant light entity (Converts it from a switch to a Light Entity)

## Home Assistant example automation that uses the event triggers stated above

This assumes that you have defined all_lights using platform: group.