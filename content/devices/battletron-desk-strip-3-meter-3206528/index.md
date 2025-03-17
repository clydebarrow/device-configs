---
board: bk72xx
date_published: '2024-12-09T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- light
- gpio
- sensor
title: Battletron Desk Strip 3 meter - 3206528
---

## General Notes

This configuration is for the [LSC Battletron Desk Strip 3 meter - 3206528](https://www.action.com/nl-nl/p/3206528/battletron-bureau-led-lichtstrip-razer-chroma/) which comes as a color changing LED strip with controller and power adapter. The LED controller itself takes it's power from a 24 volt power source, the adapter is local to each region. The led strip with original firmware works with the [razer chroma](https://www.razer.com/chroma) software suite, however compatibility with home assistant requires a [seperate integration](https://www.razer.com/chroma).
The original firmware is based upon the TuyaOS v3.3.40 based on the BS 40.00.
```text
TuyaOS V:3.3.40 BS:40.00_PT:2.3_LAN:3.5_CAD:1.0.5_CD:1.0.0 >
< BUILD AT:2023_02_15_14_08_59 BY ci_manage FOR tuyaos-iot AT bk7231n
```
Battletron is a LCS Smart Connect label.

## Teardown

The PCB top contains all functions, the bottom is mostly a ground plane, with very few traces. It's generally designed quite well. The power to the LED strip is 24V and can be turned on/off via D1/Q1, a population option. There are 72 LEDs per meter, thus 216 LEDs in total, controlled in groups of 6 LEDs. In other words, to ESPHome there are only 36 LEDs.
![LSC_LCLS26_top](LSC_OCLS26_top.jpg "LSC OCLS26 PCB Top")

## GPIO Pinout

| Pin    | Function      |
| ------ | ------------- |
| P8     | Power for LEDs|
| P16    | WS2812        |
| P26    | IR-Receiver   |
| P28    | Button        |

## Programming

To program the board it is not possible to use [tuya cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter/issues/744), as the stock firmware is built using a patched tuya SDK. Connecting a USB to serial adapter (FTDI etc) to UART1_RX, UART1_TX and GND pins (Make sure to connect USB UART RX to OCLS26 TX) and triggering a reset by connecting CEN to Ground. Power can be supplied with the supplied transformer. Flashing can then be done either directly via ESPHome or by downloading the uf2 file from a 'manual' download, and flashing it using [ltchiptool](https://github.com/libretiny-eu/ltchiptool).
> __Note:__ Not all USB adapters are equal. A PL2303 seemed not able to perform the flash, but worked fine for reading the log output on UART2_TX. A proper FTDI controller may be required.
```console
ltchiptool flash write -d /dev/ttyUSBn lsc-battletron-desk-strip-3m.uf2
```
> __Warning:__ The BK7231N is quite sensitive to trigger flash mode, and several attempts to reset the board using CEN may be required. There are no known cases where the BK7231N is unable to enter flash mode.

## Basic hardware configuration