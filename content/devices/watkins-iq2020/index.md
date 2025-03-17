---
board: esp32
date_published: '2024-06-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Watkins IQ2020
---

## General Notes

The Watkins IQ2020 controller is used in Hot Spring, Tiger River, Limelight spas. This control board has an expansion connector with 12v, ground and RS485 interface pins and works perfectly with ESP32 devices that have a RS495 interface. A recommanded ESP32 devices and accessories are:
- [ATOM Lite ESP32 IoT Development Kit](https://shop.m5stack.com/products/atom-lite-esp32-development-kit)
- [ATOM Tail485 - RS485 Converter for ATOM](https://shop.m5stack.com/products/atom-tail485)
- [5 Colors 1Pin 2.54mm Female to Male Breadboard Jumper Wire](https://www.amazon.com/XLX-Breadboard-Soldering-Brushless-Double-end/dp/B07S839W8V/ref=sr_1_3)
However, other options may work. Flash the ESP32 with the [IQ2020 integration](https://github.com/Ylianst/ESP-IQ2020) and connect it to the controller using the following pins:

A more detailed [video on how to get this setup is here](https://youtu.be/egX6bspzuqo). The ESP32 integration offers many options including emulation of the music module, see the project on GitHub to details on this.