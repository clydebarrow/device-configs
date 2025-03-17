---
board: esp32
date_published: '2024-10-17T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- misc
title: 4moms Mamaroo 4
---

## Product description

We bought a 4moms Mamaroo 4 multi-motion baby swing for our baby and I realized it has built-in bluetooth module. Witch made me thinking if I can reverse-engineer original app to control swing using BLE client.
Luckily there already was a [project](https://github.com/chrisrosset/mamaroo-mqtt) that helped me a bit. I used some tools ([apktool](https://apktool.org/) and [jadx](https://github.com/skylot/jadx)) to decompile android apk file and understand how it works.
Finally I was able to made this config witch lets you fully control your swing using external ESP32 module. Also it should be possible to put it inside the swing and connect to power jack using step-down module.