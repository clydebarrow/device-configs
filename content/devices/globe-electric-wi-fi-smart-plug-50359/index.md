---
board: bk72xx
date_published: '2023-05-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Globe Electric Wi-Fi Smart Plug 50359
---

## Overview

Sold at Costco model (**_50207_**)

## Custom Firmware Needed

This device uses the WB2S module that comes with Tuya firmware which can be flashed to esphome using cloudcutter following instructions [here](https://digiblur.com/2023/04/10/tuya-cloudcutter-with-esphome-how-to-guide/)
Support for WB2S modules is available in ESPhome 2023.9.0 (<https://github.com/esphome/esphome/pull/3509>).

## GPIO Pinout

Due to the fact that this uses a custom esphome firmware the pin numbers start with a P instead of the usual GPIO
| Pin | Name   | Function     |
| --- | ------ | ------------ |
| P7  | LED    | Status LED   |
| P26 | Button | Power Button |
| P24 | Outlet | Relay        |