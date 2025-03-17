---
board: esp32
date_published: '2024-11-16T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- sensor
title: Gelidus Research Energy Collector 1 (GREC1)
---

## GREC1 Device Info

The GREC1 is a multi purpose interfacing device specifically designed for collecting data on energy meters. Impulse interfaces are provided for glow and wire impulse meters. RS485 and RS232 are also included for meters that send serial data such as MODBUS. The serial interfaces can also be used for other use cases where the distance proximity is around 5-8 meters. Longer distances are not recommended for the design. The device is available in two configurations which are directly AC powered with NEMA 5-15 plug or USB powered. We make a USB Mini version which includes a cable or a USB-C version without a cable.
Available from [https://www.gelidus.ca/](https://www.gelidus.ca/)
Inside the enclosure.
![GREC1 PCB](grec1.top.bare.jpg)
- 40 x 80 mm PCB
- Direct USB ESP programming with a CH340 serial interface.
- Powerful ESP32S Dual Core 240Mhz 4MB Flash, BLE and WiFi module!
- PCB layout strictly follows ESP antenna specifications providing excellent WiFi range.
- 8 Pin Quick connects for collectors, Photo Diode, Wired, RS232, RS485.
- Powered directly with US AC plug receptacle blades on the AC model (120 VAC).
- USB model can be USB powered or with 3.3v via an un-populated 5 pin header.
- Follows UL/CSA specifications.
- Optional 1 Meter Photo Detection sensor assembly.
- 3D printed protective enclosure.

## Interface Circuit Connections

## Photo Sensor Assembly

## GREC1 YAML Example

## GREC1 Connections

J2 Pinouts
![Connections](grec1.j2.connection.pins.jpg)
- Pin 1 - Impulse Photo Diode +
  This connection should be provisioned using a single wire core cable with a stranded shield, the photo diode anode should be soldered to the core wire and cathode grounded with the shield. This signal feeds into the integrated LM393 comparator.
- Pin 3 - Impulse Wired +
  This is a digital logic input, it is zener clamped to limiting it at +3.3v intermally, the signal should be wired along with a ground for reference.
- Pin 5 & 6 - RS232-TX/RX
  These connections are Standard EIA signal levels and should have a ground reference when used. See the DB Connector Reference for commonly used pins.
- Pin 7 & 8 - RS485-A/B (Optionally RS232 with JP1 and JP2)
  These pins are also standard EIA levels but do not have components supporting the maximum RS485 1200M distances. Keep these to short distances 5-10 meters. It’s recommended to use twisted pair lines. Since these connections are typically used on serial busses it should have softweare flow control enabled for ESPHome components. Specifically TX control must be enabled and this is configured in a components YAML definition.
- Pin 7 & 8 - RS232 enable JP1 and JP2 position 1-2 soldered.
  These are optionally setable as RS232 when RS485 is not required. This provisons addition flow control capability e.g. EIA level input and output DSR/RTS etc.
| Name                | Abbreviation | Direction | DB-25 pin | DE-9 pin |
| ------------------- | ------------ | --------- | --------- | -------- |
| Transmitted Data    | TxD          | Out       | 2         | 3        |
| Received Data       | RxD          | In        | 3         | 2        |
| Request To Send     | RTS          | Out       | 4         | 7        |
| Clear To Send       | CTS          | In        | 5         | 8        |
| Data Terminal Ready | DTR          | Out       | 20        | 4        |
| Data Set Ready      | DSR          | In        | 6         | 6        |
| Data Carrier Detect | DCD          | In        | 8         | 1        |
| Signal Ground       | G            | Common    | 7         | 5        |
More to see @ https://www.gelidus.ca