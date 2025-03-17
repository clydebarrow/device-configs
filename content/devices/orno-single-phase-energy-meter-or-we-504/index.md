---
board: esp32
date_published: '2024-01-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- misc
title: Orno Single Phase Energy meter OR-WE-504
---

## GPIO Pinout

| Pin    | Function  |
| ------ | --------- |
| GPIO03 | RS485 adapter TX |
| GPIO01 | RS485 adapter RX |
Note: you may need to reverse the RX/TX cabling depending on your platform.

## Connection

Use a RS485 adapter (RS485 to TTL) like [this one](https://esphome.io/_images/rs485.jpg).

## ESPHome configuration

Available memory registries can be found [here](https://github.com/arendst/Tasmota/discussions/15541#discussion-4053434).