---
board: rtl87xx
date_published: '2023-12-17T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- fan
title: Arlec DCF4002WHA/DCF4002BHA Ceiling Fan+Light
---

## Overview

The Arlec DCF4002 ceiling Fan+Light combo, marketed as the "Smart Madrid" model by Arlec is part of the [Grid Connect ecosystem](https://grid-connect.com.au/) and is sold at Bunnings in Australia and New Zealand.
The device comes with a Tuya WR4 module which uses the Realtek RTL8710BN, and uses a Tuya MCU for device control.  

The RTL8710BN is mounted on a daughterboard on pin headers, which allows for easy removal and reflashing without needing a soldering iron.

Alternatively, you can replace the WR4 with an ESP8266 module, soldered to the appropriate Power, GND, and UART pins of the daughterboard.
For reflashing the RTL8710, the LibreTiny Chip Tool [ltchiptool](https://github.com/libretiny-eu/ltchiptool) can be used to reflash the board via its UART pins which are exposed via the pin header. Details on the reflashing procedure are available here: https://docs.libretiny.eu/docs/platform/realtek-ambz/#flashing
We recommend peforming the following steps for reflashing:
- Open the ESPHome Add-On Dashboard
- Click "New Device" in the bottom-right corner
- Click Continue
- Enter a name for the device and click Next
- Click on any of the device types
- On the next screewn, click SKIP. Do not click Install
- When the device is listed in the dashboard, click Edit
- Paste in the YAML config from this page
- Click Save
- Click Install
- Select the "Manual Download" option
- Download the UF2 version of the file and Flash using ltchiptool

## Basic Configuration

#

## For WR4 RTL8170BN module

#

## If WR4 is replaced with ESP8266

It is critical that you disable serial logging as per the YAML provided here.  If you do not do this, the Tuya MCU spits out gibberish and is not recognised by ESPHome.