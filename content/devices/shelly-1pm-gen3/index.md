---
board: esp32
date_published: '2025-03-01T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
- au
- nz
tags:
- relay
- gpio
- sensor
title: Shelly 1PM Gen3
---

## Overview

This is the third generation of the Shelly 1PM.  It sports a single 16A
relay, power monitoring, and uses the ESP-Shelly-C38F, a derivative of
the ESP32-C3 with 8MB flash.
This device includes the Belling BL0942 Energy Monitor that is supported
by ESPHome.

## Serial Pinout

The Shelly 1PM Gen3 includes the six-pin "proprietary serial interface"
1.27mm header broken out on the back that can be used for flashing.  An
inexpensive 1.27mm to 2.54mm pitch changer board can make flashing these
devices easier than they already are.
The serial pinout is:
| Label        | Description | GPIO   |
|--------------|-------------|--------|
| ESP_DBG_UART |             | GPIO19 |
| U0TXD        | UART0 RX    | GPIO20 |
| U0RXD        | UART0 TX    | GPIO21 |
| +3.3_ESP     | 3.3v        |        |
| GPIO0        | BootSEL     | GPIO0  |
| GND          | Ground      |        |

## GPIO Pinout

| Pin    | Function     |
|--------|--------------|
| GPIO0  | LED          |
| GPIO1  | Button       |
| GPIO3  | NTC sensor   |
| GPIO4  | Relay        |
| GPIO6  | BL0942 TX    |
| GPIO7  | BL0942 RX    |
| GPIO10 | Switch       |
| GPIO19 | ESP_DBG_UART |

## Basic Configuration

## Application-specific Configuration

Following is an application-specific configuration of the Shelly 1PM
Gen3 for shutting off power to an attached clothes washer in the event
of a frozen drain line.