---
board: rtl87xx
date_published: '2023-11-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Govee E27 5W 500lm RGBCCT Bulb
---

## Overview

Uses T103 module. CPU is RTL8710BN.

First, desolder the vcc and gnd on the back of the pcb  before connecting all the wires to the respective pins otherwise it won't go into download mode.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO10  | Red Output  |
| GPIO7  | Blue Output       |
| GPIO6  | Green Output  |
| GPIO12  | Cold White Output          |
| GPIO8  | Warm White Output  |