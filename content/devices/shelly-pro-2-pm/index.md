---
board: esp32
date_published: '2025-01-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- eu
tags:
- relay
title: Shelly Pro 2 PM
---

## Overview

Information about the pinout and internals of the Shelly Pro 2 PM.
It's the same board as the [Shelly Pro 2](Shelly-Pro-2). The only
difference is the addition of two
[ADE7953](https://esphome.io/components/sensor/ade7953.html) chips (one on each
relay board).

## Pinout

ESP32 DOWDQ6 | Component
-------------|-------------
GPIO 0       |ADE7953 #1 SPI CS
GPIO 2       |ADE7953 RST
GPIO 4       |SN74HC595B SPI CS
GPIO 12      |SPI MISO
GPIO 13      |SPI MOSI
GPIO 14      |SPI CLK
GPIO 15      |ADE7953 #2 SPI CS
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
![Shift Register](../Shelly-Pro-2/shift-register.jpg)
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

## ADE7953

Each of the relay sub-boards has a dedicated ADE7953 chip to provide the power
monitoring feature.
While each ADE7953 provides two channels A & B, only the channel A of each
measures the valuable data. Channel B is likely measuring references (0V, 0A,
0W).
#

## Reset pin

Each ADE7953 has a reset pin, but both reset pins are connected to the same
GPIO (GPIO2). The reset pin is active low, which means that if we don't do
anything, reset will be asserted and maintained and the ESP32 won't be able to
talk to the ADE7953s.
So we need to set GPIO2 to a high value. See the `output:` section in the
configuration below.
#

## Calibration data

The active power values will both be negative, so we need to multiply them by
-1 to get them both positive.
##

## Arduino

On arduino platform, there is nothing to specify: the default values are
correct.
##

## esp-idf

On esp-idf platform, for some unknown reason the ADE7953 default value for
`voltage_gain`, `current_gain_*` and `active_power_gain_*` (which is
`0x400000`) is not taken into account, and `0x200000` ends up in the registers.
The only way I found to get around it on `esp-idf` platform is to use following
hack for each ADE7953 configuration:
`0x100000` will actually end up in the `active_power_gain_*` registers but
together with the other values, it will be correct.

## Basic Configuration

## Configuration as a garage door (or shutter)

In this setup, we control a garage door motor. We plug the opening phase to
`relay1`, and the closing phase to the `relay2`.
We plug an open button to `input1`, and a close button to `input2`.
We can then control the garage door either using the physical wall switch,
and/or using MQTT.