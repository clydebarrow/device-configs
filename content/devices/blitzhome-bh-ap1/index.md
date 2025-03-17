---
board: esp8266
date_published: '2023-07-21T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- misc
- gpio
- sensor
title: BlitzHome BH-AP1
---

## General Notes

These devices run a Tuya TYWE3S module which needs flashing.
Flashing and disassembly instuctions can be found [here](https://templates.blakadder.com/blitzhome_BH-AP1).
The BlitzWolf BW-AP1 looks awfully similiar, probably the same device, so it's possible it's compatible as well.

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO1  | UART TX       |
| GPIO3  | UART RX       |

## Configuration

There are two options:
In the first option, the device is presented as a `select` entity, with states `OFF`, `Auto`, `Fan 1`, `Fan 2`, `Sleep`.
Everything is presented in one entity, no dummy output needed. This is more similar to the controls on the device, which cycles through these options, there isn't a separate control for mode and fan speed.
The second is presenting the device as a `fan` with states `OFF`, `Speed 1`, `Speed 2`. The modes (`Auto`, `Manual`, `Sleep`) can be accessed by an additional `select`, because right now, Home Assistant does not support custom speed for fans.
In this mode when modes `Auto` or `Sleep` is selected the `fan` entity will display `Speed 1` which is not necessarily true. Also for example if you have `Sleep` selected, you cannot change to `Speed 1`, because it is already selected. You have to change to mode to `Manual` instead, which can make writing automations difficult.
Because there is not a template fan, or template output in esphome, I used a dummy pwm output for the fan on `GPIO4` which is not used. There is an option to change this by writing a custom output component for this, but it's probalby not worth the work.
You can choose between the two, I prefer the first method with the `select`, but if you insist to have the device presented as a `fan` entity, you can do that as well.
#

## Configuration as select entity

#