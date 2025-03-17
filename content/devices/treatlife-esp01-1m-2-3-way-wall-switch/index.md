---
board: esp8266
date_published: '2020-11-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- switch
title: Treatlife esp01_1m 2/3-Way Wall-Switch
---

## Notes

* push button wall switch
* 2 way bought here: <https://amzn.to/3stsGDw>
* 3 way bought here: <https://amzn.to/3cs4R9u>
* this dude shows how to flash it: <https://www.digiblur.com/2020/01/tuya-convert-23-update-flash-tuya.html>
* unlike the 3 way switch, the 2 way switch does not have a power sense pin. To solve this issue, and allow the smart switch to be smart, this code turns the White LED on when the light is off and, led off when the light is on. This allows the LEDs pin state to be used as a power sense, to determine whether to turn the relay on or off.

## GPIO Pinout

#

## 2-Way Version

| Pin     | Function                              |
|---------|---------------------------------------|
| GPIO04  | White LED (Power Sensor)              |
| GPIO5   | Status LED                            |
| GPIO12  | Relay 1                               |
| GPIO13  | Button 1                              |
#

## 3-Way Version

| Pin     | Function                              |
|---------|---------------------------------------|
| GPIO04  | White LED                             |
| GPIO5   | Status LED                            |
| GPIO12  | Relay 1                               |
| GPIO13  | Button 1                              |
| GPIO14  | Power Sensor                          |

## Basic Configuration (2-Way)

## Basic Configuration (3-Way)

## Button manipulation (Adds Double Click and Long Press event triggers)

## Home Assistant light entity (Converts it from a switch to a Light Entity)

## Home Assistant example automation that uses the event triggers stated above

This assumes that you have defined all_lights using platform: group.