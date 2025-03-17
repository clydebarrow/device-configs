---
board: bk72xx
date_published: '2024-09-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: OXT Wi-Fi 3CH
---

## General Notes

This is Polish brand based on a other Chinese product. Based on Tuya CB3S Board.

## Product Images

## Programming

Solder USB TTL wires like below

To enter bootloader mode, ground CEN pin and power device. I used https://github.com/libretiny-eu/ltchiptool to program it

## GPIO Pinout

#

## OXT Wi-Fi 3CH - PCB ZH-Z02-A REV:C

| Pin | Function   |
|-----|------------|
| P7  | Relay #1   |
| P8  | Relay #2   |
| P9  | Relay #3   |
| P14 | Status LED |