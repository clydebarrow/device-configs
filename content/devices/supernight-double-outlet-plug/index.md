---
board: esp8266
date_published: '2022-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: SUPERNIGHT Double Outlet Plug
---

## Flashing

As of 2022-04-12, this device can be flashed with Tuya Convert OTA (over-the-air) out of the box with no adjustments needed.  Put the device in flash mode by long-holding either button until it starts fast-flashing.  This device likely cannot be opened without destruction.

## GPIO Pinout

| Pin    | Function                               |
| ------ | -------------------------------------- |
| GPIO1  | Left Outlet Button (Inverted: true)    |
| GPIO3  | Left Outlet Relay                      |
| GPIO4  | HLW8012 CF1 pin                        |
| GPIO5  | HLW8012 CF pin                         |
| GPIO12  | Right Outlet Relay                    |
| GPIO13 | HLW8012 SEL pin (Inverted: true)       |
| GPIO14 | Dual red status LED (Inverted: true    |
| A0 | Right Button (ADC Analog)                  |

## General Notes

These devices appear to be individually calibrated for voltage, current, and power.  As a result, you will need to measure with a multimeter and adjust the voltage divider, current resistor, and power draw accordingly.  The observed range so far for voltage divider is 747-865, so the base configuration has been adjusted to be the average of range at 806 for likely best default settings.  The observed range so far for the current resistor is 0.00113-0.0013, so the base configuration is set to 0.001215.  You can adjust the voltage divider, current resistor and power line curve in the substitutions section if needed.  You need to adjust the voltage divider and current resistor before making power adjustments.
There is an oddity with restoring the value of the right relay because of the analog switch and its values during boot up.  Because of this, the default configuration won't allow the right button to be pressed until the device is fully booted up, otherwise it will randomly change the state of the right outlet at startup.  The measured time of unavailablity of the right button is about 8 seconds as a result.
The nightlight feature cannot be controlled by the ESP IO, and cannot be disabled without physical changes.