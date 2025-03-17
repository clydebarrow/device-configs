---
board: esp8266
date_published: '2019-12-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- switch
title: Generic Glass Touch Switch with 1, 2, 3 pole variants
---

## General Notes

This config was created based on the 3 pole switch that I had. I'm not sure what the pins for the 4 pole variant would be, but it would not be hard to figure it out if you have the unit.
There is another variant to these switches with LEDs on the buttons. These are called out below.
_I labeled the switch as Top/Middle/Bottom as the L1-L4 ports on the rear are actually inverted when installed (L4 on top, L1 on bottom)._

## Product Images

Front of 3 pole switch

Rear of 3 pole switch

Wiring of switch

## GPIO Pinout (Per top to bottom when installed)

| Pin    | Function                                  |
| ------ | ----------------------------------------- |
| GPIO3  | Button, Top                               |
| GPIO4  | Relay, Top _(Labeled L4)_                 |
| GPIO5  | Button, Middle                            |
| GPIO12 | Button, Bottom                            |
| GPIO13 | Relay, Bottom _(Labeled L2)_              |
| GPIO15 | Relay, Middle _(Labeled L3)_              |
| GPIO16 | Status LED                                |
| GPIO0  | Status LED _(alternative, some switches)_ |
| GPIO14 | LED, Top _(some switches)_                |
| GPIO1  | LED, Middle _(some switches)_             |
| GPIO14 | LED, Bottom _(some switches)_             |

## Basic Configuration