---
board: esp8266
date_published: '2024-12-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Tuya DY-CK400A Garage Door Opener
---

## Product Images

## Programming

Tuya Convert was not able to work for this device (with firmware v3.1.4). If your device has an older firmware, it may be worth a try.
This device is powered by a [TYWE1S](https://developer.tuya.com/en/docs/iot/wifie1smodule?id=K9605thnvg3e7) board (ESP8266EX with 2MB flash), you can boot it in flash mode by grounding IO0. Then you can use U0TX and U0RX. You can either power the device using the built-in USB, or power it through the 3.3V pin.

## GPIO Pinout

| Pin    | Function    |
|--------|-------------|
| GPIO13 | Tuya MCU RX |
| GPIO15 | Tuya MCU TX |

## Basic Configuration

Note that this device is affected by https://github.com/esphome/issues/issues/6503.