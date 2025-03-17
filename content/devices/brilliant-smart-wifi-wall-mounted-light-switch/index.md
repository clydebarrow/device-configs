---
board: esp8266
date_published: '2021-10-21T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- switch
- gpio
- sensor
title: Brilliant Smart WiFi Wall Mounted Light Switch
---

## Overview

The Brilliant Smart WiFi wall mounted light switch is available in Australia. They come in single gang, twin, triple and quad gang configurations. They're a smooth glass front with round touch switches to control the lights.

## Getting Started

These devices are obstensibly Tuya controlled switches, but after re-flashing them with Tuya-Convert, they work nicely with ESPHome.
I flashed mine directly from the existing Tuya to ESPHome. (Some people go to Tasmota first - there's no need.)
Ref: https://thehomeautomator.com.au/running-esphome-with-home-assistant/

## Code

This yaml is cobbled together from:
https://devices.esphome.io/devices/DETA-Grid-Connect-Smart-Switch/ (for the WiFi signal and Uptime sensors and the Restart option)
https://esphome.io/components/tuya.html
https://esphome.io/components/switch/tuya.html