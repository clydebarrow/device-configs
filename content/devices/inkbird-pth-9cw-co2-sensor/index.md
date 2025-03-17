---
board: bk72xx
date_published: '2024-08-15T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
title: Inkbird PTH-9CW CO2 Sensor
---

## Overview

The Inkbird PTH-9CW (INK-CO2W) is an air quality sensor that provides CO2 concentration, temperature and humidity measurements. A teardown of this device can be found [here](https://goughlui.com/2023/10/22/review-teardown-inkbird-pth-9cw-wi-fi-carbon-dioxide-detector/) thanks to Dr. Gough.
This is a Tuya device with a CB3S module inside. The NDIR CO2 sensor is either an MH-Z19D or MH-Z19E, and the temp/humidity sensor is an SHT40. All the sensors and the display are connected to the Tuya MCU.
While the device has a built-in 18650 cell, it has no power-saving features and will sample the NDIR sensor continuously. As a result of that, the battery life is extremely poor, and it must remain plugged in for continuous use. If you don't plan to use it as a portable device, the battery can be disconnected with no loss of function. Optionally, solder a 100uF electrolytic capacitor across the battery connector to stop the battery charging animation on the display.

## Flashing

To flash the device, disconnect the solder bridges on J30 and J31, then solder the uart wires to the module. Pinout of the CB3S module can be found in the Libretiny [documentation](https://docs.libretiny.eu/boards/cb3s/). J2 is not connected to the CB3S module while J30 and J31 are open, so it cannot be used for flashing. After a successful upload, bridge J30 and J31 back with some solder, and reassemble the device.

## Configuration

The Tuya MCU will default to a placeholder 500ppm reading while the NDIR CO2 sensor is initializing, so it needs to be filtered out. The alarm settings and display backlight cannot be changed remotely with datapoints.