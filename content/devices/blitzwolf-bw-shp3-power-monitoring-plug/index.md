---
board: esp8266
date_published: '2021-05-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: BlitzWolf BW-SHP3 Power Monitoring Plug
---

## Overview

Model reference: BW-SHP3
Manufacturer: [BlitzWolf](https://www.blitzwolf.com/1200W-US-Dual-WIFI-Smart-Socket-p-294.html)

## Configuration

#

## GPIO Pinout

| Pin    | Function                         |
|--------|----------------------------------|
| GPIO00 | Right Power LED (Inverted: true) |
| GPIO02 | Blue Status LED (Inverted: true) |
| GPIO13 | Left Button                      |
| GPIO04 | Left Relay                       |
| GPIO16 | Right Button                     |
| GPIO15 | Right Relay                      |
| GPIO12 | HLWBL SEL Pin                    |
| GPIO05 | HLW8012 CF Pin                   |
| GPIO14 | HLWBL CF1 Pin                    |
#

## Flashing

Unfortunately, unless you have a much older model, or already flashed one with Tasmota or similar,
you will have to destroy the case to get at the pins inside as Tuya-convert does not work with newer
firmwares. My single SHP3 was old enough that I had originally flashed it with Tasmota via tuya-convert,
and just recently replaced it with ESPHome.
#

## YAML

I love the flexibility that ESPHome gives me. In Tasmota, the right power indicator LED and the
blue status LED were not easily controlled. With this setup, the red power indicators work
properly (the left one requires no setup——it just works), and the blue status LED will indicate
WiFi issues, etc.
I have omitted the basic WiFi and other default settings here for brevity, and only included
what is actually required by the switch.