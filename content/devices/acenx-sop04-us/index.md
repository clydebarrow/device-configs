---
board: esp8266
date_published: '2022-03-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Acenx SOP04-US
---

## GPIO Pinout

| Pin    | Function             |
| ------ | -------------------- |
| GPIO04 | Led1i (Blue)         |
| GPIO05 | Led2i (Green)        |
| GPIO12 | Relay1               |
| GPIO13 | Button1              |
| GPIO14 | Relay2               |
The physcal button operates both relays.  Toggle `relay1` using a short press and `relay2` using a long press.  Timing can be adjusted in configuration.  The blue LED is for status and green will be on if either or both relays are on.  The green LED will be off if both relays are off.