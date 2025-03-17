---
board: esp8266
date_published: '2020-04-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- switch
- gpio
- sensor
title: Sonoff T1 R2 Touch Wall Switch
---

## Notes

- to boot chip (blue led blinking):
  connect ftdi
- to enter flash mode (blue led not blinking):
  short resistor R19 to GND
  then connect ftdi

## GPIO Pinout

#

## 2-Gang Version

| Pin    | Function                              |
| ------ | ------------------------------------- |
| GPIO0  | Touch Sensor 1 (HIGH = off, LOW = on) |
| GPIO9  | Touch Sensor 2 (HIGH = off, LOW = on) |
| GPIO5  | Relay 1                               |
| GPIO12 | Relay 2                               |
| GPIO13 | Status LED                            |
#

## 1-Gang Version

| Pin    | Function                            |
| ------ | ----------------------------------- |
| GPIO0  | Touch Sensor (HIGH = off, LOW = on) |
| GPIO12 | Relay                               |
| GPIO13 | Status LED                          |