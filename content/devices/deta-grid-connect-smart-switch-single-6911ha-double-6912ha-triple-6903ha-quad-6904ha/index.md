---
board: bk72xx
date_published: '2023-10-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- switch
- gpio
- sensor
title: DETA Grid Connect Smart Switch (Single 6911HA / Double 6912HA / Triple 6903HA
  / Quad 6904HA)
---

## General Notes

The DETA [Smart Single Switch (6911HA)](https://www.bunnings.com.au/deta-smart-single-gang-light-switch-touch-activated-with-grid-connect_p0098811) and [Smart Double Switch (6912HA)](https://www.bunnings.com.au/deta-smart-double-gang-light-switch-touch-activated-with-grid-connect_p0098812) are made by Arlec as part of the [Grid Connect ecosystem](https://grid-connect.com.au/), and are sold at Bunnings in Australia and New Zealand.
#

## Series 1

Series 1 models could be OTA flashed using using tuya-convert.
#

## Series 2

Recently purchased devices are using the Beken BK7231T microcontroller and can be OTA flashed using using Cloudcutter.
[Triple 6903HA](https://www.bunnings.com.au/deta-smart-touch-activated-triple-gang-light-switch-with-grid-connect_p0161014) and [Quad 6904HA](https://www.bunnings.com.au/deta-smart-touch-activated-quad-gang-light-switch-with-grid-connect_p0161015) The pin outs on the 3 & 4 gang switches are different to the 1 and 2 gang switches. Some 4 gang switches are on random Tuya firmware 1.1.5 and may need to use the “Lonsonho” brand “X804A 4 Gang Smart Wifi Switch” option in Cloudcutter, otherwise use the Deta single gang switch.

## Getting it up and running

#

## Cloudcutter

[Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) is a tool designed to simplify the process of flashing Tuya-based devices. It allows you to bypass the need for physically opening the device and swapping out chips. By leveraging the cloud APIs, Cloudcutter enables you to flash the firmware remotely, making it a convenient and less intrusive option. Follow the instructions on the [Cloudcutter GitHub repository](https://github.com/tuya-cloudcutter/tuya-cloudcutter) to use this method for flashing your device.
#

## Disassembly

If you can't or don't wish to use Cloudcutter, you can flash directly to the outlet with USB to serial adapter.

## Overview

This guide covers the DETA Smart Switches, including the [Single (6911HA)](https://www.bunnings.com.au/deta-smart-single-gang-light-switch-touch-activated-with-grid-connect_p0098811) and [Double (6912HA)](https://www.bunnings.com.au/deta-smart-double-gang-light-switch-touch-activated-with-grid-connect_p0098812), which are part of the [Grid Connect ecosystem](https://grid-connect.com.au/). These switches are available at Bunnings stores in Australia and New Zealand.

## Series Information

#

## Series 1 - Flashing

- **Flashing Method**: OTA via tuya-convert
#

## Series 2 - Flashing

- **Microcontroller**: Beken BK7231T
- **Flashing Method**: OTA via Cloudcutter
> **Note**: The [Triple 6903HA](https://www.bunnings.com.au/deta-smart-touch-activated-triple-gang-light-switch-with-grid-connect_p0161014) and [Quad 6904HA](https://www.bunnings.com.au/deta-smart-touch-activated-quad-gang-light-switch-with-grid-connect_p0161015) models have different pinouts compared to the 1 and 2 gang switches.

## Setup Guide

#

## Using Cloudcutter

[Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) is a tool designed to simplify the flashing process. Follow the [official guide](https://github.com/tuya-cloudcutter/tuya-cloudcutter) for instructions.
#

## Manual Flashing

If you prefer to flash manually, you'll need a USB to serial adapter. Follow the disassembly steps below:
1. Remove the front plastic face.
2. Unscrew the two exposed screws.
3. Remove the clear panel and the small PCB underneath.
> **Tip**: You can convert these switches to ESPHome by replacing the WB3S chip with an ESP-12E or ESP-12F chip and adding a 10k pull-down resistor on GPIO15.

## GPIO Pinouts

#

## Tuya-Based Models

| Pin    | Function                       |
| ------ | ------------------------------ |
| GPIO4  | Status LED _(inverted)_        |
| GPIO12 | Button, Bottom                 |
| GPIO13 | Relay, Top _(includes LED)_    |
| GPIO14 | Relay, Bottom _(includes LED)_ |
| GPIO16 | Button, Top                    |
Triple 6903HA
| Pin    | Function                       |
| ------ | ------------------------------ |
| GPIO16 | Button, Top                    |
| GPIO04 | Button, Middle                 |
| GPIO03 | Button, Bottom                 |
| GPIO05 | Relay, Top _(includes LED)_    |
| GPIO14 | Relay, Middle _(includes LED)_ |
| GPIO12 | Relay, Bottom _(includes LED)_ |
| GPIO0  | Status LED _(inverted)_        |
#

## BK72XX-Based Models

| Pin    | Function                       |
| ------ | ------------------------------ |
| P6     | Relay, Left  _(includes LED)_  |
| P9     | Status LED _(inverted)_        |
| P14    | Button, Left                   |
| P24    | Button, Right                  |
| P26    | Relay, Right _(includes LED)_  |
> **Note**: Each relay shares a pin with its associated LED.

## Advanced Modifications

To gain individual control of button LEDs, remove specific diodes and solder a wire from the cathode side of the diode pad to a spare GPIO pin. [See this example](https://community-assets.home-assistant.io/optimized/4X/f/9/b/f9b1f8ea23ccc1049ea4eda1765e3f19fb173925_2_666x500.jpeg).

## Configuration Examples

#

## 1 & 2 Gang Configuration for the BK72XX configurations

#

## 3 Gang Configuration for BK72XX (Series 2)

#

## 3 Gang Configuration for ESP

#

## 4 Gang Configuration for BK72XX (Series 2)

#

## 4 Gang Configuration for ESP

> **Note**: Not updated for BK72XX.