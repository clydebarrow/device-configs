---
board: esp8266
date_published: '2021-01-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Alfawise SJ-7
---

## Alfawise SJ-7 (Essential oil diffuser)

#

## Updated for ESPHOME 2025.2.0 and later (2025-03-04)

https://esphome.io/guides/contributing#a-note-about-custom-components
#

## Working

- All essential oil diffuser related controls (ON/OFF; LOW/HIGH; Timer 1H/3H/6H).
- Lava lamp lighting activation, fast/slow color change, I can add stop color change button if needed.
- OTA upgrade.
#

## Not Working

- Use the light like a classic bulb (just on of off and choose a color).

## Installation

## Flashing

For flashing, you have to solder wires like this:
![alt text](https://www.tala-informatique.fr/wiki/images/e/e1/Esp-01.png)
Use U0TXD, U0RXD, GND (and VCC if you dont want to use the diffuser power supply).
Make sure to ground GPIO0 during boot.
You can use the ESPHome add-on from Home Assistant Community Add-ons

## Basic Configuration

## Home Assistant integration

#

## Lovelace card

For lovelace card, you need this HACS Addons :
- custom:vertical-stack-in-card https://github.com/ofekashery/vertical-stack-in-card
- custom:fan-percent-button-row https://github.com/finity69x2/fan-percent-button-row
- custom:paper-buttons-row https://github.com/jcwillox/lovelace-paper-buttons-row
File diffuser.png need to be in this path : config/www/

## Card config example

#

## Lovelace card screenshot

## Original firmware

I have put a backup of the original firmware, and I also modified the AMA HOME APK but only for reconnect the original firmware to Wifi, ssg360 seems down.
https://github.com/antibill51/Alfawise_SJ-7_HASSIO/tree/master/Original%20firmware