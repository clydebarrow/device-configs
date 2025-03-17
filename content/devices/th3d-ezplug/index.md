---
board: esp8266
date_published: '2023-02-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: TH3D EZPlug+
---

## Overview

[TH3D Shop Link](https://www.th3dstudio.com/product/ezplug-open-source-wifi-smart-plug/)

## GPIO Pinout

| Pin    | Function                            |
| -----  | ------------                        |
| GPIO3  | Button Input                        |
| GPIO4  | BL0937 Ennergy Meter CF             |
| GPIO5  | HLW8012 Power Sensor CF1            |
| GPIO12 | HLW8012 Power Sensor SEL (Inverted) |
| GPIO13 | Status LED (Inverted)               |
| GPIO14 | Relay                               |

## Configuration Notes

* This includes basic overcurrent protection in the form of an automation
* Voltage divider is configured as I found mine, but you will need to verify your own voltage/current/power calibration