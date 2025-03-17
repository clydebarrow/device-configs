---
board: esp8266
date_published: '2021-09-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- sensor
- gpio
- sensor
title: AirGradient-DIY
---

## Overview

Air environment sensor from PM2.5, CO2, Temperature and Humidity from [AirGradient](https://www.airgradient.com/diy/).
Variations of the components are possible. Check your components.
If you have multiple sensor boards, you will likely need to make each sensor name unique across the boards
(e.g. "1st AirGradient Temperature"), so there aren't naming conflicts.

## Basic Configuration

#

## OLED Support

If you are using the 64x48 OLED shield that's included in the kit, you can use this config. Note that you will need to place `fonts/helvetica.ttf` (or another font of your choosing) in the ESPHome config directory.
This config will print all four sensor states to the display.