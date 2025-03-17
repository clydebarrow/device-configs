---
board: esp8266
date_published: '2023-11-30T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- sensor
- gpio
- sensor
title: Shelly Uni
---

## Notes

Shelly UNI is the smallest universal module with two available digital inputs and potential-free outputs, providing endless functionalities.
- 2 digital inputs
- 2 potential-free outputs
- ADC can measure any voltage from 0 to 30 VDC
- supports DS18B20 temperature sensors or a DHT22 humidity and temperature sensor, ...
![device](/shelly_uni_625x625.webp "Device picture")

## GPIO Pinout

|Pin| GPIO   | Function  | Wire   |
| - | ------ | --------- | ------ |
|   | GPIO00 | Red LED   |        |
| 1 |        | VAC, VDC+ | red    |
| 2 |        | VAC, VDC- | black  |
| 3 | GPIO17 | ADC Input | white  |
| 4 |        | 3.3V      | yellow |
| 5 | GPIO05 | Sensor    | blue   |
| 6 |        | GND       | green  |
| 7 | GPIO12 | Input 1   | orange |
| 8 | GPIO13 | Input 2   | brown  |
|   | GPIO15 | Output 1  |        |
|   | GPIO04 | Output 2  |        |
|   | GPIO14 | ADC Range |        |

## ADC range Selector

ADC Input (GPIO17) have two ranges (0 - 15 or 0 - 30V), selectable by GPIO14.
If you configure GPIO14 as switch and turn it on you get 30V input range.
Tested by [Protoncek](https://community.home-assistant.io/u/Protoncek).
Device return pure ADC readings, so need to multiply to get actual voltage.
Linear approximation looks more or less acceptable.
Possible multiply factors: 14.64 on 15V range, 30.64 on 30V range.