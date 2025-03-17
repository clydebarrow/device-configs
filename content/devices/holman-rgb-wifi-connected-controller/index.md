---
board: esp8266
date_published: '2023-04-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
- gpio
- sensor
title: Holman RGB Wifi Connected Controller
---

## General Notes

Available from [Bunnings](https://www.bunnings.com.au/holman-rgb-wi-fi-garden-light-controller_p0189462)
Uses [TYWE3L](https://developer.tuya.com/en/docs/iot/wifie3lpinmodule?id=K9605uj1ar87n) module.
Can be programmed without removing from PCB.

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO0  |  Panel Button             |
| GPIO12 |  PWM Green                |
| GPIO13 |  PWM Red                  |
| GPIO14 |  PWM Blue                 |

## Status LED Not Implemented

The user manual says that the power led on the panel will flash on initialisation (wifi status?). I have not been able to determine what pin this led is connected so this configuration does not support status_led.