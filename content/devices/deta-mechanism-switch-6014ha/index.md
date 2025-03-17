---
board: esp8266
date_published: '2023-04-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- switch
- gpio
- sensor
title: DETA Mechanism Switch (6014HA)
---

## General Notes

A smart switch that does not require a neutural, needs a minumum 20w load or a [load correction device](https://www.clipsal.com/products/detail?CatNo=31LCDA&itemno=31LCDA&tab-document-1=0)
Available from [Bunnings](https://www.bunnings.com.au/deta-smart-switch-mechanism_p0346912)

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO12 | Blue LED (Inverted: true) |
| GPIO14 | Button                    |
| GPIO16 | Relay                     |

## Conversion

To use ESPHome, replace the WB3S with a ESP12F.
- Link GPIO15 to Gnd (recommended via 10k resistor)
- Link EN to Vcc (recommended via 10k resistor)
Due to limited space, conversion below ommited the resistors. No issues but it is outside specifications.