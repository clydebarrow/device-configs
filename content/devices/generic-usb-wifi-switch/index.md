---
board: bk72xx
date_published: '2024-12-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: Generic USB Wifi Switch
---

## General Notes

There are various models of these generic USB Wifi switches.  They come with 1, 2, or 3 individually switchable USB output ports, but only the first passes data.

## GPIO Pinout

| Pin | Function      |
| --- | ------------- |
| P6  | LED           |
| P7  | Relay 1       |
| P8  | Button        |
| P26 | Relay 2       |
| P24 | Relay 3       |

## Flashing

They use a Tuya CBU module with easily accessible flashing pins.

The 3 output model restricts access to the uart2 pins for logging, but they aren't necessary for flashing.

I used ``ltchiptool`` to backup the original firmware and flash an esphome uf2 binary to it.