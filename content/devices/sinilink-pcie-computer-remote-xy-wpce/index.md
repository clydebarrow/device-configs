---
board: esp8266
date_published: '2022-10-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Sinilink PCIe Computer Remote (XY-WPCE)
---

## Overview

A simple remote control/monitor device for use with standard PCs.
Essentially a proxy between the power switch and motherboard.
Depending on the version, the module may also be wired between the power LED(s) to discern the power status (running/off/sleep) of the PC.
The `WPCE` version (this device) determines the power status via the normal/aux 3v3 rails on the PCI-Express slot so it does not feature the power led connections.
![Product Image](sinilink_XY-WPCE.webp "Product Image")

## Flashing

The module uses `1mm` pitch headers which are considerably smaller and fussier to deal with relative to the `2.54mm` pitch headers that are more common.
You don't _have_ to solder wires to program, though.
I was able to strip some **solid core** cat5 cables; the bare copper wire was _precisely_ the right size to fit inside of the hole.
![Product pinout](sinilink_XY-WPCE_pinout.webp "Product Pinout")
| ESP32 Pin | USB Serial Pin | Comments                                                                                                                          |
| --------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 3V3       | 3V3            | Connect to dedicated 3V3 1A power supply if encountering brown out                                                                |
| RST       | 3V3            | ESP needs the RST/EN pin pulled UP to activate the chip                                                                           |
| IO0       | Ground         | IO0 must be pulled down to enable bootloader mode                                                                                 |
| RX        | TX             |                                                                                                                                   |
| TX        | RX             |                                                                                                                                   |
| GND       | Ground         | If using a dedicated power supply with the USB programmer, make sure that the GND for the programmer and power supply are linked! |
Connect all 6 pins as indicated and _then_ power up the device and _then_ plug in the USB programmer.
The module should immediately enter boot loader mode and should be "discoverable" with `esptool.py`.
While not strictly necessary, you may wish to backup the flash content before overwriting with ESPHome.
```shell
# Confirm that you can "see" the module
❯ esptool.py --port /dev/ttyUSB0 chip_id
# Double check the type/size of the flash chip
❯ esptool.py --port /dev/ttyUSB0 flash_id
# Read out the flash; in this case, the `flash_id` command indicated that the ESP had 2MB of built in flash memory
❯ esptool.py --port /dev/ttyUSB0 read_flash 0x000000 0x200000 flash_backup.bin
```

## GPIO Pinout

| Pin    | Function | Notes                                                                                       |
| ------ | -------- | ------------------------------------------------------------------------------------------- |
| GPIO2  | OUTPUT   | Status LED (inverted)                                                                       |
| GPIO4  | INPUT    | Button on module PCB, used by OEM firmware for WiFi config (inverted)                       |
| GPIO5  | OUTPUT   | Wired to PC motherboard, simulates pressing the power button                                |
| GPIO10 | INPUT    | Wired to the PC power button (inverted)                                                     |
| GPIO12 | INPUT    | Wired to the `3v3` power rail on PCI-Express slot to detect if PC is powered up. (inverted) |

## Basic Configuration

The configuration below covers just the basics for getting the various GPIO pins configured / usable in ESPHome.
Depending on your specific needs, more configuration will likely be needed.
E.G.: most motherboards will interpret the power button being pressed for 5+ seconds to mean "shutdown _now_". Exposing `GPIO5` to Home Assistant _directly_ as a gpio switch may result in the PC powering off a few seconds after it's powered on.