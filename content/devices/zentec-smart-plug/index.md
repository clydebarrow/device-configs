---
board: esp8266
date_published: '2020-07-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Zentec Smart Plug
---

## Overview

Standard plug socket, with 2A USB port. Flashable via tuya-convert. [Purchased from Amazon.](https://amzn.to/39iCxEM)
At least two versions of this plug exist, but the only difference between the two is the pull-up on the pin for the button.

## Pictures

## GPIO Pinout

| Pin    | Function                         |
| ------ | -------------------------------- |
| GPIO2  | ESP module blue LED              |
| GPIO4  | Red LED                          |
| GPIO12 | Relay                            |
| GPI013 | Button (pull-up on older models) |

## Basic Configuration

## Split Configuration

If you have multiple of these sockets (likely since they come in packs), you may want to keep the shared code in one file and only put device specific information in files for each relay.
zentec-common.yaml:
And for each device's yaml: