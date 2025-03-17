---
board: esp8266
date_published: '2020-01-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
- gpio
- sensor
title: Mirrabella Genio I002340 Power Board with USB
---

## GPIO Pinout

| Pin    | Function                |
| ------ | ----------------------- |
| GPIO0  | LED (Inverted: true)    |
| GPIO13 | Button (Inverted: true) |
| GPIO04 | Relay 1                 |
| GPIO05 | Relay USB               |
| GPIO12 | Relay 3                 |
| GPIO14 | Relay 4                 |
| GPIO15 | Relay 2                 |

## Basic Configuration

## Button

- The setup will turn on plugs 1 to 4 with each short press, then once all plugs are on, turn off plugs 1 to 4 with each short press.
- A long press will toggle all plugs on or off.
- A double press will toggle the state of the usb ports.

## Where

| Location                                                                                           | Price |
| -------------------------------------------------------------------------------------------------- | ----- |
| [Kmart](https://www.kmart.com.au/product/mirabella-genio-wi-fi-powerboard-with-usb-ports/2736803I) | $49   |
| [Costco](costco.com.au)                                                                            | $39   |