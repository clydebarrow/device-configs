---
board: bk72xx
date_published: '2024-12-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: TomZN TOB9-VAP
---

## Notes

- Uses [BL0942](https://esphome.io/components/sensor/bl0942.html) for energy monitoring, which requires [calibration](https://esphome.io/components/sensor/bl0942.html#calibration)
- Uses an [H-Bridge](https://esphome.io/components/switch/hbridge.html) for controlling the output instead of a standard relay. One key difference is that the H-Bridge retains the last position upon power off without the need of `restore_mode`

## Product images

## Programming

Tuya Cloudcutter was [not able to work for this device](https://github.com/tuya-cloudcutter/tuya-cloudcutter/issues/742) (with firmware v1.0.15). If your device has an older firmware, it may be worth a try.
This device is powered by a [CBU](https://docs.libretiny.eu/boards/cbu) board (BK7231N), you can read [LibreTiny's instructions](https://docs.libretiny.eu/docs/platform/beken-72xx/) on how to flash it.
Disassembling this device is simple, provided you find a way to remove the golden tubes. Here is one way:

## GPIO Pinout

| Pin    | Function            | Notes    |
| ------ | ------------------- |----------|
| GPIO09 | Red LED             | inverted |
| GPIO10 | RX for BL0942       | RX1      |
| GPIO11 | TX for BL0942       | TX1      |
| GPIO15 | Blue LED (status)   | inverted |
| GPIO17 | Button              | inverted |
| GPIO24 | Bridge forward      | pulse    |
| GPIO26 | Bridge reverse      | pulse    |