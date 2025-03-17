---
board: esp8266
date_published: '2024-03-14T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: github://JamesSwift/localbytes-bulb-9w-rgbct/localbytes-bulb-9w-rgbct.yaml
standard:
- uk
- eu
tags:
- bulb
title: LocalBytes Smart Bulb (RGB+CT)
---

## Overview

Maker: https://mylocalbytes.com/
Preflashed with Tasmota, OTA flash to ESPHome

## GPIO Pinout

| Pin    | Function            |
| ------ | ------------------- |
| GPIO4  | LED Red             |
| GPIO5  | LED White           |
| GPIO12 | LED Green           |
| GPIO13 | LED Warm White      |
| GPIO14 | LED Blue            |

## Basic Configuration

```yaml
substitutions:
  name: localbytes-bulb-<NAME>
  friendly_name: Localbytes Bulb <NAME>
packages:
  jamesswift.localbytes-bulb-9w-rgbct: github://JamesSwift/localbytes-bulb-9w-rgbct/localbytes-bulb-9w-rgbct.yaml
esphome:
  name: ${name}
  name_add_mac_suffix: false
  friendly_name: ${friendly_name}
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```