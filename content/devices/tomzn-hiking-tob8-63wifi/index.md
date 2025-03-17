---
board: esp8266
date_published: '2024-06-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: TomZN (Hiking) TOB8-63WiFi
---

## Notes

- On/Off switch
- Voltage/Current/Power/Energy Metering
- Working Voltage: AC100-280V
- Mechanical Life: Over 100000 Times
- Working Temperature: -25℃-70℃
- Red LED's wired to Relay and display it status
- Energy measurement starts from 0 on every power-up
- Not provide Power Apparent & Factor data
![Front View](/TOB8-63iFi_front.jpg "TOB8 Front View")

## GPIO Pinout

| Pin    | Function            | Notes    |
| ------ | ------------------- |----------|
| GPIO00 | Button              |          |
| GPIO12 | Relay               |          |
| GPIO13 | Status LED - Blue   | inverted |
| GPIO03 | CSE7759B meter      |          |
| GPIO06 | soldered, unknown   |          |
| GPIO07 | soldered, unknown   |          |

## Required for CSE7759B meter

```yaml
esp8266:
  board: esp8285
logger:
  baud_rate: 0
uart:
  rx_pin: RX
  baud_rate: 4800
sensor:  
  - platform: cse7766
```