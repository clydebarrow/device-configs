---
board: bk72xx
date_published: '2024-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: TuYa MINI-W1-4CH - PSW-4CH-CBU
---

## Product Images

## Programming

Solder USB TTL wires like below

To enter bootloader mode, ground CEN pin and power device. I used https://github.com/libretiny-eu/ltchiptool to program it

## GPIO Pinout

| Pin    | Function    |
|--------|-------------|
| GPIO23 | Push Button |
| GPIO10 | Relay #1    |
| GPIO24 | Relay #2    |
| GPIO26 | Relay #3    |
| GPIO28 | Relay #4    |
| GPIO11 | Status LED  |
| GPIO6  | S1          |
| GPIO7  | S2          |
| GPIO8  | S3          |
| GPIO9  | S4          |