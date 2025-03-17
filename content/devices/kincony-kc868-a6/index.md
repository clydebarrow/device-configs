---
board: esp32
date_published: '2023-04-20T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: KinCony KC868-A6
---

## GPIO Pinout

| Pin    | Function           |
| ------ | ------------------ |
| GPIO32 | 1-Wire GPIO IO-1   |
| GPIO33 | 1-Wire GPIO IO-2   |
| GPIO4  | I2C SDA            |
| GPIO15 | I2C SCL            |
| GPIO14 | RS485 RX           |
| GPIO27 | RS485 TX           |
| GPIO17 | RS232 RX           |
| GPIO16 | RS232 TX           |
| GPIO5  | SPI CS             |
| GPIO23 | SPI MOSI           |
| GPIO19 | SPI MISO           |
| GPIO18 | SPI CSK            |
| GPIO21 | LORA RST           |
| GPIO2  | LORA DIO0          |
| GPIO26 | Analog output DA1  |
| GPIO25 | Analog output DA2  |
| GPIO36 | Analog input A1    |
| GPIO39 | Analog input A2    |
| GPIO34 | Analog input A3    |
| GPIO35 | Analog input A4    |
[Additional pinout/design details](https://www.kincony.com/esp32-6-channel-relay-module-kc868-a6.html)

## Installation

Connect the board with a USB-C cable to your commputer. While pressing the `S2` switch, attach the external power supply (12V) to the board. Erase flash and then flash the board with the usual ESPHome installation methods.