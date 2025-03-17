---
board: esp8266
date_published: '2021-12-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
title: IoT-devices GGreg20_V3 module
---

## GGreg20_V3 Ionizing radiation detector module

Geiger-Mueller tube: SBM20
Input voltage: 2.2V - 5.5V
Tube Voltage: 400V
Sensor-side interface: pulse output
MCU-side interface: GPIO with pulse counter
GGreg20_v3 is compatible with the ESP8266/ESP32 logic signal levels (3V3 ACTIVE-LOW: 3.0-3.3V HIGH and about 0.7V LOW), and will work even with the 5V logic input.
Sensor compatibility: any ESP8266- or ESP32- powered device
Vendor site: https://allmylinks.com/iot-devices

## Connection

For example, it could be GPIO0 (D3). This pin is convenient because it has a built-in Flash button in most devices and boards based on the ESP8266 module - in case you need to check how the controller counts pulses without a sensor, it is possible to simulate pulses with a button.
>

## Powering from a 2.4V input source

If you want to power the GGreg20_V3 from a 2.4 volt source, you need to short the Schottky diode shown in the photo with a wire or replace it with a 0 ohm resistor. Note, however, that such a correction will disable the module's reverse polarity protection: