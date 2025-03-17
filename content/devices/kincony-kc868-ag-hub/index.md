---
board: esp32
date_published: '2023-03-25T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: KinCony KC868-AG Hub
---

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO22 | 433MHz Transmitter |
| GPIO13 | 433MHz Receiver    |
| GPIO23 | IR Receiver        |
| GPIO2  | IR Transmitter     |
| GPIO4  | Buzzer             |
[Additional pinout/design details](https://www.kincony.com/kc868-ag-iot-ir-controller.html)

## Basic Configuration

```yaml
# Basic Config
esphome:
  name: kicony-kc868-ag
  friendly_name: KinCony KC868-AG Hub
esp32:
  board: esp32dev
  framework:
    type: arduino
# your OTA/API/Wifi/logger boilerplate here
remote_transmitter:
  - id: transmitter_ir
    pin: GPIO2
    carrier_duty_percent: 50%
  - id: transmitter_rf
    pin: GPIO22
    carrier_duty_percent: 50%
remote_receiver:
  # see https://esphome.io/components/remote_transmitter.html#setting-up-infrared-devices
  # for details on discovering the correct codes for your devices
  - id: receiver_ir
    pin:
      number: GPIO23
      inverted: True
    dump: all
  # see https://esphome.io/components/remote_transmitter.html#setting-up-rf-devices
  # for details on discovering the correct codes for your devices
  - id: receiver_rf
    pin:
      number: GPIO13
    dump: all
    # Settings to optimize recognition of RF devices
    tolerance: 50%
    filter: 250us
    idle: 4ms
    buffer_size: 2kb
switch:
  # an example
  - platform: template
    name: Turn on TV
    turn_on_action:
      - transmitter_ir.transmit_sony:
          data: 0x00000750
          repeat:
            times: 5
            wait_time: 45ms
    id: tv_on
```