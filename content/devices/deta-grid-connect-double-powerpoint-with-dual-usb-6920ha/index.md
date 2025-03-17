---
board: bk72xx
date_published: '2023-02-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- au
tags:
- plug
title: Deta Grid Connect Double Powerpoint with Dual USB 6920HA
---

## Deta Grid Connect Smart Double Touch Power Point With Dual USB

Manufactured by [Deta](https://detaelectrical.com.au/product/deta-grid-connect-smart-double-touch-power-point-with-dual-usb/)
this is a AU/NZ standard wall outlet/powerpoint with USB charging ports based on the Beken BK7231T module. Now that ESPHome natively supports BK72XX microcontrollers, you can also put ESPHome directly onto the device.

## Getting it up and running

#

## Using Cloudcutter

[Cloudcutter](https://github.com/tuya-cloudcutter/tuya-cloudcutter) is a tool designed to simplify the process of flashing Tuya-based devices. It allows you to bypass the need for physically opening the device and swapping out chips. By leveraging the cloud APIs, Cloudcutter enables you to flash the firmware remotely, making it a convenient and less intrusive option. Follow the instructions on the [Cloudcutter GitHub repository](https://github.com/tuya-cloudcutter/tuya-cloudcutter) to use this method for flashing your Deta 6920HA device.
#

## Disassembly

If you can't or don't wish to use Cloudcutter, you can flash directly to the outlet with USB to serial adapter.
To disassemble the outlet in order to flash, remove the front plastic face (secured by clips on each side),
then remove the two exposed screws. Remove the clear panel and then carefully remove the small thin PCB
that sat underneath the panel.

## GPIO pinout

| GPIO # |   Component   |
|:------:|--------------:|
| P8     |    Status LED |
| P10    |     Sensor Rx |
| P7     |      Button 1 |
| P24    |      Button 2 |
| P6     |       Relay 1 |
| P26    |       Relay 2 |