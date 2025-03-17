---
board: esp8266
date_published: '2020-01-24T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
- gpio
- sensor
title: Mirabella Genio Wi-Fi Strip Light
---

## General Notes

The [Mirabella Genio Wi-Fi LED Strip Light](https://www.mirabellagenio.com.au/product-range/mirabella-genio-wi-fi-led-3-metre-strip-light/) features a row of both RGB and cool white LEDs alternating between the two along the strip.

They are sold at Kmart in a [3m version](https://www.kmart.com.au/product/mirabella-genio-wi-fi-led-strip-light/2622813) and a [5m version](https://www.kmart.com.au/product/mirabella-genio-wi-fi-led-strip-light/2754878).
Inside is a TYWE3S module based on the ESP8266 microcontroller. It is possible to flash older units [OTA using tuya-convert](/guides/tuya-convert/) and may also work with current ones. If you attempt to flash a current unit OTA, you should update this page specify if it's still possible or not.

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO0  | Push Button   |
| GPIO4  | Light - Red   |
| GPIO5  | Light - White |
| GPIO12 | Light - Green |
| GPIO14 | Light - Blue  |