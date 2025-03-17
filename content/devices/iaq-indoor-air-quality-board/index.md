---
board: ESP8266
date_published: '2023-04-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
title: IAQ (Indoor Air Quality) Board
---

## Overview

IAQ Board is a DIY device for measuring internal air quality running
with esphome. It's quite small and is based on a custom PCB where part
of the components are soldered and connected.
Here is what it can measure:
- Temperature / Humidity / Pressure
- Air particles PM1, PM2.5, PM10
- Carbon Dioxide with NDIR sensor
- Air Quality Index by EPA, based on 24h average PM2.5 particles
- Ambient light
- Total VOC (volatile organic compound)
- equivalent CO2 (not very correct compared with the NDIR sensor, but it\'s provided by the VOC sensor)
On top of that:
- At least one OLED display to show the data (can have one more on the top of the MCU board)
- three RGB wide angle LEDs with auto brightness. LED1 indicates PM2.5, LED2 - Air quality index, LED3 - CO2.
- auto night dimming of the displays and LEDs (can be disabled)
- MIN/MAX values of Temperature, PM2.5 and CO2, and 24h average PM2.5 value.
- multi function button for selection of the data to show on the display

## ESPHome Configuration (basic)

Full YAML configuration: [iaq_board.yaml](https://github.com/nkitanov/iaq_board/blob/master/firmware/iaq_board.yaml)
Full documentation: [PCB, Schematic, esphome yaml config](https://github.com/nkitanov/iaq_board), [Video](https://www.youtube.com/embed/X75OGs2TTT8)