---
board: ESP8266
date_published: '2020-10-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: Generic Remote Receiver
---

## GPIO Pinout

| Pin    | Function     |
| ------ | ------------ |
| GPIO15 | RMT receiver |

## Basic Configuration

I use this with a cheap IR decoder in a three pin package which happens to plug in to GPIO15,VCC,and GND on adjacent pins of
the esp32dev board. You can get 5 receivers for $5 from [amazon.com](https://amzn.to/2NZaH9a).

## ESP8266

Although the ESP32 has built in hardware support for decoding the signals used by remote controls, the ESP8266
can handle it pretty well with generic GPIO.

## Code files

I keep the IR code definitions in separate files which can be included in the skeleton as shown above.
#

## Car MP3 Remote

As included in [an Elegoo bundle](https://amzn.to/3stqQCC).
#