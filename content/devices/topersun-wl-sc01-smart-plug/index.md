---
board: esp8266
date_published: '2023-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
title: Topersun WL-SC01 Smart Plug
---

## Overview

Topersun Smart Plugs are a Tuya-based smart plugs
sold by Bunnings and Kmart respectively in Australia.

## Basic Configuration

``` yaml
substitutions:
  name: topersun_smart_plug
  friendly_name: Topersun Smart Plug
esphome:
  name: ${name}
esp8266:
  board: esp01_1m
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
logger:
api:
ota:
binary_sensor:
  - platform: gpio
    pin:
      number: 14
      mode:
        input: true
        pullup: true
      inverted: true
    name: "${friendly_name} Power Button"
    on_press:
      - switch.toggle: relay
switch:
  - platform: gpio
    id: green_led
    pin:
      number: GPIO4
      inverted: true
  - platform: gpio
    name: "friendly_name Relay"
    pin: GPIO12
    id: relay
    # Turn off green LED to show red when turned on.
    on_turn_on:
      - switch.turn_off: green_led
    # Turns on the green LED once the plug is turned off.
    on_turn_off:
      - switch.turn_on: green_led
```