---
board: ESP8266
date_published: '2023-12-17T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- sensor
- sensor
title: Inkbird IAM-T1
---

## Overview

The [Inkbird IAM-T1](https://inkbird.com/pages/iam-t1) is an air quality
sensor that measures CO₂ concentration, temperature, relative humidity
and air pressure.

An ESPHome running on an ESP32, which provides BLE, can read the values
from the sensor.

## Quickstart

Use the configuration below to pull data from the sensor over BLE. You
will need to find the bluetooth MAC address of your IAM-T1 sensor. This
can be done using the [NRF Connect](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-mobile)
app.
You can change the name and id fields where appropriate to suit your
device(s).