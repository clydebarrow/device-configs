---
board: bk72xx
date_published: '2023-10-03T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: Beca Thermostat
---

## Overview

The Beca thermostats, also sold under other brand names such as MOES and Qiumi,
comprise a series of thermostats that support various configurations, including
water heating, water/gas boilers, and electric heating. Some models are
WiFi-enabled and can be configured using ESPHome. This allows you to set the
target temperature through the Climate component, as well as access internal
and external temperature sensors through the Sensor component.

## Hardware versions

The hardware comes in multiple versions, including offline-only models (those
without a built-in WiFi module), Zigbee-compatible models, and WiFi-enabled
versions.
For ESPHome, the WiFi version is required. Please note that WiFi cannot
typically be added to the offline variants after purchase due to hardware
limitations, so be extra careful when purchasing your thermostat.
Several vendors, such as Beca and MOES, include specific characteristics in the
product name. For instance, the WiFi version will include a "W" in its name,
like BHT-002-GCL**W**.
#

## Variants

The product name typically follows the format YYY-NNN-ZZZ (e.g. BHT-002-GCLW),
consisting of three parts: the first indicates the mode of operation (**BHT**
for heating only, **BAC** for Cooling, Heating, and Ventilation), the second
specifies the model type (e.g., 002, 006, etc.), and the third part contains
additional characteristics, including:
* **GA** - Water heating
  * Two Relays for opening and closing a valve
  * Only one Relay will be closed at the same time
  * Closing Relay PIN 1 - PIN 3 (N or L)
  * Opening Relay PIN 2 - PIN 3 (N or L)
  * Max Power: 3A
* **GB** - Electric floor Heating
  * Connect Heating between PIN 1 and PIN 2
  * Max Power: 16A
* **GC** - Water/Gas Boiler
  * One Relay - potential free (dry contact)
  * Relay on PIN 1 - PIN 2 (dry contacts)
  * Max Power: 3A
* **L**: Backlight
* **P**: Weekly programmable
* **W**: WiFi controllable
* **Z**: Zigbee controllable
* **S2**: Both internal sensor and ﬂoor external sensor
* **DB**: Dual-band (2.4 GHz/5 GHz)
#

## WiFi modules

The thermostats implement their WiFi functionality through a Tuya MCU WiFi
module, that communicates with the main MCU through a UART port.
Earlier models shipped with the Tuya TYWE3S module, which is an Espressif
ESP8266-based module. Later models, found in the wild since mid-2021, have
replaced the module with the Tuya WB3S module, which is based on the BK7231T
chip.
Before the advent of Beken BK72xx support in ESPHome, several users had success
by desoldering the WB3S and soldering pinout-compatible Espressif modules such
as the ESP12-E. **This is not required anymore**, as the thermostat has been
confirmed to work with the BK7231T support introduced with ESPHome 2023.9.0.
Be aware that the dual-band variants, such as the BHT-002-GCLW**DB**, ship with
the Tuya WBR3D module, utilizing the Realtek RTL8720DN chip. It's important to
note that as of late 2023, LibreTiny, and therefore ESPHome, do not offer
support for this particular chipset.

## Flashing

It is often possible to use [tuya-convert](/guides/tuya-convert/) for the
Espressif-based modules, and
[tuya-cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter/)
for the Beken-based modules, to flash ESPHome over-the-air, without opening up
the thermostat.
Both of these tools rely on exploiting vulnerabilities in the stock Tuya
firmware, which may be patched in newer versions, so this may or may not work
in your firmware. It is generally advisable to not install firmware updates
through the stock smartphone application (Tuya Smart/Smart Life) as this may
patch any vulnerabilities that exist in the shipped software.
It is, however, always possible to flash the module through the serial port
pins, using [esptool](https://github.com/espressif/esptool/) for the
Espressif-based modules, or
[ltchiptool](https://github.com/libretiny-eu/ltchiptool) for the Beken-based
modules, by attaching to the UART pins on the WiFi module, and providing +3.3V
and GND directly on the module or in the separate debugging holes the main PCB
has. No desoldering is required.

## Board Configuration

## See Also

* [WThermostatBeca alternative open source firmware](https://github.com/klausahrenberg/WThermostatBeca)
* [Fork of WThermostatBeca with additional information](https://github.com/fashberg/WThermostatBeca/)
* [Detailed review by SmartHomeScene including wiring diagrams](https://smarthomescene.com/reviews/moes-zigbee-smart-thermostat-bht-002/)