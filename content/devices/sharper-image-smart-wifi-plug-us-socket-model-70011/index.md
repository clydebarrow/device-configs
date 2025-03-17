---
board: esp8266
date_published: '2023-12-10T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Sharper Image Smart Wifi Plug US Socket Model 70011
---

## Overview

| Front                                      | Back                                     |
| ------------------------------------------ | ---------------------------------------- |
|  |  |
The Sharper Image 70011 Smart Wall Plug was sold at various retailers such as Target and Amazon. It is a rebranded KMC 70011 smart plug without the HLW8012 energy monitoring chip.
They can be flashed with soldering or without soldering by using jumpers. The board is a standard ESP-12f variant of the ESP8266.

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO14 | Relay                     |
| GPIO13 | Green LED (Inverted: true)|
| GPIO0  | Button                    |

## Getting it up and running

#

## Serial Flashing

In order to program the Smart Plug, it's necessary to solder leads or place jumpers onto the esp8266 carrierboard as shown below. ESP devices should always be flashed in 3.3V mode.
If unclear from the picture, use the following pinouts:
TXD0 (left, bottom-most pin when viewed as above, orange)
RXD0 (directly above TXD0, yellow)
GND (left, top-most pin, brown)
Vcc (right, top-most pin, red)
It is required to hold the device's button down to boot into flashing mode until the device starts to erase the stock firmware.