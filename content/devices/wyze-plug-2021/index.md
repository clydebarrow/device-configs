---
board: esp32
date_published: '2022-12-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Wyze Plug (2021)
---

## Initial Install

This device is glued together pretty tightly, but can be opened with the application of hot air and prying. It must be opened for the first upload.

## GPIO Pinout

There are multiple versions of this device, all nominally using the WLPP1 base model number. An earlier version may use these GPIOs:
| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO15 | Button                             |
| GPIO16 | Relay                              |
| GPIO19 | Relay LED                          |
A current device purchased in late 2023 has a model number of WLPP1CFH, which uses a ESP32C3 variant, and uses GPIOs:
| Pin    | Function                           |
| ------ | ---------------------------------- |
| GPIO10 | Button                             |
| GPIO0  | Relay                              |
| GPIO1  | Relay LED                          |