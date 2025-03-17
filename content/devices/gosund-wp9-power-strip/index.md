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
title: Gosund WP9 Power Strip
---

## Gosund WP9 Power Strip

Gosund Smart Power Strip Works with Alexa/Google Home, Smart Plugs WiFi Surge Protector Multi Outlet Extender, 10A 3 USB/Charging Ports for Home Office Desk Tablets, 4ft Extension Cord, White

## GPIO Pinout

| Pin    | Function |
| ------ | -------- |
| GPIO00 | Ledi     |
| GPIO01 | Led4     |
| GPIO02 | Led3     |
| GPIO03 | Led3     |
| GPIO05 | Relay1   |
| GPIO12 | Relay3   |
| GPIO13 | Relay4   |
| GPIO14 | Relay2   |
| GPIO16 | Button1  |

## Basic Configuration

## Newer WP9s that are based on Tuya with a non-ESP SOC

You can opt to swapout the chip and replace with an ESP, but this is difficult and tedious.  I have done this with success, however I have since found LocalTuya which may be a better option for you.  It is still a bit tedious and you need to jump through some initial hoops, but you don't have to crack open and modify the WP9.  
reference:  [https://github.com/rospogrigio/localtuya](https://github.com/rospogrigio/localtuya)