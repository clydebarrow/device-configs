---
board: esp8266
date_published: '2022-04-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
title: Brilliant Smart CCT Globe GU10
---

## General Notes

Brilliant Smart CCT Globe GU10 sold at OfficeWorks, part number BL20887. Provides adjustable brightness and white colour temperature (cool to warm). Based on the ESP8266 platform by way of independent PWM control of a warm LED and a cool LED.
[https://www.officeworks.com.au/shop/officeworks/p/brilliant-smart-cct-globe-gu10-bl20887](https://www.officeworks.com.au/shop/officeworks/p/brilliant-smart-cct-globe-gu10-bl20887)

## GPIO Pinout

| Pin     | Function                           |
|---------|------------------------------------|
| GPIO5   | PWM Light - cool white             |
| GPI12   | PWM Light - warm white             |

## Basic Configuration

Notes on the configuration code:
- Best to use static IP address to ensure that the globe reconnects to the Home Assistant API quickly at power up
- Customize the `substitutions` to suit your specific needs (names, IP addresses)
- Use ESPHome secrets for passwords
- If the brightness is set too low, the globe will go out. Looking into a solution for this
- Colour temperatures in code are a guess