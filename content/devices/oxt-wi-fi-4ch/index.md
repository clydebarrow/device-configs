---
board: bk72xx
date_published: '2023-12-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: OXT Wi-Fi 4CH
---

## General Notes

This is Polish brand based on a other Chinese product. Based on Tuya CBU Board.
Other device could be found as WSM16-4-WIFI

## Product Images

## Programming

Solder USB TTL wires like below

To enter bootloader mode, ground CEN pin and power device. I used https://github.com/libretiny-eu/ltchiptool to program it

## GPIO Pinout

#

## OXT Wi-Fi 4CH - PCB ZH-Z10 REV 03

| Pin    | Function        |
|--------|-----------------|
| GPIO24 | Push Button     |
| GPIO20 | Relay #1        |
| GPIO28 | Relay #2        |
| GPIO17 | Relay #3        |
| GPIO16 | Relay #4        |
| GPIO9  | Status LED |