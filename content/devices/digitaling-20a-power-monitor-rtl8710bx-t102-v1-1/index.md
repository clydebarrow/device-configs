---
board: rtl87xx
date_published: '2024-03-21T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- EU
tags:
- plug
- gpio
- sensor
title: Digitaling 20A Power Monitor RTL8710BX t102-v1.1
---

## Overview

Bought from: [Aliexpress](https://de.aliexpress.com/item/1005005374840269.html)
Board/Pinout: [libretiny.eu](https://docs.libretiny.eu/boards/t102-v1.1/#pinout)
Pictures: [elektroda.com](https://www.elektroda.com/rtvforum/topic4032920.html) (Pinout picture is off, uart2 is on the two unconnected pads labled 0/12.)
Due to a bug [libretiny-eu/libretiny#227](https://github.com/libretiny-eu/libretiny/issues/227) the board w2 needs to be selected for the relay to work:
Due to another bug you need to apply this fix to platforms\libretiny@1.4.1\cores\realtek-amb\arduino\src\wiring_irq.c https://github.com/libretiny-eu/libretiny/issues/155#issuecomment-1826470433

## Chips used

McuBoard: [T102_V1.1](https://docs.libretiny.eu/boards/t102-v1.1/)
MCU: RTL8710BX
Flash: GD25Q16ETIG  2 M x 8 NOR Flash
Power Sensor: [BL0937](https://developer.tuya.com/en/docs/iot-device-dev/Electricity-statistics?id=Kaunfo4am6icc)
Relay: [JIEYING  JY3FF-S-DC5V-A(K)](https://www.lcsc.com/datasheet/lcsc_datasheet_2309121625_JIEYING-RELAY-JY3FF-S-DC5V-A-K_C17702442.pdf)

## Flashing

Hook up 3v3 and GND
Connect TX2 and RX2 to serial interface.
Short TX2 to GND during power on, then flash via [ltchiptool](https://docs.libretiny.eu/docs/flashing/tools/ltchiptool/).
Can be flashed in-place without desoldering.

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| PA00   | BL0937 cf_pin               |
| PA05   | LED (Inverted)              |
| PA12   | BL0937 cf1_pin              |
| PA14   | BL0937 sel_pin (Inverted)   |
| PA15   | Relay & LED2                |
| PA18   | Button  (Inverted)          |

## platformio.ini

```ini
[env:wr2]
platform = libretiny
board = wr2
framework = arduino
```