---
board: bk72xx
date_published: '2024-01-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Tuya USB Relay HC-S050-WIFI
---

## General Notes

The Tuya HC-S050-WIFI is cheap USB "relay" that can hold up to 12v (by specs).

## GPIO Pinout

| Pin | Function      |
| --- | ------------- |
| P6  | LED           |
| P7  | Relay         |
| P8  | Button        |

## Flashing

Flash using ESP Web install and select any option. Lately we replace it with bk controller:

| Pin  | Function      |
| ---- | ------------- |
| GND  | - 3.3V        |
| 3.3V | + 3.3V        |
| TP4  | TX            |
| TP5  | RX            |
| TP3  | possible EN   |