---
board: esp32
date_published: '2024-06-01T12:00:00Z'
difficulty: 1
made_for_esphome: true
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: Smart Plant
---

## Pinout

ESP32-S2    | Sensor        | e-Paper  | Other
------------|---------------|----------|----------
GPIO 00     |Flash button   |          |
GPIO 01     |Soil moisture  |          |
GPIO 02     |Battery volts  |          |
GPIO 03     |Solar charge   |          |
GPIO 04     |               |          |Sensor powering
GPIO 10     |               |CS        |
GPIO 11     |               |MOSI      |
GPIO 12     |               |CLK       |
GPIO 13     |               |DC/MISO   |
GPIO 14     |               |BUSY      |
GPIO 15     |               |RST       |
GPIO 33     |SDA            |          |
GPIO 34     |SCL            |          |