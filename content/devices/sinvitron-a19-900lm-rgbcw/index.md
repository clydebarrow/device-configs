---
board: esp8266
date_published: '2020-07-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
title: Sinvitron A19 900lm RGBCW
---

## Overview

Standard RGB warm and cold white bulb. Flashable via tuya-convert. [Purchased from Amazon, pack of 2.](https://amzn.to/3lVKCEp)
Generally don't power on both a white channel and the color channel at full brightness - this can overheat the bulb.

## Pictures

## GPIO Pinout

| Pin    | Function   |
| ------ | ---------- |
| GPIO4  | Red        |
| GPIO5  | Cold White |
| GPIO12 | Green      |
| GPIO13 | Warm White |
| GPIO14 | Blue       |

## Basic Configuration

## Split Configuration

If you have multiple of these bulbs (likely since they come in packs), you may want to keep the shared code in one file and only put device specific information in files for each relay.
sinvitron-common.yaml:
And for each device's yaml: