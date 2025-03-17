---
board: esp8266
date_published: '2020-05-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
tags:
- relay
- gpio
- sensor
title: Shelly 2.5
---

## GPIO Pinout

| Pin    | Function                        |
| ------ | ------------------------------- |
| GPIO0  | LED 1i                          |
| GPIO2  | Button 1                        |
| GPIO4  | Relay 1                         |
| GPIO5  | Switch 2 Input                  |
| GPIO12 | i2c SDA                         |
| GPIO13 | Switch 1 Input                  |
| GPIO14 | i2c SCL                         |
| GPIO15 | Relay 2                         |
| GPIO16 | ADE7953 IRQ (power measurement) |
| GPIOA0 | Internal Temperature            |

## Basic Configuration As Relay

When integration with home assistant exists, it will appear as 2 Relays with icons and 2 switches (including power, current and sensors)
Use cases for this configuration: Roller / Shutter automation and device swichting and monitoring
Thanks to ["Anaro"](https://community.home-assistant.io/u/anarro/summary) from home assistant forum [topic](https://community.home-assistant.io/t/integration-of-new-power-sensor-ade7953-with-shelly-2-5/119235/8)
config tested by ["Datux"](https://github.com/dtx3k)

## Configuration as relay with overpower and overtemperature protection

When integration with home assistant exists, it will appear as 2 relays with icons and 2 binary sensors (including power, current and sensors)
When the `max_power` is exceeded on 1 channel, that channel will be switched off and a persistent notification will be created in home-assistant
When the `max_temp` is exceeded, the 2 channels are switched off and a persistent notification will be created in home-assistant
Thanks to [Datux](https://github.com/dtx3k) modified and tested by [gieljnssns](https://github.com/gieljnssns)

## Basic Configuration As Lights

Using this config wil make the Shelly show up as lights within Home Assistant
Use Case for this configuration: Automate light sources
Based uppon the Shelly 1 configuration (modified and tested by ["Datux"](https://github.com/dtx3k) )

## Configuration as light with overpower and overtemperature protection

When integration with home assistant exists, it will appear as 2 relays with icons and 2 binary sensors (including power, current and sensors)
When the `max_power` is exceeded on 1 channel, that channel will be switched off and a persistent notification will be created in home-assistant
When the `max_temp` is exceeded, the 2 channels are switched off and a persistent notification will be created in home-assistant
Thanks to [Datux](https://github.com/dtx3k) modified and tested by [gieljnssns](https://github.com/gieljnssns)