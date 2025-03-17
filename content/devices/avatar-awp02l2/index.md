---
board: esp8266
date_published: '2022-01-26T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Avatar AWP02L2
---

## Overview

[Amazon Link](https://amzn.to/3ACOgKO)

## Product Image

## General Notes

Model Reference: AWP02L2
Manufacturer: [Avatar](https://www.avatarcontrols.com/)
The [Avatar Smart Mini WiFi Plug](https://shop.avatarcontrols.com/smart-mini-wifi-plug.html) is available at [Amazon.com](https://amzn.to/3ACOgKO). The product is sold under the Round Arc style.
This plug can be converted using [tuya-convert to flash ESPHome](/guides/tuya-convert/) (as of January 2022).

## GPIO Pinout

| Pin    | Function              |
| ------ | --------------------- |
| GPIO2  | Blue LED (inverted)   |
| GPIO13 | Button (input_pullup) |
| GPIO15 | Relay                 |