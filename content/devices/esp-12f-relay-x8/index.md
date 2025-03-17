---
board: esp8266
date_published: '2022-08-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
title: ESP-12F_Relay_X8
---

## Product description

This is a 8-relay board with an ESP-12F.
Each relay has COM+NO+NC exposed. Product descriptions don't seem to specify maximum load.
The board can be powered either via 7-30VDC or via 5VDC (separate connectors).
I bought it from: https://s.click.aliexpress.com/e/_DnEOi2r (affiliation link so i can make others like this, no guarantee it will continue to exist).

## GPIO Pinout

This board has headers for every GPIO pin on its ESP-12F.
| Pin   | Comment                                                 |
| ----- | ------------------------------------------------------- |
| 5V    | Do not use 5V for programming                           |
| TX    | Exposed on board 3.3V level!                            |
| RX    | Exposed on board 3.3V level!                            |
| GPIO0 | 3.3V level! (pulled up, connect to GND for programming) |
| GND   |                                                         |
| GND   |                                                         |
| Pin    | Comment                                       |
| ------ | --------------------------------------------- |
| 3V3    | For programming, inject 3.3V power here       |
| 3V3    | For programming, inject 3.3V power here       |
| 5V     |                                               |
| 5V     |                                               |
| GND    |                                               |
| GND    |                                               |
|        |                                               |
| GPIO5  | Relay 8                                       |
| GPIO4  | Relay 7                                       |
| GPIO0  | Relay 6                                       |
| GPIO2  | Exposed on board | (blue) LED on the ESP-12F  |
| GPIO15 | Relay 5                                       |
| GND    |                                               |
| Pin    | Comment                                 |
| ------ | --------------------------------------- |
| ADC    | Exposed on board ( 0V-1V only )         |
| EN     | Pulled up                               |
| GPIO16 | Relay 1                                 |
| GPIO14 | Relay 2                                 |
| GPIO12 | Relay 3                                 |
| GPIO13 | Relay 4                                 |