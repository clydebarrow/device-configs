---
board: esp8266
date_published: '2020-01-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: Arlec PB89HA Power Board
---

## Overview

The Arlec PB89HA power board is part of the [Grid Connect ecosystem](https://grid-connect.com.au/) and is sold at Bunnings in Australia and New Zealand.
It has five sockets: four individually controllable, plus one which is permanently powered (marked "ALWAYS ON").

## GPIO Pinout

| Pin    | Function                |
| ------ | ----------------------- |
| GPIO1  | LED (Inverted: true)    |
| GPIO3  | Button (Inverted: true) |
| GPIO04 | Relay 2                 |
| GPIO05 | Relay 1                 |
| GPIO12 | Relay 4                 |
| GPIO13 | Relay 3                 |

## Getting it up and running

#

## Tuya Convert

This power strip is a Tuya device, so if you don't want to open it up and flash it directly, you can [use tuya-convert to initially get ESPHome onto it](/guides/tuya-convert/). After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the power strip into "smartconfig" / "autoconfig" / pairing mode by holding the button for about 5 seconds.
- The status LED (in the button) blinks rapidly to confirm that it has entered pairing mode.

## Basic Configuration

## Advanced config: on-device button automations

To use one of these sample on-device automations, replace the whole `binary_sensor:` section from the basic configuration (above) with one from below. Note that if you want to also expose the button to Home Assistant, you can remove the `internal: True` line.
#

## Toggle all sockets

If any socket is turned on, pressing the button will turn all sockets off. Otherwise, pressing the button will turn all sockets on.
#

## Toggle sockets with single or double click

A single click toggles the first socket; a double-click toggles the second socket.
#

## Advanced (cycle + toggle all)

An alternate switching behavour, where:
- A short press turns on the next socket that is off (from 1 to 4)
- Once all are on, a short press will turn all sockets off
- A double press will turn the next socket off (from 1 to 4)
- Once all are off, a double press will turn all on
- A long press with turn all off if any are on, or will turn all on