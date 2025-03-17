---
board: esp32
date_published: '2022-03-03T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- eu
tags:
- relay
- gpio
- sensor
title: Shelly Pro 1
---

## Overview

Information about the pinout and internals of the Shelly Pro 1.
It uses the ESP32 DOWDQ6.
![Shelly Pro 1](https://user-images.githubusercontent.com/38843794/156604231-d2eca7b7-fd61-4845-bf83-a8d0047a6793.png)

## Pinout

ESP32 DOWDQ6| SN74HC595B | LAN8720A | Component
------------|------------|----------|----------
GPIO 4      |RCLK        |          |
GPIO 13     |SER         |          |
GPIO 14     |SRCLK       |          |
GPIO 17     |            |CLKIN     |
GPIO 18     |            |MDIO      |
GPIO 19     |            |TXD0      |
GPIO 21     |            |TXEN      |
GPIO 22     |            |TXD1      |
GPIO 23     |            |MDC       |
GPIO 25     |            |RXD0      |
GPIO 26     |            |RXD1      |
GPIO 27     |            |CRS_DV    |
GPIO 35     |            |          |Reset Button
GPIO 38     |            |          |Switch input 1
GPIO 39     |            |          |Switch input 2

## Shift register

A shift register is controlling the status LEDs and the relay output, the pinout for it is the following:
SN74HC595B| Component
----------|----------
QA        |Relay
QB        |Out 2LED
QC        |RGB Blue
QD        |RGB Green
QE        |RGB Red
QF        |nc
QG        |nc
QH        |nc
The Out 1 status LED and the relay are on the same output. From what I've seen the board looks like it's being used for the Shelly Pro 1, Pro 2, Pro 1PM, and Pro 2PM. But I can't comfirm it.
There are all the spaces needed for all device variants.
![Shelly Pro 1 2](https://user-images.githubusercontent.com/38843794/156607379-c914f5e8-fbc2-407e-b529-71da5f173b7a.png)

## Programming Pinout

![Shelly Pro pinout](https://user-images.githubusercontent.com/38843794/156607973-259d2b27-976c-4b71-9198-ec737f6e95fb.png)