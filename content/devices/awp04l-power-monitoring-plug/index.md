---
board: esp8266
date_published: '2019-10-15T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: AWP04L Power Monitoring Plug
---

## Overview

These devices come with different brands, but all have AWP04L serial number on the back sticker. FCC-ID is [2ANOO-SM800](https://fccid.io/2ANOO-SM800).
This template has been updated with "comment:" and "captive_portal:" feautures added in ESPHome v. 1.14

## GPIO Pinout

| Pin    | Function                     |
| ------ | ---------------------------- |
| GPIO0  | Status LED - Red (inverted)  |
| GPIO3  | sel_pin hlw8012 (inverted)   |
| GPIO5  | cf_pin hlw8012               |
| GPIO12 | Relay                        |
| GPIO13 | Button (inverted)            |
| GPIO14 | cf1_pin hlw8012              |
| GPIO15 | Status LED - Blue (inverted) |

## Basic Configuration

Note: You will want to exclude the red_led and blue_led lights from your recorder componant, especially if you use the included Throb custom animation, since that would fill your database with the on/off blinking status updates.

## Split Configuration

If you have several of these plugs, you may prefer to keep the shared code in one file and only put the device-specific code in the files for each plug.
In plug_common.yaml:
Then in each plug's yaml: