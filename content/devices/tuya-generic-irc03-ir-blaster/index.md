---
board: bk72xx
date_published: '2025-01-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Tuya Generic IRC03 IR Blaster
---

## General Notes

There's detailed teardown info at [Elektroda](https://www.elektroda.com/rtvforum/topic4012905.html).

## GPIO Pinout

| Pin | Function      |
| --- | ------------- |
| P7  | IR Transmitter|
| P8  | IR Receiver   |
| P9  | Button        |
| P24 | LED           |

## Flashing

I used ``ltchiptool`` to backup the original firmware and flash an esphome uf2 binary to it.
The pads are all nicely labeled.