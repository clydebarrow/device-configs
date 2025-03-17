---
board: esp8266
date_published: '2022-01-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- switch
title: Zemismart Switch TB21 TB22 TB23
---

## Overview

This switch comes in three variants with 1 to 3 gangs (TB21, TB22, TB23).
They all use the same config, you just drop the extra relays/inputs
Manufacturer: [Zemismart](https://www.zemismart.com/products/zemismart-tb21-smart-wifi-luxury-wall-light-switch-1-2-3-gangs-compatible-with-smart-life-app-alexa-google-home-voice-control)

## How to flash

#

## Open

Remove the button front, no screws, just use a small pointed tool to loose the holds on the sides.

There is no need to remove the circuit from the case, but it be easily lifted up from the sides. It is just held by the pin headers connecting to the relays board below
#

## Pins

There are pads for RX, TX, 3.3v, GND and I00 nicely marked on the back of the board. You can just insert pins without soldering.
Use this image to map the right connectors.

## Basic Config

The green leds are used as status light and also as backlight, when the gang is off.
It can be controlled to be always off.