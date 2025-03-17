---
board: esp32
date_published: '2023-12-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff Mini R4M
---

## Overview

SONOFF'S First Matter Device, with one (detachable) relay, one external input, one button. Switch is really small, approx 40x33mm, easily fits behind wall switch.
Product page: [https://sonoff.tech/product/diy-smart-switches/minir4m/](https://sonoff.tech/product/diy-smart-switches/minir4m/)

## Features

Chip used: ESP32-C3
RISC-V 32-bit 160Mhz Microprocessor
4MB Flash
Flash locked

## Programming

Rx, Tx, Gnd and 3V3 pads are available, but due to Matter certification - ESP32-C3 flash is locked and no reflash is possible.
A new ESP32-C3 IC is required to programm the unit with ESPHome flash.
I bought an ESP32-C3 SuperMini module (with USB-C) and was able to flash it either with esptool or directly via ESPHome.
NOTE: Make sure to get the model with integrated 4MB flash.
After successfully flashing the new IC, simply replace the original IC with a custom one.


![Sonoff MiniR4M](view_ic.jpg "IC View")

## GPIO Pinout

| Pin    | Function                   |
|--------|----------------------------|
| GPIO04 | Relay output               |
| GPIO05 | S2 (external switch input) |
| GPIO09 | BUTTON                     |
| GPIO19 | Blue LED                   |
| GPIO20 | RX                         |
| GPIO21 | TX                         |