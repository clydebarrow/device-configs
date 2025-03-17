---
board: esp32
date_published: '2024-02-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Doorbell Interface for ABB-Welcome
---

## Description

This device allows you to integrate your ABB-Welcome or Busch-Welcome 2-wire doorbell intercom system into Home Assistant. Features include doorbell notifications and remotely opening your door. You can find more info about how to order, flash and customize the device on the [project page](https://github.com/Mat931/esp32-doorbell-bus-interface).

## GPIO Pinout

| Pin    | Function |
| ------ | -------- |
| GPIO2  | Wifi LED |
| GPIO25 | Bus RX   |
| GPIO26 | Bus TX   |