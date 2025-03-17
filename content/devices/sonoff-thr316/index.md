---
board: esp32
date_published: '2023-05-16T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff THR316
---

## GPIO Pinout

| Pin    | Function                           |
| ------ | -----------------------------------|
| GPIO00 | Push Button (HIGH = off, LOW = on) |
| GPIO13 | Right LED (Green/Auto)             |
| GPIO15 | Middle LED (Blue/WiFi)             |
| GPIO16 | Left LED (Red/Relay)               |
| GPIO21 | Relay                              |
| GPIO25 | Dallas Sensor Bus Data In/Out      |
| GPIO27 | Dallas Sensor 3.3V Power           |

## Configuration using DS18B20 temperature sensor

Will be exposed as a climate control system in Home Assistant.
Button usage:
- Short press: Manually turn on or off relay
- Long press: Manually turn on or off climate control
LED meaning:
- Left LED (Red): Lit when relay is turned on
- Middle LED (Blue) : Lit when WiFi is connected
- Right LED (Green) : Lit when climate control is turned on