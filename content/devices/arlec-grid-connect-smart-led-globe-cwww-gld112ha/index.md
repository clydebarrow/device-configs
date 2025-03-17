---
board: esp8266
date_published: '2021-08-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- light
- gpio
title: Arlec Grid Connect Smart LED Globe CWWW (GLD112HA)
---

## Overview

The `Arlec GLD112HA Grid Connect Smart LED Globe CWWW` is part of the [Grid Connect ecosystem](https://grid-connect.com.au/) sold at Bunnings in Australia and can be converted using the `tuya-convert` method. The older stock has a higher success to flash vs the new stock. Make sure to check for the 4 or 5 digit code stamped on the bulb. The lower the number the better, however it is getting near impossible to find old stock now days.
In the past, it was necessary to rely on `custom_components` to be written for ESPHome to understand the two PWM signals as it was impossible to directly specify `brightness` and `color_temp` values under previous light platforms.
At the time of writing, you can now use the direct integration `color_temperature` platform from ESPHome. By using this platform, it opens up the ability to also add [light effects](https://esphome.io/components/light/index.html#light-effects) to the bulb as well.
The `GLD112HA` uses a `BP5926 chip` to drive the LED's and this chip uses two PWM signals to set the colour temperature and brightness. The bulb comes in both B22 and E27 bayonet fitting.

## GPIO Pinout

| Pin    | Function                  |
| ------ | ------------------------- |
| GPIO5 | PWM `(brightness)` |
| GPIO13 | PWM `(color_temp)` |

## Getting it up and running

#

## Tuya Convert

As the LED bulb do not have any physical buttons, by turning the bulb on and off three times, you will enter pairing mode. This will cause the bulb to start flashing.
- Connect and disconnect power from bulb three times.
- The bulb will start flashing - this indicates the device has entered pairing mode successfully and is ready to see tuya-convert.
- Follow tuya-convert [flashing procedure](https://github.com/ct-Open-Source/tuya-convert).