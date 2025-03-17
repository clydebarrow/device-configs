---
board: esp32
date_published: '2022-03-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Wyze Outdoor Plug
---

## Initial Install

This device requires a triangle screw driver bit to [remove the cover and use the serial header](https://www.digiblur.com/2021/03/how-to-flash-wyze-outdoor-plug-esphome.html) for the first upload.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO5  | Status LED                         |
| GPIO18 | Button 1                           |
| GPIO17 | Button 2                           |
| GPIO15 | Relay 1                            |
| GPIO32 | Relay 2                            |
| GPIO19 | Relay 1 LED                        |
| GPIO16 | Relay 2 LED                        |
| GPIO34 | LUX Sensor                         |
| GPIO25 | SEL                                |
| GPIO27 | CF                                 |
| GPIO26 | CF1                                |

## Notes

- The Lux sensor is a binary sensor and can be used like a daylight sensor. (e.g. turn on lights when it gets dark)
- This device can be used as a Bluetooh proxy in Home Assistant see the [docs on how to enable](https://esphome.io/components/bluetooth_proxy)