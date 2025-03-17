---
board: esp8266
date_published: '2022-06-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
tags:
- sensor
- gpio
- sensor
title: Shelly EM
---

## GPIO Pinout

| Pin    | Function          |
| ------ | ----------------- |
| GPIO0  | LED               |
| GPIO12 | I2C SDA           |
| GPIO13 | ADE7953 IRQ       |
| GPIO14 | I2C SCL           |
| GPIO15 | Contactor Control |

## Configuration for 2-Phase Whole-Home Energy Monitor

Configuration to use a Shelly EM as per its native design. Requries 2x CT clamps, which can be purchased from the shelly.cloud store. Set the scales of the ST clamps according to your model (50A or 120A or other model you may want to use).
Be sure to set GPIO13 to the ADE7953 IRQ pin to prevent overheating!