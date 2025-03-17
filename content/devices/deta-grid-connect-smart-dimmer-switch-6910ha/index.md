---
board: bk7231t
date_published: '2024-09-18T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- dimmer
title: DETA Grid Connect Smart Dimmer Switch 6910HA
---

## General Notes

The DETA [Smart Dimmer Switch 6910HA](https://www.bunnings.com.au/deta-white-grid-connect-smart-touch-single-dimmer_p0237206) This device comes with a Tuya WB3S chip and there are now two methods to make this device compatible with ESPHome:
1. **Use [Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) to flash the device.**
2. **Swap out the chip with a compatible one.**
#

## Using Cloudcutter

[Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) is a tool designed to simplify the process of flashing Tuya-based devices. It allows you to bypass the need for physically opening the device and swapping out chips. By leveraging the cloud APIs, Cloudcutter enables you to flash the firmware remotely, making it a convenient and less intrusive option. Follow the instructions on the [Cloudcutter GitHub repository](https://github.com/tuya-cloudcutter/tuya-cloudcutter) to use this method for flashing your 6910HA device.  
Use profile 1.1.9 bk7231s_common_iot_config_ty
#

## Swap chip

replacing the WB3S chip with a ESP-12F chip and adding a 10k pull-down resister on GPIO15 as WB3S does not require it and omits it from the board.
There's useful guide to disassemble and serial flash these switches [here.](https://blog.mikejmcguire.com/2020/05/22/deta-grid-connect-3-and-4-gang-light-switches-and-home-assistant/) After that, you can use ESPHome's OTA functionality to make any further changes.
#

## ESP-Based Pinout

| Pin    | Function      |
| ------ | ------------- |
| GPIO1  | UART TX       |
| GPIO3  | UART RX       |
| EN     | 10k pull-up   |
| RES    | 10k pull-up   |
| GPIO15 | 10k pull-down |
#

## BK72XX-Based Pinout

| Pin | Function |
| --- | -------- |
| RX1 | Tuya Rx  |
| TX1 | Tuya Tx  |

## Dimmer Configuration

The dimmer requires the Tuya MCU and will expose 4 datapoints
1. = Switch
2. = Dimmer setting 0-1000 This is the light setting
3. = Min Dimmer setting 0 - 1000 When pressing the button this is the lowest the dimmer will go to
4. = Countdown timer in seconds to turn off the light ie 600 = 10Min