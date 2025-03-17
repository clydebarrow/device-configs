---
board: esp8266
date_published: '2022-08-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- in
tags:
- light
title: Wipro Next 20W CCT Batten
---

## Overview

T5 Sized Tubelight with CCT & Dimming supports, limits being 2700K-6500K. Works natively with either Tuya/Smart Life/Wipro Smart Home. Based on TYWE3L.

## Flashing process

Open the two grey tabs on the sides of the batten and carefully pull out the PCB and solder the wires according to the TYWE3L pinout.Serial flashing is identical to that of ESP-12. Make sure to use 3.3V logic levels for serial communication (USB adapters like CH340G, CP2102). Using ESPHome Flasher is advisable.

## GPIO Pinout

| Pin    | Function            |
| ------ | ------------------- |
| GPIO05 | Brightness PWM pin  |
| GPIO13 | Colour Temp PWM pin |