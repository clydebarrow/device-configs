---
board: esp32
date_published: '2019-12-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff Dual R3 & Lite
---

## Product Images

## GPIO Pinout

based on <https://esphome.io/devices/sonoff.html#sonoff-dual-r3-v1-x-v2-x>
#

## Sonoff Dual R3 Lite - PCB version 1.x

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO13 | Status LED (blue/inverted) |
| GPIO00 | Push Button (inverted)     |
| GPIO27 | Relay 1 / LED 1 (red)      |
| GPIO14 | Relay 2 / LED 2 (red)      |
| GPIO32 | Switch 1 (inverted)        |
| GPIO33 | Switch 2 (inverted)        |
#

## Sonoff Dual R3 - PCB version 1.x,2.x

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO13 | Status LED (blue/inverted) |
| GPIO00 | Push Button (inverted)     |
| GPIO27 | Relay 1 / LED 1 (red)      |
| GPIO14 | Relay 2 / LED 2 (red)      |
| GPIO32 | Switch 1 (inverted)        |
| GPIO33 | Switch 2 (inverted)        |
| GPIO25 | power sensor UART Tx       |
| GPIO26 | power sensor UART Rx       |
For power measuring see CSE7761 Power Sensor (v1.x) or BL0939 Power Sensor (v2.x)

## Basic Configuration

Dual R3 v1.x power meter configuration
Dual R3 v2.x power meter configuration