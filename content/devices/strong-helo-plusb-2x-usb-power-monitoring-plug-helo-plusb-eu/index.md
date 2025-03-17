---
board: esp8266
date_published: '2024-02-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- relay
- gpio
- sensor
title: Strong Helo PLUSB 2x USB Power Monitoring Plug (HELO-PLUSB-EU)
---

## Overview

![Strong Helo PLUSB 2x USB Power Monitoring Plug](strong_HELO-PLUSB-EU.webp "HELO-PLUSB-EU")
This plug has a socket output switched by a relay and a separately switchable dual USB power output. Has a rubber edge around the front face, and a push button above the socket. A red LED under the button switches on with the relay, and a blue one can be freely configured. It contains a TYWE3S module and a BL0937 power monitoring chip.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO00 | Button                             |
| GPIO04 | BL0937 CF                          |
| GPIO05 | HLWBL CF1                          |
| GPIO12 | HLWBL SELi                         |
| GPIO13 | Status LED (inverted)              |
| GPIO14 | Relay 1 (socket)                   |
| GPIO15 | Relay 2 (USB power)                |

## Initial Setup

Remove the 4 screws at the back of the device. Requires triangular bit to unscrew case, but Torx 7 also works. Remove the daughterboard by unscrewing the interal screws. The daughter-board is held by 3 internal smaller screws, remove that too, but be careful as wires are short. No need to remove the main board, as the MCU is on the daughter-board. Disconnect the internal cable connecting the two. This way the module becomes relatively easily accessible.
The TYWE3S module is ESP8266-based, so it can be flashed directly with ESPHome. You need to solder your USB-TTL adapter to the RX, TX, GND and 3V3 pins, then just hold down the onboard button while powering on the adapter. When only the red LED lights up, the board is in bootloader mode.