---
title: LILYGO TTGO T-Display
board: ESP32
slug: t-display
standards: [global,au]
project_url: https://www.lilygo.cc/products/lilygo%C2%AE-ttgo-t-display-1-14-inch-lcd-esp32-control-board
tags: [display]
date_published: 2025-03-13T23:31:32.079Z
gpio_pins:
  GPIO0: Button 1
  GPIO35: Button 2
  GPIO5: TFT DC
  GPIO16: TFT MOSI
  GPIO17: TFT SCK
  GPIO23: TFT RST
  GPIO4: TFT CS
  GPIO2: TFT BL
  GPIO21: I2C SDA
  GPIO22: I2C SCL
---

## Overview

The LILYGO TTGO T-Display is a compact development board featuring:

- 1.14" LCD TFT display (135x240 pixels)
- ESP32 dual-core microcontroller
- Two programmable buttons
- USB-C connector
- LiPo battery support with charging

## Hardware Features

- **Display**: 1.14" LCD TFT (135x240 pixels)
- **Processor**: ESP32 with WiFi and Bluetooth
- **Input**: 2 programmable buttons
- **Power**: USB-C and LiPo battery with charging circuit
- **Interfaces**: I2C, SPI (display)
- **Memory**: 4MB Flash

## GPIO Configuration

The board uses the following GPIO pins:

### Display Interface (SPI)
- MOSI: GPIO16
- SCK: GPIO17
- DC: GPIO5
- RST: GPIO23
- CS: GPIO4
- Backlight: GPIO2

### User Interface
- Button 1: GPIO0
- Button 2: GPIO35

### I2C Interface
- SDA: GPIO21
- SCL: GPIO22

