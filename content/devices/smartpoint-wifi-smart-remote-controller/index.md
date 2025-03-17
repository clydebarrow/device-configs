---
board: esp8266
date_published: '2021-09-02T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Smartpoint Wifi Smart Remote Controller
---

## Overview

Manufacturer: [SmartPoint](https://www.smartpointco.com/product-page/smart-wifi-remote-control)
Available at:
- [Walmart](https://www.walmart.com/ip/Smartpoint-Wifi-Smart-Remote-Controller-Compatible-with-Alexa-and-Google-Assistant-Hands-Free-Voice-Control/824016383)
- [Amazon](https://amzn.to/3n1c2LD)

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO4  | External Blue LED           |
| GPIO5  | IR Receiver (inverted)      |
| GPIO13 | Underside Button (inverted) |
| GPIO14 | IR Blaster Array            |

## Flashing (Older Devices)

On older models of this device, [tuya-convert](https://devices.esphome.io/guides/tuya-convert/) should be able to flash this device, but I am unsure how old the device needs to be for this method to still work.

## Flashing (Newer Devices)

On newer patched devices (likely yours), [tuya-convert](https://devices.esphome.io/guides/tuya-convert/) will not work. In order to flash, gain access to the [TYWE3S](https://tasmota.github.io/docs/devices/TYWE3S/) board by prying off the top of the device.
- Solder onto the silkscreen labeled pads to the corresponding serial pins - 3v3, TX, RX, and GND.
- Ground GPIO0 during boot to enter flashing mode (located below the RDX pin). You can release the grounding after booting.
- Flash using any of the ESPHome flashing methods.
> Note that the Tasmota flashing documentation for the  [TYWE3S](https://tasmota.github.io/docs/devices/TYWE3S/) specifies that the TX and RX pins are reversed. I did not find that to be true and was able to follow the silkscreen on the board.

## Disassembly

- There are 6 clips holding the semi-transparent plastic top dome to the base (red arrows). The top can be removed by disengaging each of these clips.
- There are two holes along the front (where the logo faces outwards) and back of the device that can be used to create leverage when prying the top from the clips. The hole on the back is slightly too small for the black iFixit spudger.
- The bottom plastic is easily marred, even when using the plastic iFixit tools, and the clips may require substantial force to move. The easiest method of removal is to use the metal iFixit spudger to create enough space (using the 50mm hole, pictured) to use iFixit picks to shimmy around the edge and release each clip.
- (Optional) After removal of the top dome, the [TYWE3S](https://tasmota.github.io/docs/devices/TYWE3S/) ESP8266 chip can be accessed by unscrewing 3 black Phillips #1 screws (blue arrows) to disconnect the main board from the button of the outer covering.