---
board: esp8266
date_published: '2019-10-14T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Rotary Encoder Volume Control
---

## General Notes

This works with a typical rotary encoder hardware, and simply sets the volume on a Home Assistant media_player via automations.yaml. This does present some problems, for example if the esp device is restarted, the volume mutes to 0.0. I haven't bothered to fix this, but of course contributions welcome :)
These devices usually have a built in momentary switch which you activate by pressing on the control knob. You could use this, for example, to change the device that is being controlled. That would require some more HA automation.
You can also use this to control, for example, smart bulbs.

## Wemos Pinout

| Pin | Function                      |
| --- | ----------------------------- |
| D7  | Push Button on rotary encoder |
| D6  | Rotary Encoder pin_b          |
| D5  | Rotary Encoder pin_a          |

## Basic Configuration for esp8266 (I used a wemos)

## Home Assistant automations.yaml

{% raw %}
{% endraw %}