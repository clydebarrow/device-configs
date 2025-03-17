---
board: esp8266
date_published: '2019-11-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Lonsonho 9W E27 RGBWW bulb
---

## Overview

This configuration is for the Lonsonho 9W E27 RGBWW bulb which is offered as a kit of 2 on [aliexpress.com]. The bulb has no special LED drivers built in and uses the ESP's pulse width modulation for dimming.

## GPIO Pinout

| Pin    | Function           |
|--------|--------------------|
| GPIO4  | red channel        |
| GPIO12 | green channel      |
| GPIO14 | blue channel       |
| GPIO13 | warm white channel |
| GPIO5  | cold white channel |

## Getting it up and running

#

## Tuya Convert

This bulb is a Tuya device, so you'll need to [use tuya-convert to initially get ESPHome onto it](/guides/tuya-convert/).  After that, you can use ESPHome's OTA functionality to make any changes.
- Put the bulb into "smartconfig" / "autoconfig" / pairing mode by switching the bulb off and on 4 or 5 times in a row in quick succession.
- The bulb blinks white rapidly to confirm that it has entered pairing mode.
Remember to make the following changes to the example YAML config below:
- line 6: Give your device a name.
- line 7: Give an ID name, all lower case and change spaces to underscores.
- line 10: Set up the static ip for your device that matches to your environment. Remember this IP must be unique in your LAN.
- lines 26, 27 and 28: gateway is the IP of your router, subnet most certainly 255.255.255.0 and dns1 again the IP of your router.
- line 31: This is only if a red cross appears here. AP SSIDs can only contain up to 32 symbols. If you've chosen a long device name it might exceed. Either shorten the device name or delete right after AP, " (192.168.4.1)".
- line 32: You'll probably don't want to complicate your live with a WiFi password when your bulb enters access point mode. Feel free to change from password: '1234abcd' to password: ''.
Once you've completed the tuya-convert process and flashed ESPHome, you can integrate your bulb in Home Assistant using a lovelace `Light` card.
Enjoy your hard work and impress some people with the magic 8-]

## Basic Configuration

[aliexpress.com]: <https://www.aliexpress.com/item/33006613923.html>