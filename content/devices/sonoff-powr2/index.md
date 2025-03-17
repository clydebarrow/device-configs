---
board: esp8266
date_published: '2024-06-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff POWR2
---

## Product Images

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO0  | Push Button (HIGH = off, LOW = on) |
| GPIO12 | Relay and its status LED           |
| GPIO13 | Blue LED (HIGH = off, LOW = on)    |
| GPIO1  | RX pin (for serial programming)    |
| GPIO3  | TX pin (for serial programming)    |

## Basic Configuration

As the only controllable LED is the Blue LED, it is configured here to use the
[`status_led` light component](https://esphome.io/components/light/status_led), which will take
over the LED in the event of a error/warning state, such as when WiFi is disrupted.