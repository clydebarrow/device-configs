---
board: bk72xx
date_published: '2024-07-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- ch
tags:
- plug
title: LEDVANCE SMART PLUS PLUG CH
---

## Overview

LEDVANCE SMART PLUS PLUG CH based on BK7231T chip (WB2S).
Can be flashed with esphome kickstart via tuya-cloudcutter.
On publish date you need to use ESP-Home beta to build bk72xx targets.
`voltage_divider` and `current_resistor` are estimated.

## Product Image

![ledvance_smart_plus_plug_ch](image.webp)

## GPIO Pinout

| Pin     | Function                           |
| ------- | ---------------------------------- |
| GPIO6   | Relay                              |
| GPIO7   | Button                             |
| GPIO10  | LED                                |
| GPIO11  | BBL0937SEL                         |
| GPIO24  | BL0937CF1                          |
| GPIO26  | BL0937CF                           |