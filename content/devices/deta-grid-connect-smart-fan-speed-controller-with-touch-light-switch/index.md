---
board: bk72xx
date_published: '2021-02-02T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- switch
title: Deta Grid Connect Smart Fan Speed Controller with Touch Light Switch
---

## General Information

[Deta 6914HA](https://detaelectrical.com.au/product/deta-grid-connect-smart-touch-fan-speed-controller-with-light-switch/) is a smart fan controller with light switch sold in Australia and New Zealand.
#

## Series 1

Original version uses ESP8266 controller.
#

## Series 2

Newer revision uses BK7231T controller on the Tuya [WB3S module](https://developer.tuya.com/en/docs/iot/wb3s-module-datasheet?id=K9dx20n6hz5n4).

## GPIO Pinout

#

## ESP8266 Version

| GPIO # | Component |
|:------:|----------:|
| GPIO00 |   Button2 |
| GPIO01 |      None |
| GPIO02 |      None |
| GPIO03 |   LedLink |
| GPIO04 |    Relay3 |
| GPIO05 |   Button3 |
| GPIO09 |      None |
| GPIO10 |      None |
| GPIO12 |      None |
| GPIO13 |    Relay2 |
| GPIO14 |    Relay1 |
| GPIO15 |    Relay4 |
| GPIO16 |   Button1 |
|  FLAG  |      None |
#

## BK72xx Version

|  Pin # |     Component |
|:------:|--------------:|
|    P14 |       Button1 |
|     P1 |       Button2 |
|     P8 |       Button3 |
|    P10 |           Led |
|    P26 |   Light Relay |
|     P6 |   Fan Relay 1 |
|     P7 |   Fan Relay 2 |
|     P9 |   Fan Relay 3 |

## Getting it up and running

#

## Series 1 - Tuya Convert

These switches are Tuya devices, so if you don't want to open them up to flash directly, you can attempt to [use tuya-convert to initially get ESPHome onto them](/guides/tuya-convert/) however recently purchased devices are no longer Tuya-Convert compatible.  There's useful guide to disassemble and serial flash similar switches [here.](https://blog.mikejmcguire.com/2020/05/22/deta-grid-connect-3-and-4-gang-light-switches-and-home-assistant/) After that, you can use ESPHome's OTA functionality to make any further changes.
- Put the switch into "smartconfig" / "autoconfig" / pairing mode by holding any button for about 5 seconds.
- The status LED (to the side of the button(s)) blinks rapidly to confirm that it has entered pairing mode.
#

## Series 2 - Cloudcutter

[Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) is a tool designed to simplify the flashing process. Follow the [official guide](https://github.com/tuya-cloudcutter/tuya-cloudcutter) for instructions.
#

## Manual Flashing

If you prefer to flash manually, you'll need a USB to serial adapter. Follow the disassembly steps below:
1. Remove the front plastic face.
2. Unscrew the exposed screws.
3. Remove the clear panel and the small PCB underneath.

## Configuration Examples

#

## Series 1 (ESP8266)

#