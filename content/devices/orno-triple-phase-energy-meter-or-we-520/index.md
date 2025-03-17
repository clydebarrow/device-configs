---
board: esp8266
date_published: '2022-03-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- misc
- gpio
- sensor
title: Orno Triple-Phase Energy meter OR-WE-520
---

## GPIO Pinout

| Pin    | Function             |
| ------ | -------------------- |
| GPIO15 | Input (HIGH = pulse) |

## Connection

Pull's D8 high on pluse from energy meter (800 per kilowatt)
- Connect S0+ to 3.3
- Connect S0- to D8