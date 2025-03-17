---
board: bk72xx
date_published: '2024-05-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
title: Geeni 6W8007 Smart Wi-Fi Outlet
---

## Overview

[Amazon Link](https://amzn.to/4bL2H0S)

## Product Image

## General Notes

Model Reference: 6W8007
Manufacturer: [Geeni](https://mygeeni.com/)
The Geeni Smart Wi-Fi Outlet is available at Amazon and is also available as a 2-pack.
This plug is not able to be converted with tuya-convert as of May 2024. You will need to disassemble and flash with a USB to Serial adapter. The pins are easily accessible once the device is disassembled.

## GPIO Pinout

| Pin    | Function              |
| ------ | --------------------- |
| P6     | Relay 1               |
| P7     | Relay 2               |
| P24    | Button                |
| P26    | Blue LED (inverted)   |

## Disassembly Guide

1) Unscrew back cover with Qty. 4 - Phillips #1 screws - note: loosen the 2 terminal screws for hot/neutral but don't remove. They'll stay in place for reassembly. Don't take them all the way out like I did
   
2) Separate outlet into 2 parts
   
   ![image](geeni-6w8007-3-cover-off-front.jpg)
3) Separate back half (black plastic) by prying the insert holding the chips
   ![image](geeni-6w8007-4-prying-out.jpg)
4) Access CB2S for flashing. I placed it in a small vise to hold vertical and used needle probes to flash the chip, then reassembled in reverse order.
   ![image](geeni-6w8007-5-CB2S.jpg)
   ![image](geeni-6w8007-6-CB2S-pins.jpg)