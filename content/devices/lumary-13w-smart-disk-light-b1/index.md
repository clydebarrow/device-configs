---
board: BK7231N
date_published: '2023-05-31T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
title: Lumary 13W Smart Disk Light B1
---

## Overview

![Box](box.jpg "Box")
![Front](front.jpg "Front")
![Back](back.jpg "Back")

## Custom Firmware Needed

This device uses Beken BK7231N chip on CBU PCB module that comes with Tuya firmware. It can be flashed with ESPHome using cloudcutter following instructions [here](https://docs.libretiny.eu/docs/projects/esphome/).
This requires a custom fork of ESPHome to complie the firmware for the Beken MCU as it is not natively support by ESPHome yet (<https://github.com/esphome/esphome/pull/3509>).
Cloudcutter relies on a vulnerability in the original Tuya firmware to work, so before attempting to use cloudcutter, pair the light using Tuya app on your phone (you can use a guest account), and check the firmware version (under Software Update section - be careful not to trigger the update though). The list of incompatible firmware versions is [here](https://github.com/tuya-cloudcutter/tuya-cloudcutter/wiki/Known-Patched-Firmware). In case your version is not compatible, you can either resort to alternative flashing methods that requires disassembly and wiring, or you can try buying another unit of the same model (e.g., try alternative pacakaging - 4 pack instead of 1-pack, or vice versa).

## GPIO Pinout

Due to the fact that this uses a custom ESPHome firmware the pin numbers start with a P instead of the usual GPIO
| Pin | Name   | Function         |
| --- | ------ | ---------------- |
| P6  | LED    | LED Driver Clock |
| P7  | LED    | LED Driver Data  |