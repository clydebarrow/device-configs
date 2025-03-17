---
board: bk72xx
date_published: '2025-01-05T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- switch
- gpio
- sensor
title: Tongou TO-Q-SYS-JWT DIN Rail Switch and Meter
---

## Overview

![Product Image](product-image.webp "Product Image")

## Device Overview

The [device](https://www.tongou.com/product/single-phase-din-rail-smart-meter) is a DIN-rail power meter with a relay inside. Some aspects to consider:
- This is not an IEC/EN 60898 compliant circuit breaker. The relay inside is able to break the circuit and is rated for 60A (markings on the relay, 50A rating on the device box), however, it's not meant to be used a circuit breaker - use smart MCBs instead if you need one (Tongou has smart MCBs as well);
- It only breaks the line connected to the L terminal - the N terminal is simply attached to a piece of metal spanning the body of the device;
- The relay inside is [bistable](https://en.wikipedia.org/wiki/Relay#Latching_relay) as it maintains its position without power applied. If you set the power-on mode via the MCU, the old state will be maintained until the MCU is powered on and only then will it set the state based on the policy that was set (always on, always off, restore previous);
- The MCU inside is [HC32F460](https://m.huazhoucn.com/upFiles/common/2023/04/HC32F460%20series%20Datasheet%20Rev1.3.pdf) and is accessible via UART1 of the CBU board (the same UART that is used for flashing). It runs the firmware that complies with the standard [Tuya MCU protocol](https://developer.tuya.com/en/docs/mcu-standard-protocol/MCUSDK-wifi-base?id=Kd2bxu84567gk);
- The MCU firmware actually interfaces with the metering sensors and so calibration is not required.
- Some MCU settings are only possible to configure remotely (like the prepaid switch ones), some are only possible to set via the physical buttons (like the period of time for which the measured parameters must stay above/below the limits so that the configured action gets triggered) and some are possible to set remotely and via on-device buttons (like the limits themselves).
![Device-disassembled](device-disassembled.webp "Device disassembled")
![Internal-mains-attachments](internal-mains-attachments.webp "Internal attachments to mains")
![MCU](mcu.webp "MCU HC32F460")

## UART Buffer Size Adjustment

The MCU sends Tuya data points quickly and needs 300+ bytes of UART buffer space. The CBU chip running ESPHome is not able to process incoming bytes fast enough so many data points get discarded with the default buffer size of 64 bytes.
As of [Libretiny 1.8.0](https://github.com/libretiny-eu/libretiny/releases/tag/v1.8.0) it is possible to adjust the RX buffer size using a framework option so make sure to set `LT_SERIAL_BUFFER_SIZE: 512` which is large enough for the incoming messages from the MCU.

## Flashing Instructions

The PSU inside that provides power to the control board has isolation from the mains unlike in some other products: a multimeter will show MOhms if you attach the neutral wire of the control board and the N terminal. However, avoid trying to reflash the device when it's powered from mains - this is too dangerous for your hardware and well-being.
The main board with the CBU chip is easily detachable from the main board but pins are very small (not the usual 2.54mm or 1.27mm dupont pins). When detached you can use something like PCBite hands-free probes, crafted [PIZZAbite](https://github.com/whid-injector/PIZZAbite) probes or simply various kinds of hooks (e.g. [1](https://aliexpress.com/item/1005001998124173.html) or [2](https://aliexpress.com/item/32661192484.html)).
[CBU](https://docs.libretiny.eu/boards/cbu/#pinout) needs 4 pins to be flashed:
- RX1 (connect to TX of your UART)
- TX1 (connect to RX of your UART)
- 3.3V
- GND
![CBU-board-1](CBU-board.webp "CBU board")
![CBU-board-2](CBU-board-2.webp "CBU board full")

## Disassembly and Reassembly

The rivets holding the device together seem to be DIN 7340 type B (d1 = 2mm, L ~= 16mm) hollow rivets. As the rivets are small in diameter it is not possible to remove them without drilling. Drill a `2mm` hole to remove the rivets.
In order to reassemble the device you will need a [tap](https://en.wikipedia.org/wiki/Tap_and_die) and a set of [M2.5](https://en.wikipedia.org/wiki/ISO_metric_screw_thread#Preferred_sizes) screws with a length of `15mm - 18mm` (`18mm` being the width of the device). Do it in the following order:
- Separate the two plastic parts of the device's body after drilling the rivets out;
- Drill a `2.5mm` hole in one part;
- In the other part, use the metric tap to create a [thread](https://en.wikipedia.org/wiki/Screw_thread) for an M2.5 screw.

## Data Points

Provided that the UART buffer size is increased, you should see the data points during the Tuya module initialization.
```log
  [05:08:59][C][tuya:041]: Tuya:
  [05:08:59][C][tuya:058]:   Datapoint 1: int value (value: 38)
  [05:08:59][C][tuya:058]:   Datapoint 125: int value (value: 38)
  [05:08:59][C][tuya:054]:   Datapoint 6: raw (value: 00.00.00.00.00.00.00.00 (8))
  [05:08:59][C][tuya:056]:   Datapoint 11: switch (value: OFF)
  [05:08:59][C][tuya:058]:   Datapoint 13: int value (value: 0)
  [05:08:59][C][tuya:056]:   Datapoint 16: switch (value: OFF)
  [05:08:59][C][tuya:062]:   Datapoint 101: enum (value: 0)
  [05:08:59][C][tuya:062]:   Datapoint 102: enum (value: 2)
  [05:08:59][C][tuya:062]:   Datapoint 103: enum (value: 1)
  [05:08:59][C][tuya:062]:   Datapoint 104: enum (value: 2)
  [05:08:59][C][tuya:062]:   Datapoint 105: enum (value: 0)
  [05:08:59][C][tuya:062]:   Datapoint 107: enum (value: 2)
  [05:08:59][C][tuya:062]:   Datapoint 109: enum (value: 0)
  [05:08:59][C][tuya:062]:   Datapoint 110: enum (value: 0)
  [05:08:59][C][tuya:056]:   Datapoint 112: switch (value: ON)
  [05:08:59][C][tuya:058]:   Datapoint 114: int value (value: 50)
  [05:08:59][C][tuya:058]:   Datapoint 115: int value (value: 280)
  [05:08:59][C][tuya:058]:   Datapoint 116: int value (value: 165)
  [05:08:59][C][tuya:058]:   Datapoint 118: int value (value: 1000)
  [05:08:59][C][tuya:058]:   Datapoint 119: int value (value: 2000)
  [05:08:59][C][tuya:058]:   Datapoint 120: int value (value: 10)
  [05:08:59][C][tuya:058]:   Datapoint 131: int value (value: 247)
  [05:08:59][C][tuya:058]:   Datapoint 137: int value (value: 600)
  [05:08:59][C][tuya:056]:   Datapoint 111: switch (value: OFF)
  [05:08:59][C][tuya:056]:   Datapoint 141: switch (value: OFF)
  [05:08:59][C][tuya:058]:   Datapoint 140: int value (value: 5)
  [05:08:59][C][tuya:062]:   Datapoint 142: enum (value: 2)
  [05:08:59][C][tuya:060]:   Datapoint 138: string value (value: )
  [05:08:59][C][tuya:074]:   Product: '{"p":"kmnzgh4yn8pa0lqh","v":"1.1.3","m":2}'
```
The meaning of the data points is explained in the YAML config.

## Configuration

The YAML config below has been tested with the MCU firmware `1.1.3`.