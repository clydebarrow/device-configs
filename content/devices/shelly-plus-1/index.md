---
board: esp32
date_published: '2021-11-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
- au
tags:
- relay
- gpio
- sensor
title: Shelly Plus 1
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO0  | LED (Inverted)              |
| GPIO4  | Switch input                |
| GPIO19 | Future external sensors?    |
| GPIO25 | Button (Inverted, Pull-up)  |
| GPIO26 | Relay                       |
| GPIO32 | NTC                         |
| GPIO33 | Relay supply voltage sensor |
The Shelly Plus 1 is based on the ESP32-U4WDH (Single core, 160MHz, 4MB embedded flash)
Please calibrate the NTC, the value below is just a rough estimate!
Credit and thanks to
- https://templates.blakadder.com/shelly_plus_1.html