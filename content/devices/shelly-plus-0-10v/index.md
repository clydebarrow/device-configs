---
board: esp32
date_published: '2024-05-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- uk
- us
- eu
- au
tags:
- dimmer
title: Shelly Plus 0-10V
---

## GPIO Pinout

| Pin    | Function                    |
| ------ | --------------------------- |
| GPIO0  | LED (Inverted)              |
| GPIO4  | Switch 1 input              |
| GPIO18 | Switch 2 input              |
| GPIO25 | Button (Inverted, Pull-up)  |
| GPIO26 | PWM (Inverted)              |
| GPIO32 | NTC                         |
The Shelly Plus 0-10V is based on the ESP32-U4WDH (Single core, 160MHz, 4MB embedded flash).
The board is similar to the Shelly Plus 1 in pinout, but with an extra switch input and the PWM output instead of the relay.
**Please Note: this device is a 0-10V SINKING controller for lightning (to be attached to a transformer, for example): don't expect to read 0-10V on the PWM output.**
Please calibrate the NTC, the value below is just a rough estimate!
Credit and thanks to
- https://templates.blakadder.com/shelly_plus_0-10v_dimmer.html