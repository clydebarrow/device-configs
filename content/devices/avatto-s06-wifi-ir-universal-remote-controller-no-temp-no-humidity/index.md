---
board: esp8266
date_published: '2021-04-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
title: AVATTO S06 WiFi IR Universal Remote Controller (No Temp/No Humidity)
---

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO4  | Blue Status LED    |
| GPIO14 | Remote Transmitter |
| GPIO5  | Remote Receiver    |
| GPIO13 | Reset Button       |

## Getting it up and running

This device needs very likely to be flashed manually. Tuya-convert didn't worked for me. I have powered the device with
a mobile charger during the flashing procedure, as the used serial cable sets to logic level based on the input voltage.
Which is 3.3V in this case.
| Serial | ESP         |
| ---    | ----        |
| RX     | TX          |
| TX     | RX          |
| RTS    | RESET       |
| 3.3V   | 3.3V        |
| GND    | GND         |
|        | GPIO0 (GND) |
#

## Flashing

```bash
# Create a backup of the original firmware
esptool.py -p /dev/ttyUSB0 -b 460800 read_flash 0x00000 0x100000 avotta_s06_original_firmware.bin
# Erase the flash
esptool.py -p /dev/ttyUSB0 erase_flash
# Upload the esphome firmware
esptool.py -p /dev/ttyUSB0 write_flash -fs 1MB 0x0 ir_remote.bin
```
#

## Hardware Hack

If you want to wake the device via the reset button on the bottom from deep sleep. You need to solder a peace of wire
between the GPIO13 and the RESET pin of the ESP8266 MCU.