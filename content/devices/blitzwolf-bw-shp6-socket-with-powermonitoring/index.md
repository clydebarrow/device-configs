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
title: Blitzwolf BW-SHP6 Socket with powermonitoring
---

## General Notes

Model reference: BW-SHP6
Manufacturer: [BlitzWolf](https://www.blitzwolfeurope.com/3840W-EU-WIFI-Smart-Socket-BlitzWolf-BW-SHP2-Wifi)
There are two versions of this plug, a 10A version and a 15A version. The pinout seems to be the same.

## GPIO Pinout

| Pin    | Function (<2020)    | Function (>2020)    |
| ------ | ------------------- | ------------------- |
| GPIO0  | Red LED (inverted)  | Red LED (inverted)  |
| GPIO2  | Blue LED (inverted) | Blue LED (inverted) |
| GPIO4  |                     | HLW8012 - CF1       |
| GPIO5  | HLW8012 - CF        | HLW8012 - CF        |
| GPIO12 | HLW8012 - SEL       | HLW8012 - SEL       |
| GPIO13 | Button (inverted)   | Button (inverted)   |
| GPIO14 | HLW8012 - CF1       |                     |
| GPIO15 | Relay               | Relay               |

## HLW8012 Calibration Values

| Value   | <2020   | >2020   |
| ------- | ------- | ------- |
| Current | 0.00290 | 0.00117 |
| Voltage | 940     | 755     |

## Basic Config

The configuration has some default sensors for wifi reporting, etc.

## Advanced config additions

Starting with ESPHome v1.16.1 the `hlw8012` platform sensor now supports energy, so we can add the following to the `hlw8012` platform sensor and get rid of the `total_daily_energy` platform sensor and the `homeassistant` time sensor:
Under wifi this can be added, this will set up static IP, allow the device to connect to a hidden SSID (fast_connect) and create a backup AP
This will activate the internal webserver with password protection
To set time locally to the same as on the HomeAssistant (better logging)
Send a notification to Home Assistant when max power is exceeded.
To have different data shown for the device (ESPHome version) and the wifi. Will appear as sensors in HA.
This will create sensors so that you can track wifi coverage for the devices, and also note the uptime for the devices.