---
board: esp8266
date_published: '2023-05-11T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- gpio
- sensor
title: AquaPing
---

## Overview

The AquaPing is a smart sensor that has been designed to listen for very weak, high frequency acoustics that may accompany a pressurized plumbing leak.  It is best deployed as a stand-off sensor similar to a smoke alarm -- no contact with plumbing is needed. It can also detect leaks behind walls. The target application is signaling the onset of water leaks, but users are encouraged to experiment with pressurized gases, refrigerants, and steam.
Production was funded with a campaign at [Crowd Supply](https://www.crowdsupply.com/microphonon/aquaping) where sensor boards can be purchased. This is an open-source hardware project to allow the community to verify that it is physically impossible to use this device to eavesdrop on conversations. Privacy is therefore assured.
The sensor is highly configurable. Two-way communication is via an I2C interface that is used to retrieve sensor data and also set monitoring parameters. Two interrupt lines alert to potential leaks and/or the presence of anomalous noise. Noise mitigation is addressed with mechanical, analog, and digital filtering combined with statistical analysis that takes place entirely on the edge. Design and configuration details are provided in a 9-page user manual in the linked repository.
Implementation with an ESP8266 module in Home Assistant requires the custom firmware file named *aquaping.h*. It is placed in the config/esphome/ directory and listed as an *include* in the yaml file (see below). The repository also contains a custom dashboard file with cards to display streaming data, alerts, and a control panel.