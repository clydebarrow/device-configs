---
board: esp32
date_published: '2020-10-28T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: CircuitSetup Expandable-6 Channel ESP32 Energy Meter (ATM90E32)
---

## GPIO Pinout

| Pin    | Function                                                           |
| ------ | ------------------------------------------------------------------ |
| GPIO5  | Main Board CS 1 - CT1-3                                            |
| GPIO4  | Main Board CS 2 - CT4-6                                            |
| GPIO0  | Add-on Board 1 CS 1 - CT1-3                                        |
| GPIO16 | Add-on Board 1 CS 2 - CT4-6                                        |
| GPIO27 | Add-on Board 2 CS 1 - CT1-3                                        |
| GPIO17 | Add-on Board 2 CS 2 - CT4-6                                        |
| GPIO2  | Add-on Board 3 CS 1 - CT1-3 (do not use if ESP32 has on-board LED) |
| GPIO21 | Add-on Board 3 CS 2 - CT4-6                                        |
| GPIO13 | Add-on Board 4 CS 1 - CT1-3                                        |
| GPIO22 | Add-on Board 4 CS 2 - CT4-6                                        |
| GPIO14 | Add-on Board 5 CS 1 - CT1-3                                        |
| GPIO25 | Add-on Board 5 CS 2 - CT4-6                                        |
| GPIO15 | Add-on Board 6 CS 1 - CT1-3                                        |
| GPIO26 | Add-on Board 6 CS 2 - CT4-6                                        |
| GPIO18 | CLK Pin                                                            |
| GPIO19 | MISO Pin                                                           |
| GPIO23 | MOSI Pin                                                           |

## Main Board Only Configuration

## Main Board + 1 Add-on Board Configuration