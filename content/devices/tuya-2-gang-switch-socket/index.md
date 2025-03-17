---
board: bk72xx
date_published: '2024-07-10T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- switch, plug
- gpio
- sensor
title: Tuya 2 Gang Switch Socket
---

## General Notes

A smart GPO the contains 2 light switches. All three outputs are controllable.
These devices are sold under many brands on Aliexpress.

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| P0     | Bottom Button Blue LED (H) |
| P6     | Top Button Relay L2 (H)    |
| P7     | Top Button Blue LED (H)    |
| P8     | Top Button (L)             |
| P9     | Status LED RED (H)         |
| P10    | Bottom Button (L)          |
| P11    | GPO Button (L)             |
| P24    | Bottom Button Relay L1 (H) |
| P26    | GPO Relay (H)              |
The light output relays are connected to the RED button LED.
You can turn the button LED purple by turning on the blue LED while the RED is on.