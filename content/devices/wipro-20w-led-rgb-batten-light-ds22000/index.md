---
board: esp8266
date_published: '2023-12-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- in
tags:
- light
title: Wipro 20W LED RGB Batten Light (DS22000)
---

## Overview

Wipro Next Smart Wi-Fi 20W CCT+RGB LED Batten | 16 Million Colours | White Tunable | Dimmable
[Amazon Link](https://amzn.eu/d/aR7MunR)

## Preparing the device for flashing

Remove the caps from both ends of the batten, desolder wires from one end of the led strip (Note the wire colors and pads) and carefully pullout the led strip along with the module from the other end. Swap Tx, Rx and use 3.3v logic for programming.

## Esp Code

## Post Flashing

Repeat the steps used for preparing the device in reverse, solder the led strip back with it respective wires. Now when the device is connected to mains it gets connected to the network. (The TYWE3L Module wont power on when using ttl adaptor's 3.3v power, so assembling it back is neccessary for testing)