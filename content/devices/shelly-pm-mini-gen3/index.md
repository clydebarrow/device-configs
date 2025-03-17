---
board: esp32
date_published: '2023-11-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
tags:
- sensor
title: Shelly PM Mini Gen3
---

## Overview

Generation 3 of Shelly Mini. With Powermeter. Flashsize is 8MB.

## Serial Pinout

The UART Pinout is the same as other Shelly Plus Mini.
| Pin     | Colour |
| ------- | ------ |
| Reset   | Brown  |
| 3v3     | Red    |
| RX      | Blue   |
| TX      | Yellow |
| BootSEL | Purple |
| GND     | Black  |

## GPIO Pinout

| Pin   | Function  |
| ----- | --------- |
| GPIO3 | NTC       |
| GPIO6 | BL0942 TX |
| GPIO7 | BL0942 RX |
| GPIO0 | LED       |
| GPIO1 | Button    |

## Basic Configuration