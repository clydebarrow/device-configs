---
board: esp8266
date_published: '2020-10-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- dimmer
- gpio
title: Teckin SR46
---

## General Notes

This plug use tuya so you can [use tuya-convert to flash ESPHome](/guides/tuya-convert/).
The UART ports is connected to GPIO1 and GPIO3.
The on/off switch is on datapoint 20 and the dimmer is on datapoint 22.

## GPIO Pinout

| Pin   | Function |
| ----- | -------- |
| GPIO1 | UART Tx  |
| GPIO3 | UART Rx  |