---
board: ESP8266
date_published: '2024-01-26T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Maltec DH-20000A Dehumidifier
---

## Overview

This dehumidifier is very likely sold by lot of different brand names.
"G21" brand ones looks 100% identical.
This guide is based on dehumidifer without wifi module, but if you encounter one with tuya based module, you can replace it or do [tuya-cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter/).
This writeup is mostly to help others see how the device looks inside and so they do not need to figure out datapoints from scratch.

## Hardware

In my opinion easiest way to add connectivity to this device is use wifi connector present on board (in my case even for device sold with wifi capability). When using esp32-c3 or esp32-s3 on most boards we can take advantage of D+ and D- USB wires being connected to GPIO19 and GPIO20.
![board](board.jpg "board")

We can create cable using JST XH 2.54mm connector connected to the RX TX 5V GND on the connector to the basic 4 wire usb-C cable where we connect RX and TX pins to D+ and D- of the usb cable (green and white). GND will be black and 5V red of the usb cable.

## Board Configuration

Configuraiton is based on [Ningbo Fuda 5250B Dehumidifier](https://devices.esphome.io/devices/Ningbo-Fuda-5250B-Dehumidifier)