---
board: esp32
date_published: '2024-06-24T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff POW Ring (POWCT)
---

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO00 | Push Button (HIGH = off, LOW = on) |
| GPIO05 | TM1621 DA                          |
| GPIO13 | Status LED (HIGH = off, LOW = on)  |
| GPIO15 | Wifi_LED                           |
| GPIO17 | TM1621 CS                          |
| GPIO18 | TM1621 WR                          |
| GPIO21 | Relay1                             |
| GPIO23 | TM1621 RD                          |
| GPIO25 | CSE7761 Rx                         |
| GPIO26 | CSE7761 Tx                         |

## Basic Configuration

Based on Sonoff POW Elite 20a (POWR320D) (Source: <https://devices.esphome.io/devices/Sonoff-POW-Elite-20a>).
To get the correct current and power values, the measurement must be divided by the PI number.