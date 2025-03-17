---
board: esp8266
date_published: '2023-05-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Aoycocr X13 Outdoor Plug (2AKBP-X13)
---

## Overview

[Amazon Link](https://amzn.to/3XyT5Ag)
All information provided is from [Iprak](https://github.com/iprak) documentation.
The device has 2 indicator LEDs under the button and 2 indiviually controllable outlets.
[FCC filing](https://fccid.io/2AKBP-X13/)
[Tasmato](https://templates.blakadder.com/aoycocr_X13.html) wiki mentioned that it might not be able to use Tuya-Convert.

## Product Image

## GPIO Pinout

The GPIO pinout was learned from [Iprak](https://github.com/iprak/esphome/blob/master/Instructions/Aoycocr-x13.md) documentation.
The ESP module is ESP8266-S3 and the [FCC filing](https://fccid.io/2AKBPESP8266-S3/Users-Manual/User-Manual-3594791) provided the pins
1. EN
2. TOUT
3. GPIO12
4. GPIO14
5. GPIO13
6. GPIO15
7. GPIO0
8. GPIO2
9. GPIO4
10. GPIO 5
11. RX
12. TX
13. VCC
14. GND
The pins are on alternate sides:
```us
1  3  5  7  9  11  13
2  4  6  8  10 12  14
```
The GPIOs being used are:
* LED#1:GPIO0, inverted
* LED#2:GPIO2, inverted
* Button:GPIO13
* Relay1:GPIO15
* Relay2:GPIO12

## Basic Configuration

The below YAML template is from [Iprak](https://github.com/iprak/esphome/blob/master/x13.yaml) documentation.