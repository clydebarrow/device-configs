---
board: esp8266
date_published: '2024-01-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Refoss P11 Power Monitoring Plug
---

## Overview

![Product front](./refoss_P11.webp "Product image")

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO00 | None                        |
| GPIO01 | None                        |
| GPIO02 | None                        |
| GPIO03 | CSE7766 Rx                  |
| GPIO04 | LedLinki                    |
| GPIO05 | Button 1                    |
| GPIO09 | None                        |
| GPIO10 | None                        |
| GPIO12 | Led_i 1                     |
| GPIO13 | Relay 1                     |
| GPIO14 | None                        |
| GPIO15 | None                        |
| GPIO16 | None                        |
| GPIO17 | ADC Temp                    |

## Configuration as relay with overpower and overtemperature protection

This is the original device documentation page when it is flashed with Tasmota: https://templates.blakadder.com/refoss_P11.html
For accurate energy consumption measurements this device requires power monitoring calibration.