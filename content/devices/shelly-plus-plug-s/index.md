---
board: esp32
date_published: '2023-03-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
- gpio
- sensor
title: Shelly Plus Plug S
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO25 | LED 1 & 2                   |
| GPIO26 | LED 3 & 4                   |
| GPIO9  | Button                      |
| GPIO4  | Relay                       |
| GPIO33 | Internal Temperature        |
| GPIO19 | HLW8012 (power measurement) |
| GPIO10 | CF Pin                      |
| GPIO22 | CF1 Pin                     |

## Configuration as relay with overpower and overtemperature protection

When integration with home assistant exists, it will appear as a switch, 3 sensors (power, total energy, temperature) and two RGB lights that can be configured as the color for the ring when on or off.
When the `max_power` is exceeded, the relay will be switched off and a persistent notification will be created in home-assistant
When the `max_temp` is exceeded, the relay will be switched off and a persistent notification will be created in home-assistant
Thanks to all contributors in [this](https://community.home-assistant.io/t/shelly-plus-plug-s-esphome/544316) topic.
Config tested by [bobkersten](https://github.com/bobkersten)