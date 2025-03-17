---
board: esp8266
date_published: '2023-12-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- switch
- gpio
- sensor
title: Milfra MFA05
---

## Initial Install

When taking the device apart, there are no headers for RX/TX. You must solder them on.  They are labeled on the board.
There are headers for ground and 5v.  You can use these to power the device while flashing.  Press and hold the button while powering on the device to put it into flash mode.
This device is also sold and marketed as the CloudFree SWM1.

## GPIO Pinout

| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO0  | button |
| GPIO5  | motion |
| GPIO12 | relay |
| GPIO13 | blue led |
| GPIO14 | light sensor |
| GPIO16 | green led |

## Example Configuration

Courtesy of rootnegativ1 on the Home Assistant forums: https://community.home-assistant.io/t/milfra-motion-sensor-light-switch-mfa05/439857/8