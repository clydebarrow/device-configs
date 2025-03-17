---
board: esp8266
date_published: '2021-06-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Gosund P2 Power Strip
---

## Gosund P2 Wall Outlet

Smart Outlet, Gosund Wall Outlet Extender (15A/1800W), Multi WiFi Plug with 3 USB Ports (5V/3A 24W) and 6 Outlet Wall Adapter Plug Expanders Surge Protector Works with Alexa and Google Home
#

## Newer version

**NOTE:** There are newer versions of this circulating that have an ESP8265 chip in them. If you use the `esp01_1m` config for these, they will go into a reboot loop. You must use `board: esp8285` for these devices. Possible distinguishing marks are `FCC ID: 2APUZ-P2` or a date of `04/2021` printed on the back.
These newer versions also have the USB power control and LEDs opposite of the previous version

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO02 | ledlink       |
| GPIO05 | Relay4i - USB |
| GPIO12 | Relay1        |
| GPIO13 | Relay2        |
| GPIO14 | Relay3        |
| GPIO16 | Button1       |

## Basic Configuration

For versions produced before 04/2021:
For versions produced after 04/2021: