---
board: ESP8266
date_published: '2021-01-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
title: Shelly i3
---

## Device Specific Config

```yaml
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO12
      mode: INPUT
    name: 'Switch 1'
    id: sensorid1
    filters:
      - delayed_on_off: 50ms
  - platform: gpio
    pin:
      number: GPIO13
      mode: INPUT
    name: 'Switch 2'
    id: sensorid2
    filters:
      - delayed_on_off: 50ms
  - platform: gpio
    pin:
      number: GPIO14
      mode: INPUT
    name: 'Switch 3'
    id: sensorid3
    filters:
      - delayed_on_off: 50ms
```