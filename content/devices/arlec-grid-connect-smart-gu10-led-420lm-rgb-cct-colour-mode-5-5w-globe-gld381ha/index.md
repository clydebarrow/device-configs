---
board: bk72xx
date_published: '2024-06-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
- gpio
title: Arlec Grid Connect Smart GU10 LED 420lm RGB CCT Colour Mode 5.5W Globe (GLD381HA)
---

## Overview

Sold at Bunnings in Australia as [Model number GLD381HA](https://www.bunnings.com.au/arlec-grid-connect-smart-gu10-led-420lm-rgb-cct-colour-mode-5-5w-globe_p0329569).
This device uses a CBLC9 module (BK7231N MCU), and can be flashed with the `kickstart-bk7231n.uf2` [Kickstart](https://github.com/libretiny-eu/esphome-kickstart) firmware using [ltchiptool](https://github.com/libretiny-eu/ltchiptool).
The board for this device cannot be accessed easily without destroying the housing to some degree. However, once the GU10 connectors are carefully pulled out and the front diffuser has been removed, the TX/RX pins can be accessed.

## GPIO Pinout CBLC9

| Pin    | Function              |
| ------ | --------------------- |
| GPIO07 | SM2135 Data           |
| GPIO09 | SM2135 Clock          |