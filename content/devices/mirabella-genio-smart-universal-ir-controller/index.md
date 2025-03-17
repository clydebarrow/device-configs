---
board: esp8266
date_published: '2019-10-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- misc
- gpio
- sensor
title: Mirabella Genio Smart Universal IR Controller
---

## Programming

The USB connector data pins are connected to the serial pins so one way to program it is to cut up a micro USB cable to pull out the data pins and connect them to a USB UART like so (Note the colours may vary depening on your cable):
| Micro USB Pin | USB UART Pin |
|---------------|--------------|
| 2 (White)     | TXD |
| 3 (Green)     | RXD |
To get into the boot loader it is necessary to short IO0 to ground. This requires opening the case which is uses triangular headed "security" screws, however these can be removed with a fine flat-head screw driver. Once open simply short the two pads "IO0" and "G" in the block of test points while powering the device on, then program with `esphome`. It would also be possible to solder to the test points, however they are fine pitched so using the cable simplifies things.

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO4  | Red Status LED     |
| GPIO14 | Remote Transmitter |
| GPIO5  | Remote Receiver    |
| GPIO13 | Push Button        |