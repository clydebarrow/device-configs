---
board: esp32
date_published: '2021-09-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- light
- gpio
- sensor
title: Xiaomi Mi Smart LED Desk Lamp Pro
---

## Install ESPHome on Xiaomi Mi Smart LED Desk Lamp Pro

#

## Materials

To install ESPHome onto your Lamp you need
- Soldering iron
- Serial to USB stick
- 3 Volt Power from extern or the Serial-USB
#

## Open the Device

Unplug your Lamp and remove the screw under the rubber feet. Marked in the picture.

#

## Solder your debugger onto the Board

Plugin the 3Volts last.

#

## (Optional) backup old Firmware

If you want to backup the old firmware just use esptool.
Just replace COM or ttyUSB.
##

## Linux

```batch
python3 -m esptool -b 115200 --port /dev/ttyUSB0 read_flash 0x00000 0x400000 your/folder/firmwaredump.bin
```
##

## Windows

```batch
python.exe -m esptool -b 115200 --port COM3 read_flash 0x00000 0x400000 your/folder/firmwaredump.bin
```