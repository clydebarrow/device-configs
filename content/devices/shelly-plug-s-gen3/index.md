---
board: esp32c3
date_published: '2024-12-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
- gpio
- sensor
title: Shelly Plug S Gen3
---

## Overview

Generation 3 of Shelly Plug-S
At this moment there is NO way to Flash it OTA. You need to open the Plug and use UART!
As always, first take a dump!
```esptool -b 115200 --port COM11 read_flash 0x00000 0x800000 shelly_plug_s_gen3.bin```

## UART Pinout

| Pin      | Colour       |
| -------- | ------------ |
| Reset    | Brown        |
| 3v3      | Red          |
| RX       | Blue         |
| TX       | Yellow       |
| BootSEL  | Purple       |
| GND      | Black        |

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO3  | Internal Temperature        |
| GPIO4  | LED WS2812                  |
| GPIO5  | Relay                       |
| GPIO6  | BL0942 TX                   |
| GPIO7  | BL0942 RX                   |
| GPIO18 | Button                      |

## Open the device

This little seal need to drill open, best you use a prick punch with an M3.5-M4 Drill.
![Drill](../Shelly-Plug-S-Gen3/drill_1.png "Drill M3.5 or M4")
When the seal is cracked open, you need a M2 drill, and drill in center, just a little.
![Drill](../Shelly-Plug-S-Gen3/drill_2.png "Drill M2")
Now take a tapered punch and press the seal out. The whole grounding receptacle will come out.
We need some hot-air (~300°C) and 5 of the iFixit triangle-plastic, there are 3 spots with glue.
Heat them up, and try placeing the plastic around.
![Open it up](../Shelly-Plug-S-Gen3/open_1.png "create a gap")
You will get a little gap, take anohter plastic and g et betweet the withe and transparent plastic, and make a circle.

After 2 rounds you can easly take it out.