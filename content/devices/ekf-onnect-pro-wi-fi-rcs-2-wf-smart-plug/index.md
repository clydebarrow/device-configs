---
board: bk72xx
date_published: '2025-03-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
- gpio
- sensor
title: "EKF \u0421onnect PRO Wi-Fi (RCS-2-WF) Smart Plug"
---

## Notes

![EKF Сonnect PRO Wi-Fi (RCS-2-WF)](0.jpg)
Equipped with [cb2s](https://developer.tuya.com/en/docs/iot/cb2s-module-datasheet?id=Kafgfsa2aaypq) Tuya module which is well known and is actualy
based on Beken BK7231N.
The power monitoring chip is [BL0937](https://developer.tuya.com/en/docs/iot-device-dev/Electricity-statistics?id=Kaunfo4am6icc) which is known from other
Tuya designs and does not require further introduction.

## Product internals

![RCS-2-WF smart plug internals 1](1.jpg)

## GPIO Pinout

| Pin   | Function          |
| ----- | ----------------- |
| P08   | BL0937 cf_pin     |
| P06   | BL0937 cf1_pin    |
| P26   | BL0937 sel_pin    |
| P07   | Relay             |
| P10   | Button (Inverted) |
| P11   | LED (Inverted)    |

## Basic ESPHome config

Note this is only the device-specific part shown here - make sure to extend with your ESPHome-specific settings (such as wifi, passwords, OTA, etc...)