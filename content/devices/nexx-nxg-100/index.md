---
board: esp8266
date_published: '2020-07-26T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- relay
title: Nexx NXG-100
---

## Product

[https://getnexx.com/pages/support](https://getnexx.com/pages/support)
Case has a close fit, but a knife edge near the corner can be used to open the case. Standard serial header pattern present on the board as shown:

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO00 | Reset BUTTON       |
| GPIO01 | TX                 |
| GPIO03 | RX                 |
| GPIO04 | Red status LED     |
| GPIO12 | Door Relay         |
| GPIO13 | Green status LED   |
| GPIO14 | Door Closed Sensor |

## Basic Config

Pressing the reset button .5-2 seconds will pulse the door relay.
On each transition of the door sensor, the green LED will blink.

## Delux Config

This adds sensor checking, so that the closed button does nothing when the door is already closed.
Similarly if the door is open, the open button does nothing.