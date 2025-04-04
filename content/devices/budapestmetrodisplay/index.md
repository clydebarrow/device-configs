---
board: esp32
date_published: '2025-01-16T12:00:00Z'
difficulty: 1
made_for_esphome: true
project_url: https://github.com/denes44/BudapestMetroDisplay/tree/main/esphome
standard:
- global
tags:
- misc
title: BudapestMetroDisplay
---

## Overview

LED Display for the Budapest Metro and Suburban railway network.
The hardware of this project is a 210 mm x 300 mm sized bare PCB,
designed to fit into a picture frame, especially the IKEA LOMVIKEN.
The display shows a map of the subway and suburban railway network of
Budapest. At every stop there is an RGB LED, which can show whether a vehicle
is currently at that stop.

## GPIO Pinout

| Pin    | Function         |
| ------ | ---------------- |
| GPIO0  | Boot button      |
| GPIO7  | LEDs for display |
| GPIO48 | Status Led       |

## Basic Configuration

The [Latest configuration](https://github.com/denes44/BudapestMetroDisplay/tree/main/esphome)
can be found on the project's GitHub repo.