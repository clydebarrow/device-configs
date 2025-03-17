---
board: esp8266
date_published: '2021-07-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- US
tags:
- switch
- gpio
- sensor
title: Gosund SW5
---

## Flashing

For older devices, it may be possible to use Tuya Convert to flash
For newer devices, use a USB to serial adapter, and solder wires onto the pads marked IO0, TX, RX, 3.3V and GND.

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO0  | Button                     |
| GPIO2  | State LED (Inverted: true) |
| GPIO14 | Relay                      |
| GPIO16 | Link LED (inverted: true)  |