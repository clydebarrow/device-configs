---
board: esp8266
date_published: '2021-01-03T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
- au
- global
tags:
- relay
title: Shelly 1L
---

## GPIO Pinout

| Pin    | Function        |
| ------ | --------------- |
| GPIO0  | On-board LED    |
| GPIO5  | Relay           |
| GPIO4  | Switch Input    |
| GPIO14 | Switch Input    |
| A0     | ADC Temperature |

## Basic Configuration

In this configuration switch 1 is connected to the relay and toggles the light.
Switch 2 is published as a basic binary sensor. This allows you to use a dual plate switch where only a single light is present.
The first switch will control the light while the second switch can be used to trigger other automations/scenes.
A protection automation has been added to automatically turn off the relay when the device gets too hot.
Note: I used this temperature sensor configuration from another configuration, it has not been tested on accuracy.