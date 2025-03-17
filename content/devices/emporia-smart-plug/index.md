---
board: esp8266
date_published: '2023-08-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Emporia Smart Plug
---

## Initial Install

You must dissasemble the case to access the VDD, GND, RX, and TX pins. They can be accessed on the ESP daughterboard or from under the main board at the board connection. Modifying the rear housing is required to access the daugherboard mounting pins.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO13 | Push Button (HIGH = off, LOW = on) |
| GPIO4  | Relay                              |
| GPIO15 | RED LED (HIGH = on, LOW = off)     |
| GPIO12 | BL0937 SEL                         |
| GPIO5  | BL0937 CF                          |
| GPIO14 | BL0937 CF1                         |
|        | Blue LED                           |