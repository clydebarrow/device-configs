---
board: esp8266
date_published: '2020-11-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff BASIC R2 v1.4
---

## Overview

v1.4 differs from the previous iterations of the Sonoff BASIC in that the two colour LED
is blue and red (opposed to green and red).
This configuration is setup so that when the relay is manually activated via the button
both the blue and red LED are lit (making the LED colour output purple). If the relay
is activated via other means (such as Home Assistant) then it will simply be lit red.
The red side of the LED cannot be individually controlled without modification to the hardware,
and serves as the indicator of when the relay is physically enabled.
As the only controllable LED is the Blue LED, it is configured here to use the
[`status_led` light component](https://esphome.io/components/light/status_led), which will take
over the LED in the event of a error/warning state, such as when WiFi is disrupted.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO0  | Push Button (HIGH = off, LOW = on) |
| GPIO12 | Relay and its status LED           |
| GPIO13 | Blue LED (HIGH = off, LOW = on)    |
| GPIO3  | RX pin (for external sensors)      |
| GPIO1  | TX pin (for external sensors)      |

## PCB

#

## 2023 Model

![alt text](/SonoffBasicR2-2023-Top.jpg "Sonoff BASIC R2 v1.4 PCB 2023 Model")