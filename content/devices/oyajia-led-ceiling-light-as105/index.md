---
board: ESP8266
date_published: '2024-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
- sensor
title: Oyajia LED Ceiling Light (AS105)
---

## Overview

Available on Amazon ([DE](https://www.amazon.de/Oyajia-Deckenleuchte-Bluetooth-Wifi-Fernbedienung-Deckenlampe/dp/B0BN65QGFP), [FR](https://www.amazon.fr/intelligente-t%C3%A9l%C3%A9commande-Bluetooth-Wifi-Contr%C3%B4lable-lapplication/dp/B0BN65QGFP), [IT](https://www.amazon.it/dimmerabile-telecomando-Bluetooth-intelligente-compatibile/dp/B0BN65QGFP))

Smart ceiling light with a CCT center light (2800K-6500K) and an addressable RGB ring light. The model number is AS105 and advertised as 4000 lm, 40 watts (30W white + 10W RGB), 85-265V AC.
This device contains an unmarked Tuya module based on the BK7231N. If you plan to replace this module please carefully check the pinout of the new module and the supported functions of each pin. The ESP8266 (ESP-12F) is not compatible with this lamp.
The included Bluetooth remote control is currently not compatible with ESPHome but this might change in the future.

## Flashing

There is no programming header on the circuit board. For serial flashing you need to solder wires directly to the Tuya module.

## PWM Settings

Each set of white LEDs (CW, WW) is controlled by a PWM output. A duty cycle of about 14% is required to turn on each light output channel.