---
board: esp8266
date_published: '2020-10-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
- sensor
title: MagicHome RGBW ZJ-WFMN-A V1.1 LED Controller
---

## General Notes

MagicHome RGBW LED controller with Infrared (IR) receiver and remote.
The IR codes are incomplete to map all remote functions to a button. Only ON/OFF, Red, Green, Blue, White, Flash and Strobe effects are implemented in this configuration
:information_source: Please note that MagicHome began to produce devices with BL602 chip instead of ESP. ESPHome is not compatible with BL602. Before buying make sure a controller is using the right chip.

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO4  | IR Receiver   |
| GPIO5  | Green Channel |
| GPIO12 | Red Channel   |
| GPIO13 | Blue Channel  |
| GPIO15 | White Channel |

## Basic Configuration

## Split Configuration

If you have several of these LED controllers, you may prefer to keep the shared code in one file and only put the device-specific code in the files for each LED strip.
In magichome_ledstrip_common.yaml:
Then in each led strip's yaml: