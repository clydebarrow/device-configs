---
board: esp8266
date_published: '2023-03-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Teckin SP22
---

## GPIO Pinout

Based on information from [Tasmota](https://templates.blakadder.com/teckin_SP22.html).
| Pin    | Function          |
| ------ | ----------------- |
| GPIO01 | Button            |
| GPIO03 | Status LED - Red  |
| GPIO04 | cf_pin bl0937     |
| GPIO05 | cf1_pin bl0937    |
| GPIO12 | sel_pin bl0937    |
| GPIO13 | Status LED - Blue |
| GPIO14 | Relay             |

## Basic Configuration

The sample provided below is a minimal config which should get you up and running.
You will need to calibrate the power monitoring sensors in order to have accurate power monitoring.