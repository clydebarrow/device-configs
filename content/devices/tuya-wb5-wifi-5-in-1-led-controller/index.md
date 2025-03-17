---
board: bk72xx
date_published: '2023-10-29T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- Light
- gpio
title: Tuya WB5 WiFi 5 in 1 LED Controller
---

## Overview

This is a LED controller that can work with single color, CCT, RGB, RGBW and RGBWW led strips. Its sold on aliexpress by a few diferent sellers there are also a few varients with screw terminals that may or may not work.([exact one I got](https://www.aliexpress.com/item/1005003081976104.html?spm=a2g0o.order_list.order_list_main.41.3d091802QzgWWc)) It can be controlled via a rf remote or wifi. The controller is based on a Tuya CB3L(BK7231N) and a Tuya mcu. This means that the leds are not directly controlled by the BK7231N which you can flash with ESPHome. There are also varients with a Tuya CB3S but this controller is identical except for a few more gpio pins. This controller supports bluethooth but it is not yet implemented into ESPHome.

## Setup

There are 2 ways of flashing ESPHome on to this controller.
- [Tuya Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) (No disassembly required, follow guide on their github page.) **IMPORTANT: Read step 13 of manual flashing instructions!!!**
- Manual flashing (Disassembly required, soldering required depending on your tools and skillset.)

## Pinout

| Pin | Function                                                                             |
| --- | ------------------------------------------------------------------------------------ |
| GND | Ground connection of the controller.                                                 |
| 3V3 | 3.3V input to power the controller.                                                  |
| RX1 | Transmit pin connected to the Tuya MCU, also used for programming.                   |
| TX1 | Recieve pin connected to the Tuya MCU also used for programming.                     |
| EN  | The Enable pin, connect momentaraly to ground to put the controller in program mode. |

## Manual Flashing guide

1. Get a UF2 file from the ESPHome Home Assistant addon. first create a new device(Just select ESP32 The yaml file below changes the controller to bk72xx) then copy the yaml file coresponding with your led strip in the edit window and lastly click install(Top Right) and manual download the file as a UF2 package. **IMPORTANT: Change the api encription key with a random genarated key from [here](https://esphome.io/components/api.html#configuration-variables), change the ota password if you want to use ota and change the ap password if you want to have a fallback ap.**
2. Get a USB to serial converter that can work with 3.3V. Example:

3. Set the jumper to 3.3V if you have one (image is set to 5V).
4. Connect the the pins of the converter to the controller as follows. (see pinout)
   - GND -> GND
   - VCC -> 3.3V
   - TX -> RX
   - RX -> TX
   - DTR -> EN(optional)
   This can be done by soldering wires to the controller, using a spring loaded tool like a test probe hook
   ![test probe hook](probe-hook.jpg "test probe hook")
   ![test probe hook](Probe-Test-Lead.jpg "test probe hook")
   here
   ![pins](pins.jpg "pins")
   or (what i use (verry expensive)) PCBite SP10 probes from the top.
   ![usb serial adapter](pcbite.jpg "usb serial adapter")
   You can manualy tap the EN pin with a jumper wire if you use probes.
5. Connect the serial converter to a computer.
6. Download and launch [Itciptool](https://github.com/libretiny-eu/ltchiptool)
7. Select the flasshing tab.
8. Select the correct device port.
9. Load the UF2 file you downloaded in step 1 as input file.
10. Tick the Auto-detect advanced parameters box.
11. Click start. (If blue text apears in the black box at the bottom make sure everithing is connected properly and if you did not connect the EN pin you have to connect the EN pin to GND for a second while GND and 3V3 are stil connected. You can just touch a wire to the pins by hand.)
12. Now it should write the program and connect to your wifi network. If not, connect to the hotspot it created and setup your wifi manualy.
13. **To make sure the controller will function correct press the button on the controller to cycle the output mode to the correct type of ledstrip you have connected. It's not dangerous to set the mode wrong, but if not configured correct the controller will not function as expected!!! See the manual you got with the controller or the image below to change the mode.** ![Outout Modes](Outout-Mode.jpg "Outout Modes")

## YAML configurations for the different output modes

#

## Single Color

#

## CCT

#

## RGB

#

## RGBW

#