---
board: ESP8266
date_published: '2023-09-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- light
- gpio
- sensor
title: OeeGoo 12 Inch 30W Smart Ceiling Light (RGB/CW)
---

## Overview

Smart ceiling light with a CW center light (2700K-6500K) and a RGB ring light. The part number is clb035-wn-c38-k1-ee-fff and advertised as either 30 or 35 watts, 100-240V AC 50/60Hz.

## Hardware Modification

This device uses a proprietary Tuya module [WB3L] and will need to be replaced with an ESP32-C3F before it can be used with ESPhome. This will require disassembly with a philips screwdriver, desoldering the module, soldering a new pre-programmed module.
The Picture below shows the proprietary module that comes with the unit. Removing the module will require heating each side with a piece of solid copper wire (18 AWG) to thermally short all pins. With one iron, a razor blade can help shim each side as it is heated to lift the module.

A Sparkleiot ESP32-C3F module is used here and was pre-programmed using an ESP test board before installing onto the light module. Compiled using Arduino framework and default qio flash mode without issue using ESPhome CLI. **It was observed that the light does not connect the reset line and this caused the ESP32 to not power up, a 0.1 uF 0805 capacitor is added between reset pin of the ESP32 and ground pad to hold the reset longer as a solution.**

## PWM Settings

Each set of LEDs (R,G,B,C,W) is controlled by a PWM output. The max duty cycle was measured with an oscilloscope from the Tuya module.