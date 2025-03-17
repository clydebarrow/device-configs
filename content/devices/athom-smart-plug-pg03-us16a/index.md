---
board: esp8266
date_published: '2022-02-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Athom Smart Plug PG03-US16A
---

## Overview

![alt text](athom_PG03-US16A.webp "Athom Smart Plug PG03-US16A")
Manufacturer: <https://www.athom.tech/> (*discontinued*. New version:
[PG03V2-US16A](https://templates.blakadder.com/athom_PG03V2-US16A-TAS))
Available with Tasmota pre-flashed.
Pinout information thanks to
- <https://templates.blakadder.com/athom_PG03-US16A.html>
Sensor constants and reference ESPHome configuration from
- <https://github.com/athom-tech/athom-configs/blob/main/athom-smart-plug.yaml>

## GPIO Pinout

| Pin    | Function            |
| ------ | ------------------- |
| GPIO3  | Button              |
| GPIO4  | BL0937 CF           |
| GPIO5  | HLWBL CF1           |
| GPIO12 | HLWBL SELi          |
| GPIO13 | Blue LED            |
| GPIO14 | Relay               |