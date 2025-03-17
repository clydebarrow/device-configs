---
board: esp8266
date_published: '2020-12-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- dimmer
- gpio
title: Feit BPDIM/WIFI/2
---

## Overview

Another Costco/Feit device. This template should work with DIM/WIFI, DIM/WIFI/2, and DIM/WIFI/3, if you can flash it.
Please take note that you will likely have to figure out how to reach the pins and do a serial firmware flash
if the device is newer than March 2020. The tuya-convert method is non-functional with the most recent Tuya firmware.
I have followed the method described [here](https://community.smartthings.com/t/costco-cheap-feit-smart-dimmer-wifi/208142)
to perform a serial flash. It works as expected.
I split these files myself, but the salient points are re-joined here. You will need to include your own WiFi, etc.
Also of note, adjust the `min_brightness`! In circuits with many bulbs (particularly with LEDs), dimming all the way
can result in complete blackness. By setting `min_brightness` to a higher value, you can determine what the lowest
setting will actually be, and still have some light showing. For example, in some of my circuits, I set this to 143
or 150. Leave `max_brightness` at 1000.
Disabling serial logging should not be a big deal as this device is unlikely to ever be tethered, except when attempting
a manual, serial flash. Once accomplished, OTA is the way to go.