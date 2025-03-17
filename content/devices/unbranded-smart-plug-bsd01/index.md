---
board: esp8266
date_published: '2021-02-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
- us
tags:
- plug
- gpio
- sensor
title: Unbranded Smart Plug BSD01
---

## Overview

This device did not have a serial number, brand name or FCC ID. Bought from AliExpress. The plugs I received did not respond to tuya-convert so a hard flash was necessary.
The plug uses a wifi module with ID ajw-02_8285. Not much online but enough to figure out the pin pads for a hard flash. A couple of users have gone before me and desoldered the module from the main board but I chose to solder DuPont cables to the pin pads and then use a pik tool to trigger flash mode via GPIO0. If I can figure out how to upload images here I'll do that later.
The GPIO pinout was learned from [Blakadder Tasmota](https://templates.blakadder.com/BSD01.html) documentation and adapted through trial and error.

## GPIO Pinout

| Pin    | Function                     |
| ------ | ---------------------------- |
| GPIO1  | Status LED - Red             |
| GPIO12 | Relay                        |
| GPIO13 | Button (inverted)            |
| GPIO14 | Status LED - Blue (inverted) |