---
board: ESP8266
date_published: '2023-08-31T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- dimmer
- gpio
- sensor
title: Miboxer TRI-C1WR Dimmer Module
---

## Overview

![Miboxer TRI-C1WR Dimmer Module](miboxer-tri-c1wr.webp "Miboxer TRI-C1WR Dimmer Module")

## General Notes

The Miboxer TRI-C1WR Dimmer Module uses the UART to communicate with Tuya MCU. This dimmer comes with a CB2S chip and requires replacement in order to be used with ESPHome.
It is still possible to convert these switches to ESPHome by replacing the CB2S chip with an Espressif ESP8685-WROOM-03-H2/H4 or Wireless Tag WT32C3-01N or an esp8266 ESP-02 chip and this process will require heat gun, soldering tools and moderate soldering skill, for all chip replacements can be made easier with low melt solder as well, these were replaced with official espressif ESP8685-WROOM-03-H4 modules

## Flashing

Flash using ESP Web install and select ESP32-C3 option.
To put ESP32-C3 in flash mode EN needs to be pulled high and GPIO9 need to be pulled low. May take a 2-3 attempts, but just disconnect and reconnect 3V3 while keeping GPIO9 pulled low and click the retry button again until it works.
The [datasheet](https://docs.ai-thinker.com/_media/esp32/docs/esp-c3-12f_specification.pdf) references GPIO8 which needs to be pulled low during flashing, best to solder a push switch or something that can act as a reset switch to allow ESP32-C3 to boot in flashing mode.

| ESP32 Pin | USB Serial Pin | Comments |
| --- | --- | --- |
| 3V3 | 3V3 | Connect to dedicated 3V3 1A power supply if encountering brown out |
| G | GND | |
| IO9 | Ground | Round contact pad on back of board, pull low BEFORE attaching 3V3 |
| IO8 | 3V3 | Could not find this pin, but it didn't seem to be required |
| TX | RX | |
| RX | TX | |
| EN | 3V3 | Pull high to enable ESP32 (do not leave floating) |

## Running

For normal operation connect EN to VCC (pull high) to enable the C3 chip. GPIO9 has an internal pullup and it needs to be high on power up for the module to boot so try and avoid that pin similar to GPIO0 on ESP8266.
ESP32's are power hungry on boot and the USB to serial adapter might not be able to provide enough power for that. Use a stable 3.3v power supply that can supply more than 1A.

## GPIO Pinout for ESP32-C3

| Pin    | Function       |
| ------ | -------------- |
| GPIO20 | RX             |
| GPIO21 | TX             |

## Getting it up and running

The Dimmer Module is a TuyaMCU device, however as the main CB2S chip needs to be replaced with a Espressif ESP8685-WROOM-03-H2/H4 or Wireless Tag WT32C3-01N or an esp8266 ESP-02 chip, which is easily flashed before soldering. After that, you can use ESPHome's OTA functionality to make any further changes.

## Configuration for ESP-IDF