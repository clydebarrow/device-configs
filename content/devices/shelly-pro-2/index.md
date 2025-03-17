---
board: esp32
date_published: '2024-01-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- eu
tags:
- relay
- gpio
- sensor
title: Shelly Pro 2
---

## Overview

Information about the pinout and internals of the Shelly Pro 2.
It's the same board as the [Shelly Pro 1](Shelly-Pro-1). The only
difference is the addition of a second relay.

## Pinout

ESP32 DOWDQ6 | Component
-------------|-----------
GPIO 4       |SN74HC595B SPI CS
GPIO 12      |SPI MISO
GPIO 13      |SPI MOSI
GPIO 14      |SPI CLK
GPIO 17      |LAN8720A CLKIN
GPIO 18      |LAN8720A MDIO
GPIO 19      |LAN8720A TXD0
GPIO 21      |LAN8720A TXEN
GPIO 22      |LAN8720A TXD1
GPIO 23      |LAN8720A MDC
GPIO 25      |LAN8720A RXD0
GPIO 26      |LAN8720A RXD1
GPIO 27      |LAN8720A CRS_DV
GPIO 35      |Reset Button
GPIO 36      |ADC Temperature 1
GPIO 37      |ADC Temperature 2
GPIO 38      |Switch input 1
GPIO 39      |Switch input 2

## Shift register

A shift register is controlling the WIFI RGB LEDs and the 2 relays.

SN74HC595B | Component
-----------|----------
QA         |Relay 1 + Out 1 LED
QB         |Relay 2 + Out 2 LED
QC         |WIFI RGB LED (Blue)
QD         |WIFI RGB LED (Green)
QE         |WIFI RGB LED (Red)
QF         |NC
QG         |NC
QH         |NC
The Out 1 status LED and the relay 1 are on the same output. The same is true
for the Out 2 status LED and the relay 2. Turning on the relay turns the
corresponding LED on.
The WIFI LED is an RGB LED. By turning each component on or off, you have
access to 8 configurations:
R|G|B| Color
-|-|-|-------
0|0|0|OFF
0|0|1|Blue
0|1|0|Green
0|1|1|Cyan
1|0|0|Red
1|0|1|Magenta
1|1|0|Yellow
1|1|1|White

## Programming Pinout

![Shelly Pro pinout](https://user-images.githubusercontent.com/38843794/156607973-259d2b27-976c-4b71-9198-ec737f6e95fb.png)
Note that the pin pitch is 1.27mm, so standard 2.54mm Dupont cables won't work.