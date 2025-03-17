---
board: bk72xx
date_published: '2024-05-10T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- dimmer
- gpio
- sensor
title: Milfra Smart Dimmer Switch
---

## Overall description

Milfra dimmers are another type of in-wall, brightness-only light dimming devices with Tuya-Smart application support,
and support 3+ way installations.

## Technical details

The device is using Tuya-compatible application structure with two main components:
- application-specific MCU, responsible for controlling light output, and
- a Tuya CBU module that contains application level logic.
  - external switch input GPIO is connected to secondary MCU,
  - communication to dimming MCU is bidirectional, currently haven't determined what data the MCU is requesting from Tuya that causes an
    unknown command 0x34 error

## Programming

First programming was done over USB-serial. The module needs disassembled (pretty easy) and moderate soldering
skills are required to attach USB-RS232 converter cables. Did not test if CloudCutter or other methods would work.
Need to solder cables Rx, Tx, Gnd, Vcc (3V3) and CEN pin.
Preferred flashing software is [ltchiptool](https://github.com/libretiny-eu/ltchiptool) from LibreTiny project. Start programming like:
```bash
ltchiptool flash write <firmware.uf2>
```
then short CEN pin to ground for a moment to initiate progrmming mode on the module.

## GPIO Pinout

| Pin    | Function |
| ------ | -------- |
| GPIO10 | UART RX  |
| GPIO11 | UART TX  |