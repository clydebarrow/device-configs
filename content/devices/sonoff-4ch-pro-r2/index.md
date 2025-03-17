---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff 4CH Pro R2
---

## GPIO Pinout

| Pin    | Function                             |
| ------ | ------------------------------------ |
| GPIO0  | Push Button 1 (HIGH = off, LOW = on) |
| GPIO9  | Push Button 2 (HIGH = off, LOW = on) |
| GPIO10 | Push Button 3 (HIGH = off, LOW = on) |
| GPIO14 | Push Button 4 (HIGH = off, LOW = on) |
| GPIO12 | Relay 1 and its status LED           |
| GPIO5  | Relay 2 and its status LED           |
| GPIO4  | Relay 3 and its status LED           |
| GPIO15 | Relay 4 and its status LED           |
| GPIO13 | Blue LED (HIGH = off, LOW = on)      |

## Basic Configuration

## LED Configuration

Use _one_ of the following three configurations to adjust the led to your needs.  Note:  Using the Status LED on the 4CH Pro may cause relay 4 to activate on power up.
#

## Status LED (see <https://esphome.io/components/status_led.html>)

#

## Always-on led (plugged in == led on)

#