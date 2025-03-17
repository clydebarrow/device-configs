---
board: ESP8266
date_published: '2024-02-08T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
- gpio
- sensor
title: GL-iNet GL-S10
---

## Overview

![Product Image](image1.jpg "Product Image")

## Product description

GL-iNet, widely known for their amazing line of hackable routers (like the Mango travel router) also makes the GL-S10, a “Bluetooth IoT Gateway”.
Its a perfect little device in a small sized case of 57x57x25mm (not counting the antenna). It runs on an ESP32 with 4MB flash and 8MB PSRAM and sports Ethernet with PoE and an external antenna for better range. Gl.iNet claims coverage of 80m in an open and non-interference environment which is a bit too much, but if it can cover a quarter of that it’ll be great.
The sugar on top is that it costs only ~$24 on their [website](https://store.gl-inet.com/products/gl-s10-bluetooth-iot-gateway) or [AliExpress](https://www.aliexpress.us/item/3256803802198078.html).

## Disassembly

While you don’t need to have many tools to flash this device you will need an USB to serial adapter and I recommend the very cheap CH340G or FT232 that I’ve been using for years. You will also need some female-to-female Dupont wires and 2.54 pin headers.
If you want to go the solderless route you will only need male-to-female Dupont wires.
There are no screws or glue stopping you from opening this case. GL.iNet even left a little notch in the back plate where you will start.
![Open Here](image2.webp "Open Here")
Once opened disconnect the external antenna from the IPEX connector on the ESP32 module.
![IPEX connector](image3.jpg "IPEX connector")
Take the out PCB and prepare it for flashing.
![v1](image4.jpg "v1")![v2.1](image5.jpg "v2.1")
WARNING There are a few hardware revisions of [GL-S10](https://github.com/esphome/bluetooth-proxies/issues/19). This tutorial uses images of the v1.0 version but applies to all revisions, only the ESPHome configuration is different due to a new Ethernet chip.
Newer revisions using the IP101PHY chip have [issues with severe packet loss](https://github.com/espressif/esp-idf/issues/10540) and will likely not be reliable enough for your use.

## Flashing

There is a cluster of 9 pin holes which have the TX, RX and GND pins required for flashing. It is best to solder in some pin headers but you can do it solderless.
If you are going solderless, make very sure to constantly apply some pressure to the pins during the flashing process to establish good contact between the pads and Dupont connectors. An extra pair of hands will be helpful.
![GPIO Pinout](image6.jpg "GPIO Pinout")
Connect the wires as pictured. Do NOT connect VCC from the adapter. You will use the device’s USB power port for powering it up.
![Flashing](image7.jpg "Flashing")
Install using my [web installer for GL-S10](https://blakadder.github.io/bluetooth-proxies). Select your hardware version of GL-S10 and click “CONNECT”.
Hold down the button next to the USB port while plugging the power in to put the device in flash mode.

Select the COM port to your USB to serial adapter and click “Connect”.

Once the installer has connected to GL-S10 you need to click “INSTALL GL.INET GL-S10”. Confirm the installation.
![Install](image10.jpg "Install")![Confirm](image11.jpg "Confirm")
Wait until the device is erased, Bluetooth proxy is installed and finally the installation complete message is displayed.
![Erase](image12.jpg "Erase")![Install](image13.jpg "Install")
Clicking on “NEXT” brings you back to the initial dialogue. Now is the time to plug in the Ethernet cable. If you’re using PoE Ethernet DO NOT plug both the USB and Ethernet at once. There will be smoke and sadness! If you’re not using PoE unplug the power USB cable and plug it back.
GL-S10 will now boot in its working mode.
![Install](image10.jpg "Install")
Click “LOGS & CONSOLE” to check if the Bluetooth proxy starts properly. It should look something like this:
![Logs](image15.jpg "Logs")

## ESPHome Configuration

Configuration file was made to mimic the original functions as close as possible. That means the Power LED will always be on and Bluetooth LED turns on when connected to Home Assistant or other API endpoint. Network LED serves as a [status LED](https://esphome.io/components/status_led.html).
I2C ports are preconfigured to the CLK and DAT pin holes on the PCB which makes the GL-S10 expandable. During my testing I connected a BH1750 illumination sensor and it just worked, zero problems. I would warn against putting any temperature sensors inside the case due the the heat generated from the ESP32 and power supply.
I chose to make the Reset button not reset the device but just serve as a normal button sensor in HA.
#

## V1

#

## V2.1

## Credits

Credits to [blakadder](https://blakadder.com/gl-s10/) who originally posted this and has the yaml in his [repo](https://github.com/blakadder/bluetooth-proxies/tree/main)