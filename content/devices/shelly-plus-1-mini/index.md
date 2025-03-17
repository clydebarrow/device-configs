---
board: esp32
date_published: '2023-09-27T12:00:00Z'
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
title: Shelly Plus 1 Mini
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO0  | LED (Inverted)              |
| GPIO1  | Button (Inverted, Pull-up)  |
| GPIO7  | Relay                       |
| GPIO10 | Switch input                |
The Shelly Plus 1 Mini is based on the ESP32-C3 (Single core, 160MHz, 4MB embedded flash)
To enter bootloader mode, GPIO9 needs to be pulled down (connected to ground).