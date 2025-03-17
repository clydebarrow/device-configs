---
board: esp32
date_published: '2024-08-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: ES32A08
---

## Board comes without esp32 (use wroom 32 devkit)

## Description

This is a very capable little automation/relay/io board from aliexpress [aliexpress](https://www.aliexpress.us/item/3256805999936525.html)
It runs on 12V or 24V depending on your configuration and is perfect for industrial and home automation

[Schematic](./Schematic_ES32A08.pdf)

## Basic Configuration

#

## exposes

- 8 Relay Outputs (Labeled O1-O8)
- 8 24V Inputs (Labeled I1-I8)
- 4 Analag inputs (0-20ma) (Labeled ADC1-ADC4)
- 2 Analog inputs (0-10V) (Labeled ADC5-ADC6) (ADC7-ADC8 are not usable when using wifi)
- 4 input buttons (Labeled KEY1-KEY4)
- 1 status LED (Labeled "status LED")
- 1 4 Digit 7 Segment display (listens on configurable homeassistant text sensor) (still a little buggy)
#

## known limitations

- 4 Digit display has problems with trailing dots
- RS485 is not enabled but would work using GPIO1 -> TXD and GPIO3 -> RXD
- my C++ is the most limiting factor here :D
- io has not been tested yet !