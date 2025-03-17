---
board: esp8266
date_published: '2023-12-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- switch
title: Martin Jerry MJ-ST02
---

## Overview

[Amazon Link](https://amzn.to/3GFjAMY)
Martin Jerry MJ-ST02 3-Way Switch
I received mine when ordering Tasmota pre-flashed Martin Jerry 3-way switches from [Amazon](https://amzn.to/3GFjAMY), even though the listing shows them as MJ-ST01 switches.

## Notes

This product uses Tuya MCU to control the relay.  It requires a baud rate of 9600.

## GPIO Pinout

| Pin   | Function |
| ----- | -------- |
| GPIO1 | Tuya Tx  |
| GPIO3 | Tuya Rx  |

## Tuya Datapoints

| Datapoint | Function  |
| -----     | --------  |
| 1         | switch    |
| 7         | int value |