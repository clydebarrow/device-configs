---
board: esp8266
date_published: '2020-08-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
- gpio
- sensor
title: Blitzwolf BW-SHP7 Double socket with powermonitoring
---

## Overview

Model reference: BW-SHP7
Manufacturer: [BlitzWolf](https://www.blitzwolf.com/3680W-EU-Dual-WiFi-Smart-Socket-p-380.html)

## GPIO Pinout

| Pin    | Function                   |
|--------|----------------------------|
| GPIO00 | Button1 (pullup, inverted) |
| GPIO12 | Button2 (pullup, inverted) |
| GPIO13 | Red LED1(inverted)         |
| GPIO02 | Red LED2(inverted)         |
| GPIO14 | Relay1                     |
| GPIO16 | Relay2                     |
| GPIO01 | Blue LED (inverted)        |
| GPIO03 | HLW8012 - SEL              |
| GPIO04 | HLW8012 - CF               |
| GPIO05 | HLW8012 - CF1              |

## Basic Config

The configuration has some default sensors for wifi reporting etc.
Some SHP7 devices experiences unexpected reboots after few minutes from start. By adding some config for GPIO15 it is solved.

## Advanced config additions

Starting with ESPHome v1.16.1 the `hlw8012` platform sensor now supports energy, so we can add the following to the `hlw8012` platform sensor and get rid of the `total_daily_energy` platform sensor and the `homeassistant` time sensor:
In the esphome section, you can perform actions when the device boots:
Under wifi this can be added, this will set up static IP, allow the device to connect to a hidden SSID (fast_connect) and create a backup AP
This wll activate the internal webserver with password protection
To set time locally to the same as on the HomeAssistant (better logging)
To have different data shown for the device (ESPHome version) and the wifi. Will appear as sensors in HA.
This will create sensors so that you can track wifi coverage for the devices, and also note the uptime for the devices.