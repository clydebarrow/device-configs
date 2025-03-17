---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff TH10/TH16
---

## Information

The Sonoff TH10 and TH16 are 10A/16A smart WiFi switches with optional temperature and humidity monitoring.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO0  | Push Button (HIGH = off, LOW = on) |
| GPIO12 | Relay and Red LED                  |
| GPIO13 | Blue Status LED                    |
| GPIO14 | Sensor                             |

## Basic Configuration

The following configuration also contains commented lines for adding a 1-Wire sensor via the 2.5 mm jack.