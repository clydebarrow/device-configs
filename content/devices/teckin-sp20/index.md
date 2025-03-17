---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Teckin SP20
---

## Overview

[Amazon Link](https://amzn.to/3dYflOQ)

## GPIO Pinout

| Pin    | Function          |
| ------ | ----------------- |
| GPIO0  | Status LED - Red  |
| GPIO12 | sel_pin hlw8012   |
| GPIO5  | cf_pin hlw8012    |
| GPIO14 | cf1_pin hlw8012   |
| GPIO2  | Status LED - Blue |
| GPIO13 | Button            |
| GPIO4  | Relay             |

## Alternate GPIO Pinout

Unit from 2018/April (Amazon) had a diffent pinout. Visually, the QR code was on the "Live" plug side, and programming pins were slighlty different layout.
Worth a try if standard pin out isn't working properly (relay will constantly click due sel_pin difference)
| Pin    | Function          |
| ------ | ----------------- |
| GPIO0  | Status LED - Red  |
| GPIO3  | sel_pin hlw8012   |
| GPIO5  | cf_pin hlw8012    |
| GPIO14 | cf1_pin hlw8012   |
| GPIO15 | Status LED - Blue |
| GPIO13 | Button            |
| GPIO12 | Relay             |
Basic configuration below assumes standard pinout, update accordingly if using alternate pinout.