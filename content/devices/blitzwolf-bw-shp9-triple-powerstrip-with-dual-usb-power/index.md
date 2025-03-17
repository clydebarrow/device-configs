---
board: esp8266
date_published: '2020-08-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Blitzwolf BW-SHP9 Triple powerstrip with dual USB power
---

## Overview

![Product Measurements](./BlitzWolf-BW-SHP9-Power-strip-measurement.jpg "Product Measurements")
Model reference: BW-SHP9
The powerstrip has four controllable relays, one for each socket, and one for the dual 2.4A usb power.
Manufacturer: [BlitzWolf](https://www.blitzwolf.com/BlitzWolf-BW-SHP9-15A-3300W-Smart-Power-Strip---3-Outlets-EU-with-Dual-USB-2.4A-Output,-Remote-Control,-Timing-Function,-Voice-Control,-Safety-Protection-and-Indicator-Light-p-417.html)

## How to flash

1. Open
   There are 6 triangle screws to open the box.
  ![Product outside](./BlitzWolf-BW-SHP9-Power-strip-outside.jpg "Product outside")
  
2. Unmount circuit from the box
   6 more screws (classic ones)
  
3. Pins
   Pins are at the corner, near usb ports. **Vcc is not 3V**, it needs to be >4V.
   To configure chip for flashing GPIO0 needs to be pulled down to ground at boot.

## GPIO Pinout

| Pin    | Function                   |
|--------|----------------------------|
| GPIO12 | Relay1                     |
| GPIO13 | Button  (pullup, inverted) |
| GPIO14 | Relay2                     |
| GPIO05 | Relay3                     |
| GPIO15 | Relay4  (usb power)        |
| GPIO00 | Blue LED                   |

## Basic Config

The configuration has some default sensors for wifi reporting etc.
There are LED's showing the state of each socked, but they are not settable through GPIO's, they just reflect the state of the socket directly.

## Advanced config additions

In the esphome section, you can perform actions when the device boots:
Under wifi this can be added, this will set up static IP, allow the device to connect to a hidden SSID (fast_connect) and create a backup AP
This wll activate the internal webserver with password protection
To set time locally to the same as on the HomeAssistant (better logging)
To have different data shown for the device (ESPHome version) and the wifi. Will appear as sensors in HA.
This will create sensors so that you can track wifi coverage for the devices, and also note the uptime for the devices.