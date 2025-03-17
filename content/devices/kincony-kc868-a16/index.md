---
board: esp32
date_published: '2023-04-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: KinCony KC868-A16
---

## GPIO Pinout

| Pin    | Function            |
| ------ | ------------------- |
| GPIO4  | I2C_SDA             |
| GPIO5  | I2C_SCL             |
| GPIO32 | GPIO terminal HT1   |
| GPIO33 | GPIO terminal HT2   |
| GPIO14 | GPIO terminal HT3   |
| GPIO2  | 433MHz Receiver     |
| GPIO15 | 433MHz Sender       |
| GPIO13 | RS485 TX            |
| GPIO16 | RS485 RX            |
| GPIO36 | Analog input A1     |
| GPIO34 | Analog input A2     |
| GPIO35 | Analog input A3     |
| GPIO39 | Analog input A4     |
[Additional pinout/design details](https://www.kincony.com/arduino-esp32-16-channel-relay-module-2.html)

## Installation

Remove the 433MHz modules from the board. Connect the board with a USB-C cable to your commputer. While pressing the `S2` switch, attach the external power supply (12V) to the board. Erase flash and then flash the board with the usual ESPHome installation methods.