---
board: esp8266
date_published: '2021-11-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- EU
tags:
- switch
- gpio
- sensor
title: Gosund SW9
---

## Flashing

Use a USB to serial adapter, and solder wires onto the pads marked TX, RX, 3.3V and GND. Hold "K2" button when connecting 3.3V to enter flash mode. Tuya Convert may work as well.

## GPIO Pinout

| Pin    | Function                               |  
| ------ | -------------------------------------- |
| GPIO0  | Button 1                               |
| GPIO2  | State (red) LED 1 (Inverted: true)     |
| GPIO4  | State (red) LED 2 (Inverted: true)     |
| GPIO5  | Button 2                               |
| GPIO12 | Relay 2                                |
| GPIO13 | Status (green) LED                     |
| GPIO14 | Relay 1                                |