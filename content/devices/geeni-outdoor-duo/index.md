---
board: esp8266
date_published: '2024-01-24T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Geeni Outdoor Duo
---

## Overview

[Amazon Link](https://amzn.to/3S3zypi)
[Manufacturer Link](https://mygeeni.com/products/outdoor-duo-dual-outlet-smart-wi-fi-plug-grey)

## Product Image

## Description

This device has two plugs, a green LED, a blue LED, and a button. The LEDs and button sit directly under a translucent rubber cap.
The plug is based on the Tuya WB3S module which is pin compatable with the ESP12 series of ESP8266 modules.
The factory WB3S can be converted using [tuya convert](https://devices.esphome.io/guides/tuya-convert) (untested on this model), but it is equally possible to replace the WB3S with an ESP12 with some basic hot air rework.
The control board is completely seperate from the relay board and can be removed easily for soldering.
If the module is going to be replaced with an ESP12 it is recommended to program the module using a USB board burning fixture, however it is still fairly straightforward to program the board using the using any 3.3v USB to Serial cable.
There are no pin headers broken out onto the board. First time programming connections will have to be made by soldering or spring pins.

## GPIO Pinout

| Pin    | Function                        |
| ------ | ------------------------------- |
| GPIO0  | Button (inverted)               |
| GPIO5  | Green LED (inverted)            |
| GPIO13 | Blue LED (inverted)             |
| GPIO14 | Left (when facing device) plug  |
| GPIO16 | Right (when facing device) plug |