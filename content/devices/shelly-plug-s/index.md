---
board: esp8266
date_published: '2020-07-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Shelly Plug S
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO0  | Red LED                     |
| GPIO2  | Blue LED                    |
| GPIO5  | CF Pin                      |
| GPIO12 | HLW8012 (power measurement) |
| GPIO13 | Button                      |
| GPIO14 | CF1 Pin                     |
| GPIO15 | Relay                       |
| GPIOA0 | Internal Temperature        |

## Configuration as relay with overpower and overtemperature protection

When integration with home assistant exists, it will appear as a switch, 4 sensors (power, temperature, wifi strenght and total daily energy)
When the `max_power` is exceeded, the relay will be switched off and a persistent notification will be created in home-assistant
When the `max_temp` is exceeded, the relay will be switched off and a persistent notification will be created in home-assistant
Thanks to [Tasmota](https://templates.blakadder.com/blitzwolf_SHP6.html) and [Tijmen](https://community.home-assistant.io/u/tijmen/summary) from [this](https://community.home-assistant.io/t/esphome-blitzwolf-bw-shp6-configuration/113938) topic
Config tested by [gieljnssns](https://github.com/gieljnssns)