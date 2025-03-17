---
board: esp8266
date_published: '2023-07-21T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
title: Bauhn (ALDI) ASPU-1019 Plug
---

## Overview

![Bauhn ASPU-1019](bauhn_ASPU-1019.webp "Photo of the Smart Plug")
The Bauhn ASPU-1019 Smart Wall Plug is sold through ALDI in Australia.
They can be flashed without disassembly or soldering [using tuya-convert](#tuya-convert).

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO04 | Relay                     |
| GPIO13 | Blue LED (Inverted: true) |
| GPIO14 | Button                    |

## Getting it up and running

#

## Tuya Convert

These wall plugs are Tuya devices, and you can compile the below code in ESPHome, "manually install" to get the .bin file, then [use tuya-convert to initially get ESPHome onto the device](/guides/tuya-convert/). After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the switch into "smartconfig" / "autoconfig" / pairing mode by holding the button for about 5 seconds until it clicks
- The status LED blinks rapidly to confirm that it has entered pairing mode.
- Be patient with tuya-convert, and you may need to try a few times to get tuya-convert to connect to the device