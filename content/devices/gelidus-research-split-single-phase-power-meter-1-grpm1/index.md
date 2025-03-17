---
board: esp8266
date_published: '2023-05-16T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- sensor
- gpio
- sensor
title: Gelidus Research Split Single Phase Power Meter 1 (GRPM1)
---

## GRPM1 Device Info

The PM1 board runs on an ESP12F WIFI module and is powered with 115-240V AC using an integrated isolation transformer.
ESPhome Component Docs: https://esphome.io/components/sensor/atm90e32

## Voltage

The PM1 integrates an ATM90E32 IC and is configured to measure single split phase AC lines and up to 2 AC voltages. The default configuration isolates one AC phase voltage to the ATM90E32 chip. An optional 6V AC isolation transfomer can be used to monitor both Split AC line voltages. https://www.gelidus.ca/product/pm1-reference-voltage-transformer-120vac-to-6vac-kit/
The Gelidus Split Single Phase Power Meter https://www.gelidus.ca/product/esphome-power-meter-1 is ideal for most home power distributions in North America.
This sensor is pre calibrated for the SCT013-100-50ma or SCT023-200-100ma current transformers and the integrated AC mains isolation transformer.
Note: The PM1 and two 100A/50ma SCT013's supports any 200A service, the SCT023 supports larger conductors and up to a 400A service.
Full Setup Guide: https://github.com/GelidusResearch/device.docs/blob/main/pm1.guides/PM1-Setup-Basic-120V.md

## Current

Calibrations for the **Split Single Phase Energy Meter** require **gain_pga** at ``2X``
- 100A/50mA SCT-013
- 200A/100mA SCT-023
A typical current_cal for the 100A/50ma SCT013 and the 200A/100ma SCT023 is ~15270.
There are some variables in the manufacturing of CT's, if the highest level precision is desired then the current should be calculated
and adjusted and the use of an option AC line transfomer is nessesary.
Formula: Amps Measured / Amps Reported * current_cal value in the running yaml file = adjusted value to use.
This also applies to AC voltages, however it should not normally be required.

## Active Energy

The ATM90E32 chip has a high-precision built-in ability to count the amount of consumed energy on a per-current transformer basis.
For each current transformer both the Forward and Reverse active energy is counted in watt-hours.
Forward Active Energy is used to count consumed energy, whereas Reverse Active Energy is used to count exported energy
(e.g. with solar pv installations).
The counters are reset every time a given active energy value is read from the ATM90E32 chip.

## Example

## Default config