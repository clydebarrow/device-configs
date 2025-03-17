---
board: bk72xx
date_published: '2024-06-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
title: Holman 4x34mm Spotlight
---

## Holman 4x34mm Wifi Spotlight Value Pack

Sold by Bunnings Warehouse this is a AU/NZ standard wall Low voltage spotlight based on the Beken BK7231N module. Now that ESPHome natively supports BK72XX microcontrollers, you can also put ESPHome directly onto the device.
The unit uses the Tuya CBU Wifi Module.

#

## Disassembly

You can flash directly to the outlet with USB to serial adapter.

## GPIO pinout

| PIN | GPIO # |   Component   |
|-----|--------|---------------|
|  2  | P16    | LED SPOTLIGHT |
|  3  | P20    |      Button 1 |
| 13  | GND    |        GND    |
| 14  | 3V3    |         3V3   |
| 15  | TX     |         TX    |
| 16  | RX     |         RX    |
| 18  | CEN    |   FOR FLASH   |