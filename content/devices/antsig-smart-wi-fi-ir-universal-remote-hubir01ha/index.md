---
board: bk72xx
date_published: '2024-09-03T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
title: Antsig Smart Wi-Fi IR Universal Remote (HUBIR01HA)
---

## Overview

Sold at Bunnings in Australia. Model number HUBIR01HA. Based on the CB3S module, natively runs Tuya.
This configuration provides climate control but the device is a generic IR blaster that can control a wide range of IR devices.
Flashing is achieved by popping off the top cover and soldering to easily accessible pads for UART.
tuya-cloudcutter is untested - it may work but it's quite an easy device to flash by serial.

## GPIO Pinout

| Pin    | Function              |
| ------ | --------------------- |
| P6 | Reset button (active low) |
| P7 | IR Receiver |
| P8 | Status LED |
| P26 | IR Blaster Output |

## Flashing

- Open the blaster by prising off the translucent top - it's not glued or welded but does have a fair few clips holding it together
- Solder wires to the pads for 3V3, RST, TX, RX, and GND
- Connect 3V3, TX, RX, and GND to your USB UART adapter, and RST to GND (temporarily)
  - Note that if you have trouble flashing you may need to source a reliable 3.3V supply from some other place
- Generate a UF2 firmware file with ESPHome and flash using https://docs.libretiny.eu/docs/flashing/tools/ltchiptool/ - once you've clicked Start, disconnect RST from GND
  - This can take a few goes sometimes
- Once flashed, disconnect the wires and power from USB - any further updates you need to make can be done OTA (which is usually much faster)
- Take care when replacing the top - the clips aren't evenly spaced so you'll need to line them up right for it to go back together