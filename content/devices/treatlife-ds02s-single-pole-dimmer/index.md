---
board: esp8266
date_published: '2021-05-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- dimmer
title: TreatLife DS02S Single Pole Dimmer
---

## Overview

Treatlife DS02S Switch
[Amazon Link](https://amzn.to/2RHB44M)

## Notes

This TuyaMCU requires a baud rate of 9600 (see latest note on January 2022 for more info), unlike the DS03 dimmer.
July 2021 - New device purchased now has Tuya WB3S Wifi Microcontroller in place of the previous TYWE3S, which is not ESP based. Luckily, the main board still has the appropriate footprint for an ESP-12F. Further instructions on how to swap microcontrollers can be found [here](https://community.home-assistant.io/t/treatlife-dual-outlet-indoor-dimmer-plug-wb3s-to-esp-12-transplant/256798)
January 2022 - Newer models require a baudrate of 115200, similar to that of the DS03 dimmer. Like the DS03, it might say `Invalid baud_rate: Integration requested baud_rate 9600 but you have 115200!`, however this can be ignored.

## GPIO Pinout

| Pin   | Function |
| ----- | -------- |
| GPIO1 | Tuya Tx  |
| GPIO3 | Tuya Rx  |

## Basic Configuration

## Advanced Configuration

Below are some advanced configuration options that may be required if your dimmer is not behaving as expected.
This will add a select component to allow changing the dimming mode on the MCU, giving you a drop-down of dimming mode options. Recommended to try out all and see which works best, then set it statically.
Here is a script that will set the dimming mode in a more static fashion when ESPHome Reboots. This will select based on the index of the select component instead of by name of the mode. This can still be set via drop down if this script is included, it will just set it to this value every boot.