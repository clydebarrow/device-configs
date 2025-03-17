---
board: esp8266
date_published: '2023-04-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- misc
- gpio
- sensor
title: BlitzWolf BH-AP2501
---

## General Notes

These devices run a Tuya WBR3 MCU which needs to be replaced: preferably by an ESP12F.

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO1  | UART TX       |
| GPIO3  | UART RX       |
| EN     | 10k pull-up   |
| RES    | 10k pull-up   |
| GPIO15 | 10k pull-down |