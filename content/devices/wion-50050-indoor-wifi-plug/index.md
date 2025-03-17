---
board: esp8266
date_published: '2023-07-02T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: WiOn 50050 Indoor WiFi Plug
---

## Overview

[Amazon Link](https://amzn.to/447q55e)

## WiOn 50050 Indoor WiFi Plug

The device has 2 indicator LEDs, 1 power button, 1 reset button and 1 controllable relay.
The device is controlled by a ESP8266 that is from ECO-PLUGS/PAGECO-PLUGS, and the [FCC filing](https://fcc.report/FCC-ID/PAGECO-PLUGS) can be found here.
The device uses a Proprietary app that cannot be flashed to ESPHome OTA, the initial install must be USB to Serial. Once ESPHome is installed all future downloads can be OTA.

## Product Image

## GPIO Pinout

The GPIO pinout was learned from [NorthernMan54](https://gist.github.com/NorthernMan54/ef912a07482b9ab83fa80b91b5b763e8).
The GPIOs being used are:
* Button: GPIO13
* Relay1: GPIO15
*

## Enter Flash Mode

In order to get the ESP chip into flash mode I did the following:
Hold GPIO0 to ground, then apply power. My connections were soldered, so I left GPIO0 connected to ground for the duration of the flash.
Once log showed a successful flash I removed the GPIO0, TX and RX pins and rebooted device.