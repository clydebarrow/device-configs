---
board: esp8266
date_published: '2023-12-12T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- in
tags:
- relay
title: Tinxy 4N with Fan Regulator
---

## Overview

Tinxy 4 Node Retrofit Module with Fan Regulator
[Amazon Link](https://amzn.eu/d/2V1PDRS)

## Preparing the device for flashing

Start by carefully removing the heat shrink sleeve. Next, desolder the W2 and W3 bridges located on the backside of the Tinxy board, as shown in the provided image. Connect wires from the Tinxy board's RXD, TXD, 3.3V, and GND pads to a USB TTL adapter, making sure to swap the connections for RXD and TXD.
Press and hold the Tinxy reset button while connecting the TTL adapter to your computer. Flash the firmware as soon as the esp8266 is detected, as the soldered on esp8266 tends to reboot if it didnt detect pwm signal from the MCU on GPIO14.
Once the flashing is complete, resolder the W2 and W3 bridges as before, remove the TTL wires, and reapply the heat shrink sleeve to complete the modification.
**Note**: Unlike other devices, Tinxy Esp8266 communicates with the MCU using serial data to activate the relay. So its neccessry to disconnect the W2 and W3 serial bridge between Esp and MCU to ensure no intereference while flashing and reconnecting it is crucial to esnsure proper functioning.

Knowledge Credit: [Tinxy Forum](https://forum.tinxy.in/t/flashing-custom-firmware-like-tasmota-or-esphome-and-then-restoring-back-to-original/32)
As of 10/2024, Tinxy 4N with fan regulator devices failed flashing with the esphome web flasher because it uses a baud rate of 115200.
If flashing doesn't work, try flashing via [esptool.py](https://github.com/espressif/esptool) where the baud rate can be set.
The baud rate was identified to be 460800.  If this fails in the future try other baud rates.

## esptool.py Code

```bash
python3 -m esptool --port /dev/ttyUSB0 --baud 460800 --before no_reset --after hard_reset write_flash -fm dio 0x00000 firmware.bin
```

## Esp Code

## Uart reading library

Place the uart_read_line_sensor.h library under esphome directory
```Library
#include "esphome.h"
class UartReadLineSensor : public Component, public UARTDevice, public TextSensor {
 public:
  UartReadLineSensor(UARTComponent *parent) : UARTDevice(parent) {}
  void setup() override {
    // nothing to do here
  }
  int readline(int readch, char *buffer, int len)
  {
    static int pos = 0;
    int rpos;
    if (readch > 0) {
      switch (readch) {
        case ';': // Return on CR
          rpos = pos;
          pos = 0;  // Reset position index ready for next time
          return rpos;
        default:
          if (pos < len-1) {
            buffer[pos++] = readch;
            buffer[pos] = 0;
          }
      }
    }
    // No end of line has been found, so return -1.
    return -1;
  }
  void loop() override {
    const int max_line_length = 20;
    static char buffer[max_line_length];
    while (available()) {
      if(readline(read(), buffer, max_line_length) > 0) {
        publish_state(buffer);
      }
    }
  }
};
```