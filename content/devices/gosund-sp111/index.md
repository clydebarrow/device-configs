---
board: esp8266
date_published: '2021-01-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Gosund SP111
---

## Warning

![Warning](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/260px-Warning.svg.png)
Looks like device chip was replaced to non-flashable custom tasmota chip.
Please be aware, that there is a new version of that outlet, often having the phrase `EP2` instead or in addition to `SP111`, sold starting in November 2020. For that version, the tuya script does not longer work! Also a breakless opening of the plug is much harder due to a removed screw on the bottom of the device.

## Flashing

The older devices can be flashed [using tuya-convert](/guides/tuya-convert/). Fresh out of the factory it will be in autoconfig mode. When plugged in for the first time tuya-convert will pick it up directly.

Make sure the plug has that screw on the bottom!

## GPIO Pinout

[see pinout](https://templates.blakadder.com/gosund_SP111_v1_1.html)
| Pin    | Function   |
| ------ | ---------- |
| GPIO00 | Led1i      |
| GPIO01 | None       |
| GPIO02 | LedLinki   |
| GPIO03 | None       |
| GPIO04 | HLWBL CF1  |
| GPIO05 | BL0937 CF  |
| GPIO09 | None       |
| GPIO10 | None       |
| GPIO12 | HLWBL SELi |
| GPIO13 | Button1    |
| GPIO14 | None       |
| GPIO15 | Relay1     |
| GPIO16 | None       |