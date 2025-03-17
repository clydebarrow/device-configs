---
board: esp8266
date_published: '2019-10-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: NodeMCU ESP8266 with Temperature & Humidity Sensor (DHT11)
---

## GPIO Pinout

| Pin   | Function                     |
| ----- | ---------------------------- |
| GPIO5 | Temperature & Humidity Input |
This Configuration uses "substitutions" to enable you to have multiple devices of the same type
while allowing you to only need to change a minimal device specific yaml configfuration file
by adding specified substutions.
Then at compile time the two files are merged.

## Device Specific Configuration (Substitution) Yaml File