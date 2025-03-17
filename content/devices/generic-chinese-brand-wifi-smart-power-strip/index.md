---
board: esp8266
date_published: '2021-07-31T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Generic Chinese Brand WiFi Smart Power Strip
---

## Overview

The generic cheap Chinese brand smart power strips of various unheard brands among various platforms, including Amazon, gearbest, banggood, and ebay, all with the product form factor as shown in the picture.
This type of device typically has four individually controllable AC outlets (each bonded with a (red) status LED), and four combined USB ports (not individually controllable but bonded with a (red) status LED). Also, there is a pushbutton(power button), and two individually controllable LEDs behind the button (in my specific model blue and white).

## GPIO Pinout

For reference only if you want to develop something more than the basic functions.
| Pin    | Function                     |
| ------ | ---------------------------- |
| GPIO0  | Led1 (Inverted: true)        |
| GPIO3  | Led2 (Inverted: true)        |
| GPIO4  | Socket 1 (Inverted: true)    |
| GPIO5  | Push Button (Inverted:true)  |
| GPIO12 | Socket 3 (Inverted: true)    |
| GPIO13 | Socket 2 (Inverted: true)    |
| GPIO14 | Socket 4 (Inverted: true)    |
| GPIO16 | 4 USB Ports                  |

## Firmware Setup

I flashed this device with tuya-convert OTA, which worked straight off. I flashed it directly with ESPHome with no problem.

## Code

The settings are straight forward to hand over all the hardwares to Home Assistant, with the only local automation to be the power(push) button, which toggles all relays. (The automation is set to turn on all relays in case any relay is already on to prevent unwanted loss of power to connected device(s).)