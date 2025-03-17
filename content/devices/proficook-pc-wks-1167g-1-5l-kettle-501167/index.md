---
board: esp8266
date_published: '2022-06-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- misc
title: ProfiCook PC-WKS 1167G 1.5L Kettle (501167)
---

## GPIO Pinout

| Pin    | Function                              |
| ------ | ------------------------------------- |
| GPIO01 | Tuya RX                               |
| GPIO03 | Tuya TX                               |
Pinout from [ProfiCook PC-WKS Template for Tasmota](https://templates.blakadder.com/proficook_PC-WKS_1167.html)

## Tuya Datapoints (all credits to templates.blakadder.com)

#

## Functions

MCU Product ID: {“p”:”h6MjwrnldNTu4kX3”,”v”:”1.0.0”,”m”:1}
dpID 101 controls kettle modes (corresponds to device buttons)
- 0 - heat to 45°C then maintain temperature for 2 hours
- 1 - heat to 60°C then maintain temperature for 2 hours
- 2 - heat to 85°C then maintain temperature for 2 hours
- 3 - heat to 100°C then maintain temperature for 3 minutes
- 4 - heat to 100°C (power button flashing when active)
- 5 - heat to preset temperature (70°C by default, can be changed using dpID 102) then maintain temperature for 2 hours (keep warm button)
- 6 - reset any running program and enter standby mode (pulsating power button)
dpID 102 sets water temperature for mode 5 (keep warm button), recommended 35 - 100 range
dpID 104 error notification:
- 0x00 - no error
- 0x01 - kettle empty
- 0x04 - kettle overheated due to too much or too little water
dpID 105 reports current water temperature
dpID 106 reports kettle status:
- 1 - kettle removed from base
- 2 - standby mode
- 3 - heating to programmed target temperature
- 4 - cooling down to programmed target temperature
- 5 - maintaining programmed target temperature
dpID 107 reports approximate time until programmed target temperature is reached or remaining time for maintaining programmed target temperature when in mode 5. Cannot be changed!
dpID 108 is still unknown, it is always reporting 5 and doesn’t respond to any of the TuyaSend commands.