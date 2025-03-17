---
board: esp8266
date_published: '2020-03-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
title: Brilliant Smart WiFi Powerboard 20691/05
---

## Overview

The Brilliant Smart Smart WiFi Powerboard 20691 is available in Australia and New Zealand. It has four individually switched AC outlets (each has a status LED that do not seem to be individually controllable. There are also four USB power/charge ports, all switchable but not individually. There is a button and blue and red controllable leds.

## GPIO Pinout

| Pin    | Function                     |
| ------ | ---------------------------- |
| GPIO0  | Led1 (Inverted: true)        |
| GPIO14 | Push Button (Inverted: true) |
| GPIO13 | Red LED (Inverted: true)     |
| GPIO01 | None                         |
| GPIO02 | None                         |
| GPIO03 | Led2 (Inverted: true)        |
| GPIO04 | Relay1 (Inverted: true)      |
| GPIO05 | Button1                      |
| GPIO09 | None                         |
| GPIO10 | None                         |
| GPIO12 | Relay3 (Inverted: true)      |
| GPIO13 | Relay2 (Inverted: true)      |
| GPIO14 | Relay4 (Inverted: true)      |
| GPIO15 | None                         |
| GPIO16 | Relay5                       |

## Getting up and running

I flashed this device with tuya-convert, which worked straight off. I originally flashed with tasmota, then upgraded to esphome :)

## Code

This yaml is borrowed from the author of the Arlec PB89HA Power Board page. The multi click stuff for the button is optional, but can be useful if you are at the powerboard.
The blue led is used as a status led and flashes as the wifi is connecting. The red led is switchable and could be used for some sort of status indicator.