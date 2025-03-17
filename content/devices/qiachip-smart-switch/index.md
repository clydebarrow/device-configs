---
board: esp8266
date_published: '2020-07-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: QIACHIP Smart Switch
---

## Overview

Single channel relay with 433Mhz RF module. On this device, the relay is controlled directly by the RF module, and the ESP module talks to the RF module over UART. For example, when a command to turn on the relay comes in over wifi, this is sent over the UART to the RF module, which then switches the relay. When a 433Mhz control button paired to the module is pressed, the RF module switches the relay and tells the ESP over UART.
Since the RF module still handles all the RF input, the pairing instructions are the same. Press the button on the module a certain amount of times, then press the RF button(s).
- For momentary mode, press the button on the module once, then the RF button.
- For toggle mode ('normal' mode), press the button twice, then the RF button.
- For interlocking mode, press the button three times, then the first RF button, then the second.
- To clear all remotes, press the button eight times.
Because the ESP's main UART is connected to the RF module, programming with an external UART and pulling down GPIO0 does not work, you must use tuya-convert. Since flashing the ESP does not reset the RF module, your paired remotes will not be changed.

## Pictures

## GPIO Pinout

| Pin   | Function               |
| ----- | ---------------------- |
| GPIO1 | UART TX                |
| GPI03 | UART RX                |
| GPIO4 | Blue LED on ESP module |

## Basic Configuration

To handle the incoming UART messages from the RF module, a custom module is required. You will need both a yaml file and qiachip-uart.h.
qiachip.yaml:
The UART module checks the UART buffer every 100ms, expecting the 4 byte long messages sent by the RF module, and updates when it receives one.
qiachip-uart.h:
```cpp
#include "esphome.h"
class QiachipUART : public PollingComponent, public BinarySensor{
 public:
  QiachipUART() : PollingComponent(100) {}
  void setup() override {
  }
  void update() override {
    if (Serial.available() == 4) {
      char buffer[4];
      Serial.readBytes(buffer, 4);
      if (buffer[3] == 0xF7) {
        // 53 00 01 F7
        publish_state(true);
      } else if (buffer[3] == 0xF6) {
        // 53 00 00 F6
        publish_state(false);
      }
    } else if (Serial.available() > 4) {
      while (Serial.available()) {
        Serial.read();
      }
    }
  }
};
```

## Split Configuration

If you have multiple of these relays, you may want to keep the shared code in one file and only put device specific information in files for each relay. Leave qiachip-uart.h as is in this situation.
qiachip-common.yaml:
And for each device's yaml: