---
board: esp8266
date_published: '2020-11-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
title: Deta Grid Connect Smart Double Touch Power Point
---

## Deta Grid Connect Smart Double Touch Power Point

Sold by [Bunnings Warehouse](https://www.bunnings.com.au/deta-grid-connect-smart-double-touch-power-point_p0098813)
this is a AU/NZ standard wall outlet/powerpoint based on the TYWE3S module.

## Getting it up and running

#

## tuya-convert

These outlets are Tuya devices, so if you don't want to open them up to flash directly, you can attempt to [use tuya-convert to initially get ESPHome onto them](/guides/tuya-convert/) however recently purchased devices are no longer Tuya-Convert compatible.  There's useful guide to disassemble and serial flash similar switches [here.](https://blog.mikejmcguire.com/2020/05/22/deta-grid-connect-3-and-4-gang-light-switches-and-home-assistant/) After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the outlet into "smartconfig" / "autoconfig" / pairing mode by holding any button for about 5 seconds.
- The status LED (to the side of the button(s)) blinks rapidly to confirm that it has entered pairing mode.
#

## direct flashing

If you can't or don't wish to use tuya-convert, you can flash directly to the outlet with USB to serial adapter.
To disassemble the outlet in order to flash, remove the front plastic face (secured by clips on each side),
then remove the two exposed screws. Remove the clear panel and then carefully remove the small thin PCB
that sat underneath the panel.
Note that the side of the TYWE3S module where the 3v3 pin is located may be covered in silicone / epoxy.
You may be able to simply dig at it enough that the 3v3 pin is accessible.

## GPIO pinout

| GPIO # | Component   |
|:------:|------------:|
| GPIO00 |        None |
| GPIO01 |        None |
| GPIO02 |        None |
| GPIO03 |        None |
| GPIO04 |  Status LED |
| GPIO05 |        None |
| GPIO09 |        None |
| GPIO10 |        None |
| GPIO12 |   Button 2n |
| GPIO13 |     Relay 1 |
| GPIO14 |     Relay 2 |
| GPIO15 |        None |
| GPIO16 |   Button 1n |