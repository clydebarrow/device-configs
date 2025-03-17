---
board: esp32
date_published: '2023-01-07T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff THR320D
---

## Bootloop Workaround

Some people experience a boot loop when trying to flash esphome directly.
Here's a workaround: <https://community.home-assistant.io/t/bootloop-workaround-for-flashing-sonoff-th-elite-thr316d-thr320d-and-maybe-others-with-esphome-for-the-first-time/498868>

## GPIO Pinout

(Source: <https://templates.blakadder.com/sonoff_THR320D.html>)
Some GPIO are active-low, meaning they're "on" when they're pulled low. In ESPHome that's often called "inverted".
The relays GPIO are active-high.
The main relay is bistable/latching, meaning a pulse on pin 1 switches the
relay ON, and a pulse on pin 2 switches the relay OFF.
These two pins should never be active at the same time, or the device will become dangerously hot in a few minutes.
Note that until March 2024 there was an error in this page causing a safety issue:
The code was considering the relays GPIO as being active-low, when they are actually active-high. So the two main relay pins were stay simultaneously active most of the time, making the device dangerously hot.
If you copied the old version of the code from here, please remove the ```inverted: True``` line for the relays and update your devices as soon as possible.
| Pin    | Function                                                                  |
| ------ | ----------------------------------                                        |
| GPIO0  | Push Button (HIGH = off, LOW = on)                                        |
| GPIO4  | Small Relay (Dry Contact)                                                 |
| GPIO19 | Large/Main Relay pin 1, pull high for relay ON                            |
| GPIO22 | Large/Main Relay pin 2, pull high for relay OFF                           |
| GPIO5  | Display (TM1621) Data                                                     |
| GPIO17 | Display (TM1621) CS                                                       |
| GPIO18 | Display (TM1621) Write                                                    |
| GPIO23 | Display (TM1621) Read                                                     |
| GPIO16 | Left LED (Red)                                                            |
| GPIO15 | Middle LED (Blue)                                                         |
| GPIO13 | Right LED (Green)                                                         |

## Basic Configuration

Internal momentary switches are used to pulse the ON/OFF pins on the main relay.
A template switch is used to hide the complexity of controlling the two internal
momentary switches.
One shortcoming here is we don't have any way to confirm the true state of the
main relay, and so there is a possibility that our template switch could get out
of sync with the true state of the relay.
Here is an alternative configuration, set up to control a geyser, with an
ATTiny85 acting as a DS18B20 1-wire probe, using OneWireHub. The intent is
to use excess solar power to heat the geyser in Boost mode, revert to Eco
overnight, and default to Home in case there is no external controller.