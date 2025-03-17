---
board: esp8266
date_published: '2024-02-16T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
title: Sonoff RE5V1C - 5V Relay Module
---

## Product Images

![Product Image](/sonoff_RE5V1C.webp "Product Image")

## Specification

- Power Supply: 5V DC
- Dry contact output
- Max Current: 10A
- Humidity: 5%-90%RH, Non-condensing
- Operating Temperature: 0ºC-40ºC(32°F-104°F)
- Nano size: 34.5*25*19mm

## Notes

- For programming use ERX/ETX - marked on image
- Red LED connected to Relay operated by GPIO12
- Green LED operated by GPIO13
- More GPIO available on top of PCB

## GPIO Pinout

#

## Wired on board

| Pin    | Function         |
| ------ | ---------------- |
| GPIO00 | Button           |
| GPIO12 | Relay, Red LED   |
| GPIO13 | Green LED        |
#

## On Top of PCB

| Pin    | Name   | Comment |
| ------ | ------ | ------- |
| GPIO02 | I02    |         |
|        | 3V3    |         |
| GPIO04 | RX     | PWM out |
| GPIO05 | TX     |         |
|        | GND    |         |
| GPIO03 | ERX    | U0RXD   |
| GPIO01 | ETX    | U0TXD   |