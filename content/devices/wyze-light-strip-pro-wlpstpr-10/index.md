---
board: esp32
date_published: '2023-02-24T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
- sensor
title: WYZE Light Strip Pro (WLPSTPR-10)
---

## General Notes

The [WYZE Light Strip Pro](https://www.wyze.com/products/wyze-lightstrip-pro) features 2 individually controllable WS2812b light strips (2 16ft strips)
Originally when I flashed the device I had converted a tasmota configuration, at this time I am unable to find the original.

To flash you need to open the contoller to access the pins on the pcb

The board uses V+, V-, R/Q1, and G/Q2 for the connectors. B/Q3 is unpopulated and might be connected to the ESP, I did not test this.

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO2  | Side Button   |
| GPIO19 | Top Button    |
| GPIO25 | Light 1       |
| GPIO26 | Light 2       |