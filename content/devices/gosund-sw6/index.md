---
board: esp8266
date_published: '2021-07-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- US
tags:
- switch
- gpio
- sensor
title: Gosund SW6
---

## Flashing

For older devices, it may be possible to use Tuya Convert to flash
For newer devices, use a USB to serial adapter, and solder wires onto the pads marked IO0, TX, RX, 3.3V and GND.

## Notes

This configuration does not use the state LED at all, as it was never synchronized with the state of the light. This is an area for further work.
In order for the switch to work correctly, it should be placed as the first switch from the mains power, with the 'dumb' 3-way switch placed on the load side. For proper sensing, the load needs to be more than a few watts, so it should be put in place with an actual light for testing.
This configuration is based directly on information from this post: https://www.reddit.com/r/Esphome/comments/kn51r0/configuration_for_gosund_sw6/

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO0  | Button                     |
| GPIO2  | State LED (Inverted: true) |
| GPIO4  | Switch                     |
| GPIO14 | Relay 2                    |
| GPIO15 | Relay 1                    |
| GPIO16 | Link LED (inverted: true)  |