---
board: eps32-c3
date_published: '2024-11-01T12:00:00Z'
difficulty: 1
made_for_esphome: true
project_url: ''
standard:
- global
tags:
- sensor
- gpio
title: Athom Energy Meter (EM6)
---

## Overview

![alt text](athom_EM6.webp "Athom Energy Meter - EM6")
Maker: https://www.athom.tech/
Product page: https://www.athom.tech/blank-1/6-ch-energy-meter-made-for-esphome
Also on Aliexpress, available pre-flashed with ESPHome or Tasmota.

## GPIO Pinout

| Pin    | Function   |
| ------ | ---------- |
| GPIO7  | bl0906_tx  |
| GPIO8  | bl0906_rx  |
| GPIO9  | button     |
| GPIO10 | led        |

## Basic Configuration

The [Latest configuration](https://github.com/athom-tech/esp32-configs/blob/main/athom-energy-monitor-x6.yaml)
can be found on Athom's GitHub repo.