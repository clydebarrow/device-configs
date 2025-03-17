---
board: bk72xx
date_published: '2024-10-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Hiking DDS238-1-W1 WiFi Single Phase 63A Energy Meter
---

## Manufacturer

Hiking TOMZN (Tuya)

## Product Info

| Spec              | Value       |
| ----------------- | ----------- |
| Rate Frequency    | 50 or 60 Hz |
| Rated Current     | 63A         |
| Rate Voltage      | 85~300V AC  |
| kWH accuracy      | Class 1     |
| R.M.S. accuracy   | Class 0.5   |
| Starting current  | 20 mA       |
| WiFi network      | 2.4GHz only |
| Operational temp. | -25~70°C    |
35mm Din Rail install

## Product Images

Device button (named SET) wired to Tuya MCU.
Load toggling happens on tripple SET key pressing.

## Flashing info

Originally device equipped with WB3S module.
Module replaced with ESP-12F and following config provided.
ESP-12F must be flashed before installing into device as RX/TX pins wired to Tuya MCU.
10 kOm resistor additionally to be soldered between GND and GPIO15 pins (SMD 0805 is a good choice).
Device case is secured by screws, but also glued in some places.
Then opened - PCB can be easily detached from.

## ESP GPIO Pinout

| Pin    | Function             | Note     |
| ------ | -------------------- | -------- |
| GPIO01 | Tuya MCU Rx          |          |
| GPIO03 | Tuya MCU Tx          |          |
| GPIO02 | Blue LED on ESP-12F  | inverted |
| GPIO14 | Blue LED on device   | inverted |
| GPIO16 | SET long press (>3 sec.) | inverted |

## Tuya Component Output

```txt
Tuya:
  Datapoint 16: switch (value: OFF)
  Datapoint 6: raw (value: 00.00.00.00.00.00.00.00.03.E8.00.00.00.09.47 (15))
  Datapoint 1: int value (value: 3)
  Datapoint 101: int value (value: 3)
  Datapoint 102: int value (value: 0)
  Datapoint 11: switch (value: OFF)
  Datapoint 13: int value (value: 0)
  Datapoint 107: int value (value: 0)
  Datapoint 109: int value (value: 0)
  Datapoint 17: raw (value: 00.00.00.00.00.00.00.00.00.00.00.64.00.01.0E.00.00.AA.00.00.00.00.00.0A.00.00.00.00.00.00 (30))
  Datapoint 18: raw (value: 00.05.00.64.00.05.00.1E.00.3C.00.00.00.00.00.00.00 (17))
  Datapoint 9: bitmask (value: 0)
  Datapoint 108: string value (value: 000000000000)
  Datapoint 103: int value (value: 0)
  Datapoint 110: int value (value: 0)
  Datapoint 111: int value (value: 1000)
  Datapoint 105: int value (value: 5001)
  GPIO Configuration: status: pin 26, reset: pin 14
  Product: '{"p":"i55reuttymjocx0j","v":"1.0.0","m":2}'
```

## Tuya DataPoints

| DP  | Switch            | Notes |
| --- | ----------------- | ----- |
|  16 | To operate Relay  |       |
|  11 | Relay on startup  | OFF - Restore, ON - Relay OFF |
Relay is driven by Tuya MCU. ESP restart will not affect state of Relay !
| DP  | Sensor           | Multiply | Unit | Decimals |
| --- | ---------------- | -------- | ---- | -------- |
| 101 | Energy Total     | 0.001    | kWh  | 3        |
|   1 | Energy from Grid | 0.001    | kWh  | 3        |
| 102 | Energy to Grid   | 0.001    | kWh  | 3        |
| 103 | Power Active     | 0.001    | kW   | 3        |
| 110 | Power Reactive   | 0.001    | kVAr | 3        |
| 111 | Power Factor     | 0.001    |      | 3        |
| 105 | Frequency        | 0.01     | Hz   | 2        |
| 108 | So far always reported 0                      |
| 109 | Power Flow ? Reported 4 when flow is to Grid  |
Report negative "Power Active" when power flow is to Grid.

## Tuya DataPoint 6 (raw, 15 bytes)

| Bytes | Sensor         | Multiply | Unit | Decimals | Parsed by MCU |
| ----- | -------------- | -------- | ---- | -------- | ------------- |
| 13,14 | Voltage        | 0.1      | V    | 1        |               |
| 11,12 | Current        | 0.001    | A    | 3        |               |
| 06,07 | Power Reactive | 0.001    | kVAr | 3        | as DP110      |
| 02,03 | Power Active   | 0.001    | kW   | 3        | as DP103      |
|    00 | Power Flow Direction: 00 - from Grid, 01 - to Grid          |