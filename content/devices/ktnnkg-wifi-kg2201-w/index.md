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
title: KTNNKG Wifi-KG2201-W
---

## Overview

Single channel relay with 433Mhz RF module, flashable via tuya-convert or UART and GPIO0 (these, VCC, and GND are all conveniently broken out to pads). On this device, the relay is controlled by the ESP and RF signals are decoded by an RF module and sent to the ESP.
Because the actual handling of the RF signals is done by the ESP, any previous remote pairs will be reset upon flashing esphome. See the Remote Pairing section. However, each paired button can be sent to the smart hub such as Home Assistant, even if it doesn't control the relay in the device receiving the signal - allowing you to (indirectly) control any device/functionality in your smart home system through the RF buttons.

## Pictures

## GPIO Pinout

| Pin    | Function         |
| ------ | ---------------- |
| GPIO4  | Relay            |
| GPI05  | RF code receiver |
| GPI012 | Button           |
| GPIO13 | Red LED          |
| GPIO15 | Blue LED         |

## Basic Configuration

## Remote Pairing

You will first need to flash the above firmware, and then view the serial output of the device (the 'show logs' button on the ESPHome dashboard works well for this, or just keep the terminal open after flashing via the dashboard). Press and hold for a bit the 433Mhz button you want to pair, and you should see something like this in the log (fake data shown here):
```console
[13:07:27][D][remote.rc_switch:243]: Received RCSwitch Raw: protocol=1 data='101010101010101010101010'
[13:07:27][D][remote.rc_switch:243]: Received RCSwitch Raw: protocol=1 data='101010101010101010101010'
[13:07:27][D][remote.rc_switch:243]: Received RCSwitch Raw: protocol=1 data='101010101010101010101010'
[13:07:27][D][remote.rc_switch:243]: Received RCSwitch Raw: protocol=1 data='101010101010101010101010'
[13:07:27][D][remote.rc_switch:243]: Received RCSwitch Raw: protocol=1 data='101010101010101010101'
```
Save the 24-bit long 'data' code. Do not save any data that looks cut off, such as the last line shown above. Then, make a remote_receiver binary sensor in the binary sensors section of the configuration file (leaving the GPIO button). This example will toggle the relay when the RF button is pressed, and light up the red LED while the button is pressed:
Momentary, interlocking or any other behavior (including only forwarding the button to HA) can be set with switch.turn_on/turn_off/toggle: "relay" in the on_press and on_release sections.
Some other notes:
- 500ms for the delayed off filter seemed to be the minimum to properly debounce the input when holding down the RF button.
- Change internal from false to true on each remote_receiver binary sensor to hide each button from the hub.

## Split Configuration

If you have multiple of these relays, you may want to keep the shared code in one file and only put device specific information in files for each relay.
ktnnkg-common.yaml:
And for each device's yaml. Note that the whole binary_sensor section including the on-device button goes here, this cannot be split up.