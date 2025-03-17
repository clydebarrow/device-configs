---
board: esp8266
date_published: '2021-12-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: Vivitar HA-1007-AU Power Strip
---

## Overview

The Vivitar HA-1007-AU Power Strip has four individually switched AC outlets (each has a status LED that do not seem to be individually controllable.
There are also four USB power/charge ports, all switchable but not individually. There is a button and blue and red controllable leds.

## GPIO Pinout

| Pin     | Function                           |
|---------|------------------------------------|
| GPIO0   | Blue LED (Inverted: true)          |
| GPIO01  | Push Button (Inverted: true)       |
| GPIO02  | None                               |
| GPIO03  | Red LED (Inverted: true)           |
| GPIO04  | Relay1 - Socket A (Inverted: true) |
| GPIO05  | Led2i - Master (Inverted: true)    |
| GPIO09  | None                               |
| GPIO10  | None                               |
| GPIO12  | Relay3 - Socket C (Inverted: true) |
| GPIO13  | Relay2 - Socket B (Inverted: true) |
| GPIO14  | Relay4 - Socket D (Inverted: true) |
| GPIO15  | None                               |
| GPIO16  | Relay5 - USB                       |

## Getting up and running

The device can be flashed using tuya-convert.

## Code

This yaml is borrowed from the author of the Arlec PB89HA Power Board page. The multi click stuff for the button is optional, but can be useful if you are at the powerboard.
The blue led is used as a status led and flashes as the wifi is connecting.
The red led is used as an indication that the master switch is on (none of the sockets actually get any power if this is off)
If the "master" switch is off, it will turn off all the other switches so there's no confusion from the state of the LED's per individiual socket
Turning on any individual socket should also turn on the master automatically