---
board: esp8266
date_published: '2023-05-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
- gpio
- sensor
title: "XtendLan chytr\xE1 venkovn\xED z\xE1suvka/ IP66/ dvojit\xE1"
---

## Manufacturer

[XtendLan](https://www.xtendlan.cz/)

The LEDs for active sockets are not controlled separately, they are directly connected to the same pin as the relay.
The RX and TX pins are missing on the main board, so for flashing, the testpad on the ESP board must be used.
There are some unused GPIO pins exported to the main board. More information can be found in the picture.

## Pinout picture

## GPIO Pinout

| Pin    | Function            |
| ------ | ------------------- |
| GPIO0  | Button 1            |
| GPIO9  | Button 2            |
| GPIO13 | Status LED          |
| GPIO5  | Relay 1             |
| GPIO12 | Relay 2             |