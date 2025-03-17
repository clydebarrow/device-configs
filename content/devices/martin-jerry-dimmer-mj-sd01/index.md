---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- dimmer
- gpio
- sensor
title: Martin Jerry Dimmer MJ-SD01
---

## GPIO Pinout

| Pin    | Function                                           |
| ------ | -------------------------------------------------- |
| GPIO0  | up button (inverted, input_pullup)                 |
| GPIO1  | down button (inverted, input_pullup)               |
| GPIO3  | led5 (inverted)                                    |
| GPIO4  | red led (inverted)                                 |
| GPIO5  | led4 (inverted)                                    |
| GPIO12 | led3 (inverted)                                    |
| GPIO13 | pwm                                                |
| GPIO14 | led2 (inverted)                                    |
| GPIO15 | main button (input_pullup)                         |
| GPIO16 | led1 + relay (inverted) + blue led + reset button  |

## Flashing

The header CN is under the board, visible after removing the 4 screws.
| Pin    | Function                 |
| ------ | ------------------------ |
| CN1-1 | TXD                       |
| CN1-2 | RXD                       |
| CN1-3 | GPIO2 (don't use)         |
| CN1-4 | GPIO0 (connect to ground) |
| CN1-5 | GROUND                    |
| CN1-6 | VCC                       |

## Light

## Timed Fan control

The MJ-SD01 can control a low power (<400W?) fan. Ignore the dimmer feature and use it as a timer, using the green leds as feedback on how much time is left.