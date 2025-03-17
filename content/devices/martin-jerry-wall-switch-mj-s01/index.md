---
board: esp8266
date_published: '2022-01-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- switch
title: Martin Jerry Wall Switch MJ-S01
---

## Overview

[Amazon Link](https://amzn.to/3r3bpTx)

## General Notes

This switch uses tuya so you can [use tuya-convert to flash ESPHome](/guides/tuya-convert/).

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| GPIO4  | led1 (inverted)            |
| GPIO5  | led2 (inverted)            |
| GPIO13 | main button (input_pullup) |
| GPIO12 | relay (inverted)           |