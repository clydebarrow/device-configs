---
board: esp8266
date_published: '2023-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
title: Mirabella Genio CWWW Downlights
---

## Overview

The Mirabella Genio is a Tuya-based smart bulb sold by Kmart in
Australia.

## Basic Configuration

``` yaml
esp8266:
  board: esp01_1m
output:
  - platform: esp8266_pwm
    id: output1
    pin: GPIO14
  - platform: esp8266_pwm
    id: output2
    pin: GPIO12
light:
  - platform: cwww2
    id: LED
    name: "Downlight"
    color_temperature: output2
    brightness: output1
    cold_white_color_temperature: 6500 K
    warm_white_color_temperature: 2700 K
    # Ensure the light turns on by default if the physical switch is actuated.
    restore_mode: ALWAYS_ON
```