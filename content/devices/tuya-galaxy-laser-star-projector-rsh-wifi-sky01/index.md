---
board: esp8266
date_published: '2023-01-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Tuya Galaxy / Laser Star Projector (RSH-WiFi-Sky01)
---

## Overview

Manufacturer: [tuya](https://expo.tuya.com/smart/lighting/ambient-lighting/star-projector/CT9cn91vklm6mj-CT9cn98zo9cbv5-CTatr28ahrby2u)

- Original hardware mod: [3ATIVE VFX Studio](https://www.youtube.com/watch?v=YwHWbcuztuY&ab_channel=3ATIVEVFXStudio)
  - [Github](https://github.com/3ative/nebula-Light)
- Modified YAML by [kireque](https://github.com/kireque/esphome_nebula_light)
- [Custom firmware flash instructions and esphome config for Tuya SK20 nebula light (no disassembly / soldering required)](https://github.com/M4GNV5/esphome-SK20-Nebula-Light)

## Hardware

[replacing WB3S chip with ESP12](https://github.com/kireque/esphome_nebula_light#tuya-wb3s)

## GPIO Pinout

| Pin    | Function             |
| ------ | -------------------- |
| GPIO0  | LED outside case #1  |
| GPIO4  | Red Output           |
| GPIO5  | Laser Output         |
| GPIO12 | Green Output         |
| GPIO13 | Motor Output         |
| GPIO14 | Blue Output          |
| GPIO15 | LED outside case #2  |
| GPIO16 | Button               |