---
board: esp32dev
date_published: '2024-10-31T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
- gpio
- sensor
title: Dingtian DT-R016
---

## Product description

This is a 16-relay board with an ESP32.
I bought it from: https://it.aliexpress.com/item/1005007002132841.html?spm=a2g0o.order_list.order_list_main.17.450b3696cHQW0O&gatewayAdapt=glo2ita
When ordering this board ask for relay board with test firmware, otherwise the ESP32 will be locked.
Use a USB-TTL adapter to flash EspHome the first time.
![Debug Port Pinout](https://github.com/user-attachments/assets/0c2b63b9-149f-4e11-9a80-4a2f48706a97)
![Debug Port Physical Pins](https://github.com/user-attachments/assets/4b3101df-b3f1-412c-a6d6-777ade8fcffc)
![USB-TTL Adapter](https://github.com/user-attachments/assets/c703cc66-06ec-4772-840e-2bc28bbbc7c6)
**Connect IO0 to GND** (I used one of the screwterminals)
Connect 3v3 on the board and on the TTL adapter
Connect GND on the board and on the TTL adapter
Connect Rx on the TTL adapter to IO1 on the board (Tx)
Connect Tx on the TTL adapter to IO3 on the board (Rx)