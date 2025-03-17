---
board: ESP8266
date_published: '2022-12-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: Tuya ZY-M100 Human Presence Sensor
---

## General Notes

The Tuya ZY-M100 Sensor uses the UART on pin 15 and 16. This Sensor comes with a WBR3 chip and requires replacement in order to be used with ESPHome.
It is still possible to convert these switches to ESPHome by replacing the WBR3 chip with an Espressif ESP8685-WROOM-04-H2/H4 or Ai Thinker ESP-C3-12F or any ESP-12 Variant chip and this process will require heat gun, soldering tools and moderate soldering skill, for all chip replacements can be made easier with low melt solder as well.

## Flashing

Flash using ESP Web install and select ESP32-C3 option.
To put ESP32-C3 in flash mode EN needs to be pulled high and GPIO9 need to be pulled low. May take a 2-3 attempts, but just disconnect and reconnect 3V3 while keeping GPIO9 pulled low and click the retry button again until it works.
The [datasheet](https://docs.ai-thinker.com/_media/esp32/docs/esp-c3-12f_specification.pdf) references GPIO8 which needs to be pulled low during flashing, use the following board to achieve this you can purchase ([AliExpress](https://www.aliexpress.com/item/1005002668365356.html), [Amazon](https://amzn.to/3o8owSb), [Banggood](https://www.banggood.com/ESP8266-Test-Board-Burner-Development-Board-WIFI-Module-For-ESP-01-ESP-01S-ESP-12E-ESP-12F-ESP-12S-ESP-18T-p-1684992.html)) a test board for effortless flashing. Just drop the module in, plug in the USB cable, hold the boot button while powering up and flash!

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

The sensor is a Tuya device, however as the main WBR3 chip needs to be replaced with a ESP12 Variant or ESP32-C3-12F, which is easily flashed before soldering. After that, you can use ESPHome's OTA functionality to make any further changes.

## Configuration for ESP-IDF