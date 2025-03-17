---
board: bk72xx
date_published: '2025-01-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: Tuya Generic S09 Temperature/Humidity/Clock/IR
---

## General Notes

There are a few similar models of this device, some without the IR function, such as the TH06.
Some have different date formats and 24 hour time.
There's detailed teardown info at [Elektroda](https://www.elektroda.com/rtvforum/topic4035679.html).

## GPIO Pinout

| Pin | Function      |
| --- | ------------- |
| P6  | Button        |
| P8  | LED           |
| P26 | IR Transmitter|
An IR receiver on pin 8 is mentioned in a few places, but it's definitely connected to the LED.
I tried other pins, but nothing receives and I don't see any mention of that being a capability in any seller descriptions.
You can ignore the tuya component warning about the status pin.
The wifi status works over the Tuya protocol, so I assume the setting just points to the LED because that's the stock use for it.

## Flashing

The S09 that I got has a CB3S module.  Others have a WB3S, but they're very similar.
I used ``ltchiptool`` to backup the original firmware and flash an esphome uf2 binary to it.