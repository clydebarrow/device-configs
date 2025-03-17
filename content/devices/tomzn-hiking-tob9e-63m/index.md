---
board: esp8266
date_published: '2024-06-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: TomZN (Hiking) TOB9e-63M
---

## Notes

- On/Off switch
- Voltage/Current/Power/Energy Metering
- Working Voltage: AC100-280V
- Mechanical Life: Over 100000 Times
- Working Temperature: -25℃-70℃
- Red LED's wired to Relay and display it status
- Energy measurement starts from 0 on every power-up
- Not provide Power Apparent & Factor data

## GPIO Pinout

| Pin    | Function            | Notes    |
| ------ | ------------------- |----------|
| GPIO00 | Button              |          |
| GPIO12 | Relay               |          |
| GPIO13 | Status LED - Blue   | inverted |
| GPIO03 | CSE7759B meter      |          |
| GPIO07 | soldered, unknown   |          |