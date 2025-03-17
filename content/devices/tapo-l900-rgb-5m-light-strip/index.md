---
board: rtl87xx
date_published: '2024-12-14T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
title: Tapo L900 RGB 5M Light Strip
---

## General Notes

This configuration is for the [TP-Link Tapo L900](https://www.tp-link.com/au/home-networking/smart-bulb/tapo-l900-5/) which comes as a colour changing LED strip with controller and power supply.

## Flashing Instuctions

This device uses a [Realtek Ameba Z2 RTL8720CF](https://www.e-paper-display.com/products_detail/productId%3D529.html) that is supported by [LibreTiny](https://docs.libretiny.eu/boards/generic-rtl8720cf-2mb-992k/).  
ltchiptool works to flash an ESPHome generated .UF2 firmware via a USB to serial converter soldered to the test points on the board.  
As per now, [prokoma's](https://github.com/libretiny-eu/libretiny/issues/44#issuecomment-2514974466) fork of ltchiptool needs to be used due to a bug.

## Possible Flashing Issues

I found RTL8720CF quite a pain to read/write to.
What worked for me is:  
Using an external lab power supply and soldering a wire to the 3v3 test point and bumping the voltage to 3.35. GND of supply and serial converter need to be connected/shared.  
Keeping the wires as short as possible ~50mm and soldering them directly beween the serial converter and the test points on the pcb.  
Using terminal from Linux Debian/KDE and rebooting the system after the first attempt.  
Soldering GPIO0 to the 3v3 line of the serial converter.  
First plugging in the USB to the laptop and then powering on the lab supply.  
Here the [stock firmware](https://github.com/CladZo91/esphome-devices/blob/main/src/docs/devices/Tapo-L900-5EU/L900_StockFW.bin) dumped from this device.

## GPIO Pinout

| Pin  | Function      |
| ---- | ------------- |
| PA19 | Red Channel   |
| PA18 | Green Channel |
| PA17 | Blue Channel  |
| PA04 | Button        |

## Basic Configuration