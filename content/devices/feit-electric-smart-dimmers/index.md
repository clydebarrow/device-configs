---
board: bk72xx
date_published: '2024-11-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- dimmer
- gpio
- sensor
title: Feit Electric Smart Dimmers
---

## Overview

I purchased this at Costco in Canada in November of 2022 and then again in November of 2024. The Costco item number was 1734165.
It is hold together with screws, making it very easy to open and flash.

First, I took the unit apart. Then I soldered pin headers onto the board. I took 3v3 and gnd from a nearby ESP32 devkit and connected it to my computer.
You also need to solder a wire to the NRST pad on the back side of the board. This is the trickiest part as the pad is small. It is possible to remove the pad entirely from the board rendering it unusable so be a bit careful and if you've been working with the board for a bit and it won't take the solder or won't enter programming mode it's possible that you removed the pad.

## Dumping original firmware

Connect NRST to gnd, provide power to the board, then:
```bash
ltchiptool flash read beken-72xx ./dimmer1
```

## Installing ESPhome

I used ltchiptool's UPK2ESPHome to parse the firmware. The result is the configuration below. Put that config into a .yml file and compile the firmware:
```bash
esphome compile dimmer.yml
```
Next, write that firmware:
```bash
ltchiptool flash write .esphome/build/dimmer/.pioenvs/dimmer/esphome_2024.10.0_generic-bk7231n-qfn32-tuya_bk7231n_lt1.7.0.uf2
```