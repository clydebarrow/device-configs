---
board: esp8266
date_published: '2020-03-02T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: RGB Smart Plug 16A with power monitoring
---

## Overview

This plug can be found under many brand names (Lonsonho, Avatto, Vansware, … ) Identified by the packaging and the sticker inside the plug. At this time seems to be only EU plug with 16A, RGB color led and power metering.
More info:
<https://templates.blakadder.com/XS-A12.html>
<https://tasmota.github.io/docs/#/devices/RGB-Smart-Plug-16A>

## GPIO Pinout

| Pin    | Function   |
| ------ | ---------- |
| GPIO00 | PWM1 red   |
| GPIO02 | PWM3 blue  |
| GPIO04 | PWM2 green |
| GPIO05 | BL0937 CF  |
| GPIO12 | HLWBL SELi |
| GPIO14 | HLWBL CF1  |
| GPIO15 | Relay1     |

## Basic Configuration

Most of this code is from from <https://devices.esphome.io/devices/awp04l/>