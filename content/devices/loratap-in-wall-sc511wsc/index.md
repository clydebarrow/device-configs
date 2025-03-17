---
board: esp8266
date_published: '2023-08-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: LoraTap In-Wall SC511WSC
---

## Overview

[Product Link](https://www.loratap.com/tuya-smart-life-wifi-curtain-blind-switch-module-with-remote-for-roller-shutter-electric-motor-google-home-aelxa-echo-smart-home-p0109.html)
Works with RF Remote

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO03 | LED (inverted)             |
| GPIO04 | S1 (external open switch input)/Open switch from remote |
| GPIO05 | S2 (external close switch input)/Open switch from remote |
| GPIO12 | Open Relay L1                   |
| GPIO13 | Stop switch from remote                     |
| GPIO14 | close Relay L2                   |

## Basic Config

The configuration below will simply set up the device as a 2-gang switch for lights.