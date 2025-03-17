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
tags:
- relay
- gpio
- sensor
title: Shelly Plus 1PM
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO0  | LED (Inverted)              |
| GPIO4  | Switch input                |
| GPIO5  | BL0937 CF                   |
| GPIO18 | BL0937 CF1                  |
| GPIO19 | Future external sensors?    |
| GPIO23 | BL0937 SEL (Inverted)       |
| GPIO25 | Button (Inverted, Pull-up)  |
| GPIO26 | Relay                       |
| GPIO32 | NTC                         |
| GPIO33 | Relay supply voltage sensor |
The Shelly Plus 1PM is based on the ESP32-U4WDH (Single core, 160MHz, 4MB embedded flash)
Please calibrate the NTC and the voltage / power measurements, the values below are just a rough estimate!
Credit and thanks to
- https://templates.blakadder.com/shelly_plus_1.html