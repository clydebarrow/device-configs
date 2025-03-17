---
board: esp8266
date_published: '2021-12-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Globe Electric 2-Outlet Outdoor Plug (50029)
---

## Overview

These devices are based on the popular Tuya platform, model on the back sticker is SK509-W-2S, the bottom of the box lists them as 50029. FCC-ID is [2AQUQGE50029](https://fccid.io/2AQUQGE50029).
Old stock can easily be flashed OTA using tuya-convert if you never pair them with the Smart app. Newer boards will have to be flashed over a UART serial connection if Tuya-Convert does not work.
This template was built using ESPHome 2021.11.3 and does not expose the LEDs or the button to Home Assistant as that was not deemed to add any value to the automation.
Inspired by the Tasmota template (https://templates.blakadder.com/globe_50029.html)

## GPIO Pinout

| Pin    | Function          |
| ------ | ----------------- |
| GPIO3  | LED 2 (inverted)  |
| GPIO4  | Relay 2           |
| GPIO12 | Button (inverted) |
| GPIO13 | Relay 1           |
| GPIO14 | LED 1 (inverted)  |

## Basic Configuration

## Split Configuration

If you have many of these you can take the esphome section and below and place it a sub-folder so that the ESPHome dashboard will not attempt to display it. The template can then be included in to the configuration file for each device.
If you do that you will need to create a symbolic list to the secrets.yaml file in the same folder or the !secret syntax will not be able to resolve the secrets.