---
board: esp8266
date_published: '2022-11-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Lenovo 800lm RGBCCT Bulb
---

## Overview

![Lenovo bulb packaging view](lenovo_ZG38C02978.webp "Lenovo 800 lumens RGB + CCT bulb")
[Lenovo 800 lumen RGB + CCT bulb](https://www.lenovo.com/es/es/smart-bulb/).

## Flashing

This plug can be converted using [tuya-convert to flash ESPHome](/guides/tuya-convert) (as of June 2020).

## Temperature

Range temperature from 2700 Kelvin to 6500 Kelvin. Information extracted from product description.

## GPIO Pinout

| Pin    | Function          |
|--------|-------------------|
| GPIO04 | Red               |
| GPIO12 | Green             |
| GPIO14 | Blue              |
| GPIO05 | White Brightness  |
| GPIO13 | White Temperature |