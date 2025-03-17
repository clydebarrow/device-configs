---
board: esp8266
date_published: '2020-07-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sinilink XY-WFUSB USB Switch Relay
---

## Overview

This device can be found on [Aliexpress](https://www.aliexpress.com/wholesale?SearchText=Sinilink+XY-WFUSB)
for about 5 USD.

## Flashing

The case can be pried open without too much difficulty. Be careful to keep both
halves as parallel as possible to not break the pins that hold them together.
Flashing must be done by connecting an FTDI adapter to the 1.27 mm pads close to the
USB female port. Here is the pinout:

The pads are small, so this is a bit tricky. I did it with some sewing pins stuck
into dupont wires. It could be done as well connecting alternating pins from either
side of the board.
GPIO0 has to be connected to GND to enter programming mode.

## GPIO Pinout

| Pin    | Function             | Note                                                               |
| ------ | -------------------- | ------------------------------------------------------------------ |
| GPIO00 | User (Pad GPIO-0)    | Pulled-up to HIGH, boot fails if pulled LOW                        |
| GPIO01 | User (Pad TX)        | HIGH at boot, spits debug output at boot, boot fails if pulled LOW |
| GPIO03 | User (Pad RX)        | HIGH at boot                                                       |
| GPIO04 | Toggle Button        | Pin input LOW when button is pressed                               |
| GPIO05 | Relay and Red LED    | USB socket power with LED is ON when pin output HIGH               |
| GPIO14 | Green LED            | LED is ON when pin output HIGH                                     |
| GPIO16 | Blue LED             | LED is ON when pin output HIGH                                     |

## Basic Config

The following configuration mimics [this Tasmota template string](https://templates.blakadder.com/sinilink_XY-WFUSB.html).
The green LED is turned on when the relay is off and vice versa. The blue LED
is used as the status LED. The button toggles the state of the relay.
I had to increase the `ap_timeout`, this board seems to take some time to connect to the WiFi.
If the USB Relay controls a light, it can also be implemented like this:

## Useful links

* [Tasmota page](https://templates.blakadder.com/sinilink_XY-WFUSB.html)
* [Andreas Spiess' review and guide](https://www.youtube.com/watch?v=lrHhn2AVzSA)
* [Scargill's Tech Blog](https://tech.scargill.net/aliexpress-sinilink-wifi-usb-controller/)