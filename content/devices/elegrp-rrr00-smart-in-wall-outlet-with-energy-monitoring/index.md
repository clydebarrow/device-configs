---
board: bk72xx
date_published: '2024-11-23T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- plug
- gpio
- sensor
title: Elegrp RRR00 Smart In-Wall Outlet with Energy Monitoring
---

## Overview

[Amazon Link](https://www.amazon.com/dp/B0CBBMVV5F)

## Elegrp RRR00 Smart In-Wall Outlet with Energy Monitoring

The front has a button for each individually-switched outlet.


The relays are individual, 16A relays. Nice!

Inside is a CBU module, which has a Beken BK7231N:
https://fccid.io/2ANDL-CBU/User-Manual/CBU-User-Manual-updated-5064101.pdf

## Pinout

The PCB on my outlet had some wrong labels for pins. This confused me until I ohmed straight from the base PCB to the CBU module.
Below are the correct labels, in case it helps you.
| CBU module Pin| Function     |Use on outlet                       | Label on ELEGRP PCB (mostly incorrect)
| ------------- | -------------|------------------------------------|---------------------------------------
| 3             |P20, SCL1, TCK|RED LED (LED3) active high             | CEN (incorrect)
| 8             |P8, PWM2      |Lower switch button active low (SW2)    | ADC (incorrect)
| 10            |P6, PWM0      |Upper switch button active low (SW1)     | P8 (incorrect)
| 1             |P14, SCK      |Upper white LED (LED1) active high        | P7 (incorrect)
| 19            |P9, PWM3      |Active high upper outlet enable (R15, Q1)  | P6 (incorrect)
| 17            |P28           |Lower white LED (LED2) active high          | P26 (incorrect)
| 9             |P7, PWM1      |Active high lower outlet enable (R16, Q2)    | P24 (incorrect)
| 15            |P11, TX1      |Programming and TX to BL0942 energy monitor    | TX1
| 16            |P10, TX1      |Programming and RX from BL0942 energy monitor     | RX1
| 13            |GND           |Module GND. Connect to programmer ground when programming|GND
| 14            |3V3           | 3.3V supply to CBU module. Power when programming       | 3.3V
See this pinout for more detail on the CBU side: https://docs.libretiny.eu/boards/cbu/cbu.svg
![CBU SVG](https://docs.libretiny.eu/boards/cbu/cbu.svg "CBU SVG from LibreTiny")

## Disassembly and Initial Flash Procedure

Run the Line and WHITE scresws all the way in. Remove the 4 T7 Torx screws on the back, and remove cover.
Cover comes out with module. Remove module from cover.
Solder a Sparkfun FTDI Basic's wires to 3.3V, GND, TX, and RX pins.
Run esphome with the yaml below, select the COM port.
When ESPHome prompts to reset by driving CEN low, use a male-male dupont wire or similar to connect CEN to GND.
CEN is the fourth down on the right of the module, GND is second from right on bottom row:
![CBU module detail](wifiModuleFront.jpg "CBU module detail")
Watch ESPHome for some sign of a flash starting, then release CEN. (as of Nov 2024)
Once flashed and on your network, remove soldered wires and re-assemble!

## YAML Configuration

Here is my config, with the correct pins and a fallback WiFi for OTA in case I change the name of my wifi.
To use, you must create a secrets.yaml file next to this file when compiling, and put your secrets in there.
See this link: https://esphome.io/guides/faq.html#how-do-i-use-my-home-assistant-secrets-yaml