---
board: esp32
date_published: '2022-08-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: Shelly Plus i4
---

## GPIO Pinout

| Pin    | Function       |
| ------ | -------------- |
| GPIO12 | Switch 1 Input |
| GPIO14 | Switch 2 Input |
| GPIO26 | Switch 4 Input |
| GPIO27 | Switch 3 Input |
The Shelly Plus i4 is based on the ESP32-U4WDH (Single core, 160MHz, 4MB embedded flash)
Credit to: [blakadder](https://templates.blakadder.com/shelly_plus_i4.html)

## Configuration for generating Home Assistant Events and Multi-Click Actions

## Basic Configuration - 4 single click buttons

If you want to use the Arduino framework you can use the Tasmota Arduino Core 2.0.5 for ESP32 Solo
(https://github.com/tasmota/arduino-esp32/releases) port as follows:
``` yaml
esphome:
  name: ${device_name}
  comment: ${device_description}
  platformio_options:
    platform_packages:
    - framework-arduinoespressif32 @ https://github.com/tasmota/arduino-esp32/releases/download/2.0.5/framework-arduinoespressif32-solo1.zip
    board_build.f_cpu: 160000000L
  project:
    name: "${project_name}"
    version: "${project_version}"
esp32:
  board: esp32doit-devkit-v1
  variant: esp32
  framework:
    type: arduino
    platform_version: 5.2.0
#

## the rest of your config

```