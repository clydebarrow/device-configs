---
board: bk72xx
date_published: '2024-07-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: DIY Smart Switch
---

## General Notes

A smart WIFI relay to convert a normal swicht into a smart switch and retain the fuction of the normal switch.
Some modules have RF433 fuction but not included below.
These devices are sold under many brands on Aliexpress.

## GPIO Pinout

| Pin    | Function                   |
| ------ | -------------------------- |
| P6     | Rocker switch INPUT_PULLUP |
| P7     | Relay (H)                  |
| P8     | RF input ?                 |
| P23    | Button INPUT_PULLUP        |
| P26    | Blue Status LED (H)        |