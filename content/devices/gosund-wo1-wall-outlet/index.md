---
board: esp8266
date_published: '2022-03-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Gosund WO1 Wall Outlet
---

## Flashing

As of 2022-03-25, this device can be flashed with Tuya Convert OTA (over-the-air) out of the box with no adjustments needed.  Put the device in flash mode by long-holding either button until it starts fast-flashing.  Alternately, there are exposed pins on the ESP board for serial connection, but that method has not been tried or verified, as it wasn't necessary.

## GPIO Pinout

| Pin    | Function                               |
| ------ | -------------------------------------- |
| GPIO0  | Top outlet LED (Inverted: true)        |
| GPIO2  | Status LED (Inverted: true)            |
| GPIO4  | HLW8012 CF1 pin                        |
| GPIO5  | BL0937 CF pin                          |
| GPIO12 | HLW8012 SEL pin (Inverted: true)       |
| GPIO13 | Bottom outlet LED (Inverted: true)     |
| GPIO14 | Bottom outlet relay                    |
| GPIO15 | Top outlet relay                       |

## General Notes

These devices appear to be individually calibrated for voltage.  As a result, you will need to measure with a multimeter and adjust the voltage divider accordingly.  The observed range so far for voltage divider is 1646-1692, so the base configuration has been adjusted to be the average of range at 1670 for likely best default settings.  You can adjust the voltage divider in the substitutions section if needed.