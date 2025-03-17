---
board: esp8266
date_published: '2025-01-19T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Xiangshang XS-SSA05 Smart Plug
---

## Links

[Amazon](https://www.amazon.com/gp/product/B07KP3HQR4)
[Manufacturer Alibaba](https://www.alibaba.com/product-detail/XS-SSA05-220V-US-standard-electrical_62365683004.html)
[FCC Pictures](https://fcc.report/FCC-ID/2AL65-XSSSA05/3627360.pdf)

## Initial Install

This device requires the use of a serial connection for the first upload. Ensure that you use a serial adapter to connect to the device and upload the firmware.
It cannot be converted to ESPHome using tuya-convert or tuya-cloudcutter.
To flash the device, you must attach GND, 3.3V, RX, and TX, and bridge IO0 to ground. You may need to hold down the button while powering on the device to put it into bootloader mode.
DO NOT ATTACH MAIN AC POWER TO DEVICE WHEN FLASHING

## GPIO Pinout

| GPIO Pin | Function                  |
| -------- |---------------------------|
| GPIO0    | Red Status LED (External) |
| GPIO1    | None                      |
| GPIO2    | None                      |
| GPIO3    | HLW8012 SELi              |
| GPIO4    | Blue LED (Internal)       |
| GPIO5    | HLW8012 CF                |
| GPIO9    | None                      |
| GPIO10   | None                      |
| GPIO12   | Relay 1                   |
| GPIO13   | Button 1                  |
| GPIO14   | HLW8012 CF1               |
| GPIO15   | Blue Link LED (External)  |
| GPIO16   | None                      |
| GPIO17   | ADC Input 1               |

## Basic Configuration

## Notes

Opening the device can be tricky. Here’s a helpful method to open it:
- Position the plug face-up on top of the jaws of a vice or two parallel flat surfaces, ensuring only the outer shell rests on them.
- Use a small punch to hammer through the ground hole and pop the rear cover and PCB out of the back.
Additionally, the GND and TX pins are difficult to access. A precision soldering iron is recommended to solder leads to these pins.
You may need to bend and hold the back case open while soldering.