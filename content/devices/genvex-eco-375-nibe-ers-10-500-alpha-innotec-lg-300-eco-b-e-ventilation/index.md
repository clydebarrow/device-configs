---
board: esp32
date_published: '2023-04-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Genvex ECO 375, Nibe ERS 10-500, Alpha-Innotec LG 300 ECO B(E) ventilation
---

## Overview

Heat Recovery Ventilation system control via ModBUS protocol for Genvex ECO 375,
Nibe ERS 10-500, Alpha-Innotec LG 300 ECO B(E). The ventilation unit must contain
the Optima 260 (ES 960C) controller board, and have ModBUS enabled at 19600 baud.
Use an RS485 transceiver like MAX485 to the device via ModBUS. Some devices come
pre-installed with a cloud controller already plugged in to the ModBUS port, this
has to be be disconnected (ESPHome will go instead).

## Basic configuration

The configuration below is based on an Olimex ESP32-EVB board for Ethernet connection
to the network but any ESP32 module can be used (adjust GPIO pins accordingly).

## Notes

If you get CRC errors use shorter cables and double-check for the 120 Ohm termination
resistors as per ModBUS standard.
The factory pre-installed cloud controller (usually a separate box or board) has to be
disconnected because it acts a ModBUS Master, just like the ESPHome node configured as
above. You can't have two ModBUS RTU Masters on the same bus.
These units were shipped with various controller boards inside, this configuration only
matches Optima 260 (ES 960C).