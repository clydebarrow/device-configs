---
board: bk72xx
date_published: '2025-02-22T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Tuya Generic WiFI IR Remote Control
---

## General Notes

This devices has a CB3S board. It can be bought at AliExpres, e.g. [here](https://www.aliexpress.com/item/1005007804859733.html) (February 2025).

## GPIO Pinout

| Pin | Function      |
| --- | ------------- |
| P6  | Button        |
| P7  | IR Receiver   |
| P8  | LED           |
| P26 | IR Transmitter|

## Flashing

This device can be flashed using [Tuya Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) using device profile _tuya-generic-universal-ir-remote-control-cb3s-v2.0.0_.

## Configuration

```yaml
bk72xx:
  board: cb3s
remote_receiver:
  pin:
    number: P7
    inverted: true
    mode: INPUT_PULLUP
remote_transmitter:
  pin: P26
  carrier_duty_percent: 50%
light:
  - platform: status_led
    pin: P8
binary_sensor:
  - platform: gpio
    pin:
      number: P6
      inverted: true
      mode:
        input: true
        pullup: true
```