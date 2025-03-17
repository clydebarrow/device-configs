---
board: esp8266
date_published: '2020-05-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Aoycocr-X10S Power Monitoring Plug
---

## Overview

This device did not have a serial number. FCC-ID is [2AKBP](https://fccid.io/2AKBP-X10S).
This device shares the FCC-ID with [Kauf plugs](https://www.amazon.com/gp/product/B09JQ8MMNH/) and also [Cloudfree smartplug 2](https://cloudfree.shop/product/cloudfree-smart-plug-runs-tasmota/)
This template was based on the AWP04L template and modified for this device. I used a Kill-A-Watt meter to measure voltage, current and watts of the plug with and without a downstream device turned on. The downstream device was an LED bulb. Power Factor was .93 on the Kill-A-Watt meter
The GPIO pinout was learned from [Blakadder Tasmota](https://templates.blakadder.com/aoycocr_X10S.html) documentation.

## GPIO Pinout

| Pin    | Function                     |
| ------ | ---------------------------- |
| GPIO0  | Status LED - Red (inverted)  |
| GPIO12 | sel_pin hlw8012 (inverted)   |
| GPIO5  | cf_pin hlw8012               |
| GPIO4  | Relay                        |
| GPIO13 | Button (inverted)            |
| GPIO14 | cf1_pin hlw8012              |
| GPIO2  | Status LED - Blue (inverted) |

## Basic Configuration

Note: You will want to exclude the red_led and blue_led lights from your recorder component, especially if you use the included Throb custom animation, since that would fill your database with the on/off blinking status updates.

## Split Configuration

If you have several of these plugs, you may prefer to keep the shared code in one file and only put the device-specific code in the files for each plug.
In aoycocr_x10s_common:
Then in each plug's yaml: