---
board: esp8266
date_published: '2022-02-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Delock 11826 Power Smart Plug
---

## General Notes

Model reference: 11826
Manufacturer: [Delock](https://www.delock.de/produkte/G_11826/merkmale.html)
The device comes **pre-flashed with Tasmota**.
Flashing ESPHome is easily possible by uploading an ESPHome .bin file using the device's web interface. In case of issues GZIP your .bin file!

## GPIO Pinout

| Pin    | Function          |
| ------ | ----------------- |
| GPIO0  | Button (inverted) |
| GPIO12 | Relay             |
| GPIO13 | LED               |

## Basic Config

Basic configuration with switch.