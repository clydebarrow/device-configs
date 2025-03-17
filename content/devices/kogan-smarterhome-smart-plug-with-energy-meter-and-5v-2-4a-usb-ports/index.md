---
board: esp8266
date_published: '2020-05-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: Kogan SmarterHome Smart Plug With Energy Meter and 5V 2.4A USB Ports
---

## Overview

[https://www.kogan.com/au/buy/kogan-smarterhome-smart-plug-energy-meter-5v-24a-usb-ports/](https://www.kogan.com/au/buy/kogan-smarterhome-smart-plug-energy-meter-5v-24a-usb-ports/)

## GPIO Pinout

| Pin    | Function                   |
|--------|----------------------------|
| GPIO03 | Push Button                |
| GPIO13 | Green LED (Inverted: true) |
| GPIO14 | Relay                      |
| GPIO12 | HLW8012 SEL Pin            |
| GPIO04 | HLW8012 CF Pin             |
| GPIO05 | HLW8012 CF1 Pin            |

## Basic Config

## Appendix

If you are seeing incorrect power/current readings at higher power draws (i.e. current of 5A@240V while power is showing ~2000W), your unit most likely has a `BL0937` chip. You can verify this by looking at underside of the PCB, in the general area of the ESP chip. To get correct sensor results, make the following config changes:
The readings should be correct from now on.