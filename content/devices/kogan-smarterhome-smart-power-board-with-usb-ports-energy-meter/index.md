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
title: Kogan SmarterHome Smart Power Board With USB Ports & Energy Meter
---

## Overview

[https://www.kogan.com/au/buy/kogan-smarterhome-smart-power-board-with-usb-ports-energy-meter/](https://www.kogan.com/au/buy/kogan-smarterhome-smart-power-board-with-usb-ports-energy-meter/)

## GPIO Pinout

| Pin    | Function                   |
|--------|----------------------------|
| GPIO00 | Push Button                |
| GPIO01 | Green LED (Inverted: true) |
| GPIO13 | Relay 1                    |
| GPIO14 | Relay 2                    |
| GPIO03 | Relay 3                    |
| GPIO15 | Relay USB                  |
| GPIO12 | HLW8012 SEL Pin            |
| GPIO04 | HLW8012 CF Pin             |
| GPIO05 | HLW8012 CF1 Pin            |
**Note:** In the below configuration, the push button (and surrounding LED) is configured to only control Relay 3 (End Plug)