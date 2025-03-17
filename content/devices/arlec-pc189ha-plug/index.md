---
board: esp8266
date_published: '2021-01-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
title: Arlec PC189HA Plug
---

## Overview

The Arlec PC189HA power plug is part of the [Grid Connect ecosystem](https://grid-connect.com.au/) and is sold at Bunnings in Australia and New Zealand.
As at the time of writing, they can be flashed without disassembly or soldering [using tuya-convert](#tuya-convert).

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO04 | Blue LED (Inverted: true) |
| GPIO12 | Relay                     |
| GPIO14 | Button                    |

## Getting it up and running

#

## Tuya Convert

These switches are Tuya devices, so if you don't want to open them up to flash directly, you can [use tuya-convert to initially get ESPHome onto them](/guides/tuya-convert/). After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the switch into "smartconfig" / "autoconfig" / pairing mode by holding any button for about 5 seconds.
- The status LED blinks rapidly to confirm that it has entered pairing mode.