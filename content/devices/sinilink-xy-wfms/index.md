---
board: esp8266
date_published: '2020-10-31T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: Sinilink XY-WFMS
---

## Overview

This device can be found on [Aliexpress](https://www.aliexpress.com/wholesale?SearchText=Sinilink+XY-WFF)
for about 5 USD.

## Flashing

Can be tricky to solder the ground connection to the PCB due to heavy ground plane, I used P50 pogo pins in a printed adapter for 6x1.25mm but the Vin- screw terminal could also be used for conveient ground connection.

## GPIO Pinout

| Pin    | Function          |
| ------ | ----------------- |
| GPIO02 | Blue LED          |
| GPIO04 | Relay and Red LED |
| GPIO12 | Toggle Button     |
| GPIO13 | Green LED         |

## Basic Config

The following configuration is adapted from https://github.com/esphome/esphome-devices/blob/main/_devices/Sinilink-XY-WFUSB-USB-Switch-Relay/Sinilink-XY-WFUSB-USB-Switch-Relay.md with only minor changes to fit the new device.
There is a 3D printable case available from https://www.thingiverse.com/thing:4638431 which I remixed from https://www.thingiverse.com/thing:4146127