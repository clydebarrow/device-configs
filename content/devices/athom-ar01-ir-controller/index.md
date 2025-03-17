---
board: esp8266
date_published: '2025-01-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Athom AR01 IR Controller
---

## Overview

This is an IR receiver and transmitter that is shipped with Tasmota installed by the manufacturer.
**Manufacturer product page:** [Athom AR-01 Tasmota IR Controller](https://www.athom.tech/blank-1/tasmota-ir-controller)
![Athom AR01 IR Controller - Front](ar01-01-enclosure_front.jpg "Athom AR01 IR Controller - Front")

## Flashing

This device can be flashed by making a serial connection using the USB-C port.
I did not test this, but there is what looks to be pads for a serial connection. I would also guess that this could be flashed from the default Tasmota web interface.

## GPIO Pinout

| Pin    | Component |
| --- | --- |
| GPIO0 | Button |
| GPIO4 | IR transmitter |
| GPIO5 | IR receiver |
| GPIO12 | LED3 (top) |
| GPIO13 | LED2 (middle) |

## Configuration

## Using the Device

[ESPHome documentation on receiving and sending codes](https://esphome.io/guides/setting_up_rmt_devices#remote-setting-up-infrared).
The IR codes received may be parsed by several of the codecs. Just pick one of them to use. While testing, it may be helpful to change `dump: all` to just the protocol your IR remote uses, to make reading the codes easier.
In my ESPHome configuration, I ended up with a fair amount of template buttons where each one sends out an IR code using the appropriate `remote_transmitter.transmit_xxxx` action.