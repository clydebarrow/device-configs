---
board: esp8266
date_published: '2021-12-24T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Etekcity Smart Outdoor WiFi Outlet Plug ESO15-TB
---

## Overview

Converted from [Tasmota](https://templates.blakadder.com/etekcity_ES015-TB.html).
[Etekcity Site](https://www.etekcity.com/products/smart-outdoor-wifi-outlet-eso15-tb)

## Flashing

Remove the four phillips head screws and remove the plastic clamshell.
Then, remove a few more screws to remove the circuitry from the plastic enclosure.
The Rx, Tx, 3.3v, and Ground solder pads will then be visible to use.
GPIO0 (Pin 8) must be grounded on boot to place the device into boot loader mode.  
GPIO0 also has a test pad which could be labeled "TI0" that is on the far right (looking at the board where test pads for power is on the left, GND near center, and TX/RX the right) side near the RX/TX test pads.

## GPIO Pinout

|Pin   |Function   |
|------|-----------|
|GPIO4 |Relay 1    |
|GPIO5 |Relay 2    |
|GPIO9 |Led 1      |
|GPIO12|HLW8012 CF1|
|GPIO13|HLW8012 CF |
|GPIO14|Button 1   |
|GPIO15|HLW8012 SEL|
|GPIO16|Led 2      |