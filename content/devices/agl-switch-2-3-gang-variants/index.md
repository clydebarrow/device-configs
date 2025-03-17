---
board: esp8266
date_published: '2024-01-15T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- br
tags:
- switch
- gpio
- sensor
title: AGL Switch 2, 3 gang variants
---

## Overview

The AGL Switch is available in Brazil.
[AGL](https://www.aglbrasil.com/smarthome)

## General Notes

This config was created based on the 2 gang switch that I had.

## Product Images

Front of 2 gang switch

Back of 2 gang switch

## GPIO Pinout

#

## 2-Gang Version

PCB

| Pin    | Function                        |
| ------ | ------------------------------- |
| GPIO2  | Status LED                      |
| GPIO16 | Button 1 (HIGH = off, LOW = on) |
| GPIO5  | Button 2 (HIGH = off, LOW = on) |
| GPIO13 | Relay 1                         |
| GPIO12 | Relay 2                         |
#

## 3-Gang Version

| Pin    | Function                        |
| ------ | ------------------------------- |
| GPIO2  | Status LED                      |
| GPIO16 | Button 1 (HIGH = off, LOW = on) |
| GPIO5  | Button 2 (HIGH = off, LOW = on) |
| GPIO4  | Button 3 (HIGH = off, LOW = on) |
| GPIO13 | Relay 1                         |
| GPIO12 | Relay 2                         |
| GPIO14 | Relay 3                         |