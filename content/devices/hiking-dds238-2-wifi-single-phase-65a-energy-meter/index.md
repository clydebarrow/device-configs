---
board: esp8266
date_published: '2021-05-15T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Hiking DDS238-2 WIFI Single Phase 65A Energy Meter
---

## Manufacturer

Hiking TOMZN (Tuya)

## Product Images

## Available from

[aliexpress.com](https://www.aliexpress.com/item/1005002409492948.html)

## Flashing info

I flashed the compiled config using tasmotizer with no issues. Desolding the ESP-Board is required as the TX/RX pins are connected to the Tuya MCU, guide [here](https://github.com/krikk/Hiking-DDS238-2-WIFI-Din-Rail-Energy-Meter-flashing-Tasmota) for Tasmota with photo's.

## GPIO Pinout

| Pin    | Function          |
| ------ | ----------------- |
| GPIO1  | Tuya MCU Tx       |
| GPIO3  | Tuya MCU Rx       |
| GPIO14 | LED (inverted)    |
| GPIO16 | Button (inverted) |