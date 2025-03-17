---
board: bk72xx
date_published: '2024-11-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Globe Electric 3-Outlet Outdoor Plug
---

## Overview

I purchased this at Costco in Canada in November of 2024. The Costco item number was 1829553.
It is hold together with screws, making it very easy to open and flash.
Inside I found a CB2S module and a board that looks exactly like the one here.
[Feit Electric PLUG3/WIFI/WP/2](/devices/Feit-PLUG3-WIFI-WP-2).

## GPIO Pinout

| Pin | Function            |
| --- | --------------------|
| P6  | (PWM0) Pushbutton   |
| P7  | (PWM1) Status LED   |
| P8  | (PWM2) Relay        |
| P10 | (RXD1) UART 1 RX    |
| P11 | (TXD1) UART 1 TX    |
Disassembly is straightforward but DO NOT open the device while it is plugged into mains power as that presents a safety hazard. There are six phillips head screws on the bottom; they are all the same size. Remove those screws and set aside.
I refer you to [Feit Electric PLUG3/WIFI/WP/2](/devices/Feit-PLUG3-WIFI-WP-2) for further instructions on flashing.

## Basic Configuration

## References

[Feit Electric PLUG3/WIFI/WP/2](/devices/Feit-PLUG3-WIFI-WP-2)
<https://docs.libretiny.eu/boards/cb2s/> - CB2S pinout