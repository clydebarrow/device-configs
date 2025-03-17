---
board: bk72xx
date_published: '2025-01-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- switch
title: DETA Grid Connect Smart Switch 2 Way 2 Gang (6952HA)
---

## Overview

The DETA [Switch Smart Grid 2 Way 2 Gang (6951HA)](https://www.bunnings.com.au/deta-switch-smart-grid-2-way-2-gang_p0346911) is part of the [Grid Connect ecosystem](https://grid-connect.com.au/), and is sold at Bunnings in Australia.

Also known as:
- Smart Double Gang 2 Way Touch Light Switch ([Deta website](https://detaelectrical.com.au/product/deta-grid-connect-smart-double-gang-2-way-touch-light-switch/))
- Twin Gang 2 Way Touch Light Switch ([Grid Connect website](https://grid-connect.com.au/download/6952ha/))
#

## Variations

As shown on the front of the packet.
| Variation   | Microcontroller | Board     | Firmware | Flashing methods |
| ----------- | --------------- | --------- | -------- | ---------------- |
| Series 2    | Beken BK7231N   | Tuya CB3S | v1.3.5   | Manual flashing  |

## Setup Guide

#

## Manual Flashing

You'll need a USB to serial adapter.
1. Remove the front plastic face.
2. Unscrew the two exposed screws.
3. Remove the clear panel and the small PCB underneath.
4. Connect TX, RX, GND and 3V3 to the USB to serial adapter.

Follow the [ltchiptool](https://github.com/libretiny-eu/ltchiptool) documentation to flash the microcontroller with [ESPHome Kickstart](https://github.com/libretiny-eu/esphome-kickstart/releases), or build an ESPHome package from the configuration below.

## GPIO Pinouts

#

## Series 2 (CB3S) GPIO Pinouts

_See [Pinouts on CB3S Module Datasheet](https://developer.tuya.com/en/docs/iot/cb3s?id=Kai94mec0s076#title-5-Pin%20definition) for more detail_
| Pin    | Function                                                                          |
| ------ | --------------------------------------------------------------------------------- |
| P24    | Status LED  _(inverted)_ |
| P26    | Button 1 _(inverted)_ |
| P23    | Button 2 _(inverted)_ |
| P14    | Relay 1 and Button 1 LED |
| P6    | Relay 2 and Button 2 LED |
| P7     | Light 1 activation status, taking into account _this_ Light 1 switch and the _remote_ Light 1 switch _(inverted)_     |
| P8     | Light 2 activation status, taking into account _this_ Light 2 switch and the _remote_ Light 2 switch _(inverted)_     |

## Configuration Examples

#

## Series 2 (CB3S) Configuration Examples

#