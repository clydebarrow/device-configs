---
board: esp8266
date_published: '2020-04-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- switch
title: Nameless DS-102 2/3-Gang Wall-Switch
---

## Warning

As of May 2022 these switches use a WB3S chip (BK7231T) and are no longer compatible with esphome!

## Notes

- push button wall switch
- bought here: <https://www.aliexpress.com/item/32996643708.html?spm=a2g0s.9042311.0.0.19a74c4dRi4rTg>
- this dude shows how to flash it: <https://community.home-assistant.io/t/wifi-wall-switch-without-touch-1-2-or-3-gang/43075/38>

## GPIO Pinout

#

## 2-Gang Version

| Pin    | Function                        |
| ------ | ------------------------------- |
| GPIO0  | Status LED                      |
| GPIO3  | Button 1 (HIGH = off, LOW = on) |
| GPIO5  | Button 2 (HIGH = off, LOW = on) |
| GPIO13 | Relay 1                         |
| GPIO4  | Relay 2                         |
| GPIO14 | Blue LED in Button 1 (dimmable) |
| GPIO1  | Blue LED in Button 2 (dimmable) |
#

## 3-Gang Version

| Pin    | Function                        |
| ------ | ------------------------------- |
| GPIO0  | Status LED                      |
| GPIO12 | Button 1 (HIGH = off, LOW = on) |
| GPIO3  | Button 2 (HIGH = off, LOW = on) |
| GPIO5  | Button 3 (HIGH = off, LOW = on) |
| GPIO13 | Relay 1                         |
| GPIO4  | Relay 2                         |
| GPIO15 | Relay 3                         |
| GPIO16 | Blue LED in Button 1 (dimmable) |
| GPIO14 | Blue LED in Button 2 (dimmable) |
| GPIO1  | Blue LED in Button 3 (dimmable) |

## Basic Configuration (2-Gang)