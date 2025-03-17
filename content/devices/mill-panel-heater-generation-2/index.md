---
board: esp8266
date_published: '2025-01-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
title: Mill panel heater (generation 2)
---

## General Notes

Mill panel heaters are available in various versions. This component is specifically designed for **Generation 2 panel heaters** (not compatible with portable heater models). Have a look here to check which generation you have https://millheat.zendesk.com/hc/en-us/articles/360000252071-Which-generation-do-I-have.
If you have a Generation 3 panel heater (which comes with a built-in ESP32), check out this component: https://github.com/ssieb/esphome_components/tree/mill/components/mill_heater
To use this component with a Generation 2 panel heater, you’ll need to replace the HF-LPT120A module with an ESP8266.

HF-LPT120A desoldered

Solder the ESP8266 in place.
Refer to the **GPIO Pinout section** for detailed instructions

## GPIO Pinout

| PIN (mill board) | ESP8266    | Description              |
|------------------|------------|--------------------------|
| +3.3V            | VCC        | Power input (3.3V)       |
| GND              | GND        | Ground                   |
| WTX              | TX (GPIO1) | UART transmitter         |
| WRX              | RX (GPIO3) | UART receiver            |

## Configuration

## Credits

This component is based on the work by https://github.com/JDolven/Replacing-HF_LPT120A-in-a-millheat-heater and https://github.com/trondsundt/MillHeat-ESPHome-NodeMCU