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
title: Mirabella Genio RGBW Color Bulbs
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
    id: output_red
    pin: GPIO4
  - platform: esp8266_pwm
    id: output_green
    pin: GPIO12
  - platform: esp8266_pwm
    id: output_blue
    pin: GPIO14
  - platform: esp8266_pwm
    id: output_white
    pin: GPIO5
light:
  - platform: rgbw
    name: "rgbw_e27_01"
    id: light
    red: output_red
    green: output_green
    blue: output_blue
    white: output_white
    # Ensure the light turns on by default if the physical switch is actuated.
    restore_mode: ALWAYS_ON
```