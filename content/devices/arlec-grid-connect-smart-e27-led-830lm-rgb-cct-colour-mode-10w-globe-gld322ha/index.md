---
board: esp8266
date_published: '2023-12-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
- gpio
title: Arlec Grid Connect Smart E27 LED 830lm RGB CCT Colour Mode 10W Globe (GLD322HA)
---

## Overview

Sold at Bunnings in Australia as [Model number GLD322HA](https://www.bunnings.com.au/arlec-grid-connect-smart-e27-led-830lm-rgb-cct-colour-mode-10w-globe_p0321374).
This device uses WB2L module which needs to be replaced with ESP-M3, DMP-L1, ESP8685-WROOM-05, DT-ESP-C05 or ESP8684-WROOM-05. Read more about module replacement in a [detailed guide](https://blakadder.com/replace-tuya-cb2l-wb2l-bw2l/).
If replaced with ESP-M3, then the following is the pinout:

## GPIO Pinout ESP-M3

| Pin    | Function              |
| ------ | --------------------- |
| GPIO01 | SM2135 Data           |
| GPIO03 | SM2135 Clock          |