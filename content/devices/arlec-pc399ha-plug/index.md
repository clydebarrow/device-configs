---
board: esp8266
date_published: '2023-06-17T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: Arlec PC399HA Plug
---

## Overview

The Arlec PC399HA power plug is part of the [Grid Connect ecosystem](https://grid-connect.com.au/) and is sold at Bunnings in Australia and New Zealand.
As at the time of writing, they can sometimes be flashed without disassembly or soldering [using tuya-convert](#tuya-convert).
Newer versions cannot yet be flashed without opening the device.
To flash the device manually the unit needs to be opened and then flashed over the UART connection. [An example video on youtube shows how to wire this into a UART adaptor.](https://www.youtube.com/watch?v=MAb5f0rxvKU)

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO03 | Button                    |
| GPIO04 | BL0937 CF                 |
| GPIO05 | BL0937 CF1                |
| GPIO12 | BL0937 SEL                |
| GPIO13 | Blue LED (Inverted: true) |
| GPIO14 | Relay                     |

## Getting it up and running

#

## Tuya Convert

These switches are Tuya devices, so if you don't want to open them up to flash directly, you can [use tuya-convert to initially get ESPHome onto them](/guides/tuya-convert/). After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the switch into "smartconfig" / "autoconfig" / pairing mode by holding any button for about 5 seconds.
- The status LED blinks rapidly to confirm that it has entered pairing mode.