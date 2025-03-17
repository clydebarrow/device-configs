---
board: esp32
date_published: '2023-07-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- switch
- gpio
- sensor
title: Sonoff M5 Wall Switch 1/2/3-gang
---

## Notes

- the Matter compatible version of this switch (part numbers ending in W, e.g. M5-2C-86W) is locked and cannot be flashed
- status LED (blue) in left-most button
- channel LEDs (red) are dimmable (PWM)
  while relays OFF; 100% bright when ON
- in 1-gang version LED 1 to/can be
  activated separately from Relay
- in 2-gang version LED 2 to/can be
  activated separately from Relay

## GPIO Pinout

#

## 1-Gang Version

| Pin    | Function            |
| ------ | ------------------- |
| GPIO00 | Button 1            |
| GPIO23 | Relay  1            |
| GPIO19 | LED    1            |
| GPIO05 | Status LED          |
| GPIO18 | PWM for LED 1       |
#

## 2-Gang Version

| Pin    | Function            |
| ------ | ------------------- |
| GPIO04 | Button 1            |
| GPIO15 | Button 2            |
| GPIO23 | Relay  1 / LED 1    |
| GPIO19 | Relay  2            |
| GPIO22 | LED    2            |
| GPIO05 | Status LED          |
| GPIO18 | PWM for LED 1/2     |
#

## 3-Gang Version

| Pin    | Function            |
| ------ | ------------------- |
| GPIO04 | Button 1            |
| GPIO00 | Button 2            |
| GPIO15 | Button 3            |
| GPIO23 | Relay  1 / LED 1    |
| GPIO19 | Relay  2 / LED 2    |
| GPIO22 | Relay  3 / LED 3    |
| GPIO05 | Status LED          |
| GPIO18 | PWM for LED 1/2/3   |

## Basic Configuration (2-Gang)