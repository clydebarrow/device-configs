---
board: ESP8266
date_published: '2023-08-03T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- misc
title: Aspen ASP-200 Smart Window Fan
---

## Overview

The Aspen ASP-200 Smart Window Fan is a Tuya-based device with a WR1 module (which uses a RTL8710BN chip). The WR1 must be removed and replaced with a ESPHome-compatible chip. Features of the fan include intake/exhaust/circulate modes, three speeds, built-in temperature sensor, and removable grills and blades for easy cleaning.
But, there's a catch. The WR1 module has a 1.5mm pin pitch, compared to the 2.0mm pitch of the ESP-12 modules. I recommend using an ESP-12L, as it has the necessary pins pulled up internally, so it only requires connecting VCC, GND, TX, and RX from the ESP-12L to the PCB.
You will have to get creative when connecting the new board to the main PCB. I ended up hot-gluing the ESP-12L module to the WR1 footprint upside down, then using some short lengths of 23ga solid wire from some scrap CAT-6 cable to connect the ESP's pins to the original pads on the WR1 footprint - be very careful if you try using the original pads, as they are very easy to lift off.
[Manufacturer Link](https://www.theaspen.com/products/asp-200)

## Photos

## Basic Configuration

## Tuya Datapoints

```text
Tuya:
  Datapoint 19: int value (value: 68)
  Datapoint 1: switch (value: OFF)
  Datapoint 3: enum (value: 0)
  Datapoint 102: enum (value: 2)
  Datapoint 8: bitmask (value: 0)
  Datapoint 2: enum (value: 0)
  Datapoint 101: switch (value: OFF)
  Datapoint 18: int value (value: 0)
  Product: '{"p":"gggmgplbesjv8gbx","v":"1.0.0","m":0}'
```