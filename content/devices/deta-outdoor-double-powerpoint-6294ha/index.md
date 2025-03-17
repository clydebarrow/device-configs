---
board: bk72xx
date_published: '2023-10-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: DETA Outdoor Double Powerpoint (6294HA)
---

## Overview

The [DETA Outdoor Double Powerpoint](https://www.bunnings.com.au/deta-grid-connect-smart-outdoor-double-powerpoint_p0172781) comes with a WB2S module.
#

## Using Cloudcutter

[Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) is a tool that simplifies flashing Tuya-based devices. It allows you to flash the firmware remotely, eliminating the need to physically open the device. [Follow these instructions](https://github.com/tuya-cloudcutter/tuya-cloudcutter) to flash your Deta 6294HA device using Cloudcutter.
---
#

## Note on Power Monitoring

Power measurement uses the HLW8032 or CSE7766 protocol at 4800 baud. Program the device before installing the module as the RX pin is used.
---
#

## GPIO Pinout

##

## ESP-Based Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO03 | RX for CSE7766            |
| GPIO04 | Button 1 (inverted)       |
| GPIO05 | LED (inverted)            |
| GPIO12 | Button 2 (inverted)       |
| GPIO13 | Relay 1                   |
| GPIO14 | Relay 2                   |
##

## BK72XX-Based Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| RX1    | RX for CSE7766            |
| P7     | Button 1 (inverted)       |
| P8     | LED (inverted)            |
| P24    | Button 2 (inverted)       |
| P6     | Relay 1                   |
| P26    | Relay 2                   |
---
#

## Calibration

For calibration, check out Frenck's [comprehensive guide](https://frenck.dev/calibrating-an-esphome-flashed-power-plug/#7-applying-corrections-to-the-firmware).
---
#

## Configuration

> **Note:** The configuration examples include calibration data. Modify as needed.