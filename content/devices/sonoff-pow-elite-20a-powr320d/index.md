---
board: esp32
date_published: '2022-11-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: Sonoff POW Elite 20a (POWR320D)
---

## Bootloop Workaround

Some people experience a boot loop after flashing esphome directly. The boot loop seems to appear on 3.3V DC power only (not on AC). Here's a workaround: https://community.home-assistant.io/t/bootloop-workaround-for-flashing-sonoff-th-elite-thr316d-thr320d-and-maybe-others-with-esphome-for-the-first-time/498868

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO00 | Push Button (HIGH = off, LOW = on) |
| GPIO02 | Relay1 (320D - bi-stable - On)     |
| GPIO04 | Relay1 (320D - bi-stable - Off)    |
| GPIO05 | Wifi_LED                           |
| GPIO14 | TM1621 DA                          |
| GPIO16 | CSE7766 Rx                         |
| GPIO18 | Status LED (HIGH = off, LOW = on)  |
| GPIO25 | TM1621 CS                          |
| GPIO26 | TM1621 RD                          |
| GPIO27 | TM1621 WR                          |