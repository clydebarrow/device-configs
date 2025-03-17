---
board: esp8266
date_published: '2021-10-16T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Shelly Plug US
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO0  | LED (Inverted)              |
| GPIO2  | Blue LED (Inverted)         |
| GPIO4  | Relay                       |
| GPIO5  | HLWBL CF Pin (active power) |
| GPIO12 | HLWBL SEL                   |
| GPIO13 | Button                      |
| A0     | NTC                         |
HLWBL CF1 pin (GPIO14 according to Tasmota template) does not appear to connected in my test and returns junk data.
A0 might be hooked up to a NTC, I do not have the values needed to calibrate it to return proper data so I am not including it in my configuration.

## Configuration as relay with overpower protection

When integration with home assistant exists, it will appear as a switch, 6 sensors (button state, power, voltage, current, wifi strength and total daily energy)
When the `max_power` is exceeded, the relay will be switched off and a persistent notification will be created in home-assistant
Credit and thanks to
- https://templates.blakadder.com/shelly_plug_US.html for documenting the GPIO pins though I found some errors.
- https://github.com/esphome/esphome-devices/blob/main/src/docs/devices/Shelly-Plug-S/index.md, much of this borrows from it.
- https://www.reddit.com/r/homeautomation/comments/ps9iey/esphome_config_for_shelly_plug_us/, magic numbers for tuning sensors
- https://devices.esphome.io/devices/Aoycocr-X10S-Plug/, identical looking device from another manufacturer
- https://fccid.io/2ALAY-SHELLY, FCC documentation including several pictures of the circuts.