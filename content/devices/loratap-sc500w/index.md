---
board: esp8266
date_published: '2021-11-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: LoraTap SC500W
---

## Overview

[https://www.loratap.com/sc500w-p0108.html)

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO03 | LED (inverted)             |
| GPIO04 | S1 (external switch input) |
| GPIO05 | S2 (external switch input) |
| GPIO12 | Relay L1                   |
| GPIO13 | Button                     |
| GPIO14 | Relay L2                   |

## Basic Config

The configuration below will simply set up the device as a 2-gang switch for lights.