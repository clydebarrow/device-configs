---
board: esp8266
date_published: '2020-07-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: NX-SP201
---

## Overview

Dual outlet, dual relay socket with single channel power monitoring. Flashable via tuya-convert.
Multiple versions of this socket exist. The module the 'blue ESP' pinout came from was [purchased from this Amazon link](https://amzn.to/3lYqj9A), but no guarantees that one purchased from that link is the same. Even more versions of the NX-SP201 outlet also exist, based on pinouts listed on other sites.
Flashing the wrong pinout can brick the device! Enabling GPIO9 bricked the 'blue ESP' version of the plug (though GPIO10 also gave a warning, but did not brick the device). Though it is recoverable with UART/GPIO0 flashing, desoldering the module to access the ESP module's pins can damage it. Only enable pins that give the 'pin might already be used by the flash interface' warning (GPIO6-11) once you're sure that's the correct pin.

## GPIO Pinout

| Pin (Blue ESP)    | Pin (Green ESP) | Function   |
| ----------------- | --------------- | ---------- |
| GPIO0             | GPIO9           | Blue LED   |
| GPIO3             | GPIO2           | HLW Select |
| GPIO4 (inverted)  | GPIO14          | Button 1   |
| GPIO5             | GPIO4           | HLW CF     |
| GPIO12            | GPIO10          | Relay 1    |
| GPI013 (inverted) | GPIO12          | Button 2   |
| GPI014            | GPIO5           | HLW CF1    |
| GPI015            | GPIO13          | Relay 2    |

## Pictures

![alt text](/IMG_0642.jpg "Closed Front View")
![alt text](/IMG_0643.jpg "Opened Full View")
![alt text](/IMG_0644.jpg "Opened Top 8266 Chip")
![alt text](/IMG_0645.jpg "Opened Bottom 8266 Chip")

## Basic Configuration

## Split Configuration

If you have multiple of these sockets (some come in packs), you may want to keep the shared code in one file and only put device specific information in files for each relay.
nx-sp201-common.yaml:
And for each device's yaml: