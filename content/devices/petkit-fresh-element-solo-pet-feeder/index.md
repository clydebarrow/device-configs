---
board: esp32
date_published: '2024-08-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: Petkit Fresh Element Solo Pet Feeder
---

## Product description

This is an automatic pet feeder for cat/dog sized pets with a proprietary cloud based app. The mainboard has an ESP32-WROOM-32D chip on it and thus can be flashed with an ESPHome firmware to be controlled locally.
The feeder comes with a US power adapter and a barrel connector if ordered from [Amazon US](https://www.amazon.com/dp/B0CFV4B369), but can be powered by any 5V power adapter with a barrel connector.
Official product [page](https://petkit.com/products/fresh-element-solo).

## Dissasembly

The feeder base has to be taken apart to access the mainboard. This requires removal of four screws at the bottom side, hidden under the rubber feet. The rubber feet have to be partially peeled off to access the screws. Once the screws are removed, gently remove the base. Quite a lot of force may be required, as the red glue (pictured in the section below) used to secure the connectors in place may be adhered to the base. A heat gun on low or a hair dryer might help to loosen up the adhesive.

## Flashing

There are two (known) revisions of the mainboard:
#

## Revision A

See the the wiring diagram for flashing below (borrowed from the Reddit [comment](https://www.reddit.com/r/Esphome/comments/v19c7p/comment/jvl91mi/)). Press and hold the right button (the wifi button) while plugging the adapter in, and release after a second or two to enter boot mode.

#

## Revision B

This board revision is covered in silicone on the front, but there are testing pads on the bottom that can be soldered to for flashing.

As with Revision A, hold the wifi button while plugging in the serial adapter and release after a couple seconds to enter boot mode.
Revision B appears to otherwise have the same pinout as Revision A.
#

## Internal pinout

| Pin    | Function                      |
| ------ | ----------------------------- |
| GPIO5  | Status LED                    |
| GPIO16 | RTTTL Buzzer                  |
| GPIO34 | Feed button                   |
| GPIO27 | Feeder motor sensor           |
| GPIO14 | Food optical sensor           |
| GPIO19 | Feeder motor control*         |
| GPIO33 | Feeder sensors control*       |
| GPIO18 | Feed forward control*         |
| GPIO17 | Reverse feed control*         |
\* *purpose of some of these pins is unclear*

## Config

The config below is intended to make the feeder tolerant to the Home Assistant failures, by supporting HA-offline schduling capabaility (but it still requires WiFi and Internet connection to synchronize time with SNTP servers, or the schdule won't work).
It exposes multiple entites that can be used to configure the feeding schedule for every hour of the day.\
User can set a number of scoops to be dispensed at particular hour of a day (if set to 0 - no food will be dispensed).
Food can be also dispensed manually either via hardware button on the right side of the feeder, or via the switch entity.\
The portion size of the manual dispense is configured separately using a slider.
Low food level threshold value allows the feeder to dispatch an `esphome.feeder_food_low` event with the message containing the firendly feeder name (handy if multiple feeders are in use), when a food sensor counts per scoop gets below the threshold.\
Feeder will also play a siren sound hourly between 7am and 10pm (7 and 22) inclusively, unless sounds are muted via dedicated switch.\
An automation can be configured to listen to the event and notify users about low food level (example is at the end).

## Automation example

*Note: currently, `esphome.feeder_food_dispensed event` is ignored to not spam the users with multiple notifications about food being dispensed multiple times a day. Only `esphome.feeder_food_low` will result in persistent notification in Home Assistant and mobile app notifications.*