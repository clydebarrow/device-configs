---
name: Lilygo T-RGB 2.1 Round
chip: ESP32-S3
board: lilygo-t-rgb-2.1-round
standard: global
product_link: https://lilygo.cc/products/t-rgb
tags: [display, touchscreen]
date_added: 2025-03-14T23:31:32.079Z
gpio_pins:
  GPIO00: BOOT
  GPIO01: TP_INT
  GPIO02: LCD_RED1
  GPIO03: LCD_RED2
  GPIO05: LCD_RED3
  GPIO06: LCD_RED4
  GPIO07: LCD_RED5
  GPIO08: I2C_SDA
  GPIO09: LCD_GREEN0
  GPIO10: LCD_GREEN1
  GPIO11: LCD_GREEN2
  GPIO12: LCD_GREEN3
  GPIO13: LCD_GREEN4
  GPIO14: LCD_GREEN5
  GPIO15: LCD_BLUE1
  GPIO16: LCD_BLUE2
  GPIO17: LCD_BLUE3
  GPIO18: LCD_BLUE4
  GPIO21: LCD_BLUE5
  GPIO38: SD_DO
  GPIO39: SD_CLK
  GPIO40: SD_CMD
  GPIO41: VSYNC
  GPIO42: PCLK
  GPIO45: DE
  GPIO46: LCD Backlight
  GPIO47: HSYNC
  GPIO48: I2C_SCL
---

## Overview

The Lilygo T-RGB 2.1 Round is a unique circular display module featuring:

- 2.1" round LCD display with RGB interface
- Capacitive touchscreen
- ESP32-S3 microcontroller
- SD card support
- I2C interface

## Hardware Features

- **Display**: 2.1" round LCD with RGB interface (480x480 pixels)
- **Touch**: Capacitive touchscreen with interrupt support
- **Processor**: ESP32-S3 with WiFi and Bluetooth LE
- **Storage**: MicroSD card slot
- **Interfaces**: I2C, RGB LCD
- **Power**: USB Type-C

## GPIO Configuration

The board uses the following GPIO pins:

### Display Interface
- Red Channel: GPIO02-07 (RED1-5)
- Green Channel: GPIO09-14 (GREEN0-5)
- Blue Channel: GPIO15-18, GPIO21 (BLUE1-5)
- Control: GPIO41 (VSYNC), GPIO42 (PCLK), GPIO45 (DE), GPIO47 (HSYNC)
- Backlight: GPIO46

### Other Interfaces
- I2C: GPIO08 (SDA), GPIO48 (SCL)
- Touch: GPIO01 (INT)
- SD Card: GPIO38 (DO), GPIO39 (CLK), GPIO40 (CMD)
- Boot: GPIO00


