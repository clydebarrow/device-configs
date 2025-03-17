---
board: esp8266
date_published: '2020-10-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- switch
- gpio
- sensor
title: Etekcity Voltson ESW01-EU
---

## Flashing

To reach the ESP pins, you need to open the device by unscrewing two (really) small Torx on the front and get the board out with four Philipps screws.
Then, all necessary pads for flashing are accessible. Attach 5V and GND at the bottom, preferably with test hooks.

For flashing, T12 is TX and T13 is RX. During boot, T11 and T16 pads need to be connected to GND. Easiest is to connect these pads with pogo pins.

## GPIO Pinout

| Pin    | Function       |
| ------ | -------------- |
| GPIO4  | Relay          |
| GPIO5  | LED blue       |
| GPIO12 | HLWBL CF1 Pin  |
| GPIO13 | HLW8012 CF Pin |
| GPIO14 | Button         |
| GPIO16 | LED yellow     |
The HLW8012 SEL pin is permanently pulled high, so you can only read power and voltage. With a small calculation trick you can get current values though (see `current_calculated` below).