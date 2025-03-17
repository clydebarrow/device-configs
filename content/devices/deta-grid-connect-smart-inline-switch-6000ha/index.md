---
board: esp8266
date_published: '2021-06-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: DETA Grid Connect Smart Inline Switch 6000HA
---

## General Notes

The DETA [Smart Inline Switch](https://www.bunnings.com.au/deta-grid-connect-smart-inline-switch_p0098816) are made by Arlec as part of the [Grid Connect ecosystem](https://grid-connect.com.au/), and are sold at Bunnings in Australia and New Zealand. They can be flashed without disassembly or soldering [using tuya-convert](#tuya-convert) if still old stock, newer stock with updated Tuya firmware require dissassembly, soldering and flashing via serial.

## GPIO Pinout

| Pin    | Function |
| ------ | -------- |
| GPIO1  | Button   |
| GPIO13 | Blue LED |
| GPIO14 | Relay    |

## Getting it up and running

#

## Tuya Convert

These switches are Tuya devices, so if you don't want to open them up to flash directly, you can [use tuya-convert to initially get ESPHome onto them](/guides/tuya-convert/). After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the switch into "smartconfig" / "autoconfig" / pairing mode by holding any button for about 5 seconds.
- The status LED blinks rapidly to confirm that it has entered pairing mode.