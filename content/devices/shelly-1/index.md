---
board: esp8266
date_published: '2019-10-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
tags:
- switch
title: Shelly 1
---

## Overview

[Amazon Link](https://amzn.to/2OAz8de)

## GPIO Pinout

| Pin   | Function     |
| ----- | ------------ |
| GPIO4 | Relay        |
| GPIO5 | Switch Input |

## Basic Configuration

## Detached switch mode for push button light switch

This config will send events to Home Assistant so you can use the Shelly as detached switch. The events can be used as triggers for automations to toggle an attached (smart) light, and to perform other actions on double click and long click (e.g. turn off all the lights on the floor, start a "go to bed" automation).
In case there is no connection to Wifi, or no API connection (normally Home Assistant) the config will toggle the relay, so it will still toggle the attached light in cases where Wifi or HA fails.
The relay is exposed to Home Assistant as a switch. As well as some (optional) sensors with information on the ESPHome version and Wifi status

## Detached switch mode for toggle light switch

This config will send events to Home Assistant so you can use the Shelly as detached switch. The events can be used as triggers for automations to toggle an attached smart light.
In case the relay is switched off, the Shelly has no connection to Wifi, or no API connection to Home Assistant can be made, the config will toggle the relay. This allows the switch to still keep turning the attached smart light on and off when WiFi or Home Assistant is unavailable.
When the power drops and goes back on, the relay will default to off. This prevents lights turning on when a short power outage happens when you are away from home.
The relay is exposed to Home Assistant as a switch. As well as some (optional) sensors with information on the ESPHome version and Wifi status