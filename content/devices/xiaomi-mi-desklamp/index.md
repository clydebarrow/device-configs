---
board: esp8266
date_published: '2022-03-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Xiaomi Mi Desklamp
---

## Overview

For serial flashing you need two power wires (GND, VDDPST- AKA VCC 3.3v), two serial wires (U0RX, U0TX) and the boot mode pin (GPIO0).
On your Serial Adaptor connect U0RX to TX and U0TX to RX.
ESP also needs to be put into programming mode before the firmware can be uploaded by connecting GPIO0 pin to GND prior to applying power.