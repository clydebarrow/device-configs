---
board: esp32
date_published: '2023-04-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: MQ-7 Carbon Monoxide Sensor
---

## Overview

The MQ-7 sensor can be used for detecting carbon monoxide (CO) gas. This is done by cycling the sensor's internal heater between 5V for 60 seconds and 1.5V for 90 seconds. Most MQ-7 boards don't include a circuit to control the heater and need to be modified.

## Heater Mod

This will remove the digital output of the sensor and replace it with a digital input to control the heater of the MQ-7. There is also an OSS PCB design available under https://github.com/fablab-paderborn/mq7-adapter-board, which has the same circuit as the module after the heater mod.
#

## What you need

- MQ-7 sensor board
- Soldering iron / hot air station
- 75Ω Resistor (>160mW)
- 470Ω Resistor
- N-channel MOSFET (V_GS < 3.3V, Example: SL2310)
- Wires
#

## Steps

- De-solder the potentiometer and the dual op-amp
- De-solder the D0-LED (bottom)
- Cut the PCB traces in 2 locations (see picture below)
- Scratch off the solder mask in the marked location to provide a path to ground for the MOSFET
- Replace the 5Ω resistor on the left with a 75Ω resistor. This will provide 1.5V to the heater when the MOSFET is turned off
- Remove the 1kΩ resistor on the left and move it to its new position
- Remove the capacitor above the dual op-amp and move it to its new position
- Solder the MOSFET to the bottom center pin of the sensor and the ground pad you created
- Add the 470Ω resistor and the wires (see picture below)
- Optional: Add the D0-LED you removed earlier, but with reversed polarity. It will show the status of the heater
- Check the resistance between VCC and GND. It should be ~100Ω
![Heater Mod](mq-7-heater-mod.webp "Heater Mod")

## ESPHome Config

This config includes calibration and temperature / humidity compensation
The full heating cycle of the sensor takes 150 seconds. It can take a while until the first carbon monoxide reading appears after booting the ESP.

## Calibration

After long-time storage the manufacturer recommends running the sensor for 48-168h to let the readings stabilize.
Then it can be calibrated by placing it in clean air (outdoors) to determine the highest possible resistance. This resistance value can be added to the ESPHome config