---
board: esp8266
date_published: '2021-01-06T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- us
tags:
- dimmer
title: TreatLife DS03 Fan Controller
---

## Overview

[Amazon Link](https://amzn.to/3aOfMcG)

## Notes

This TuyaMCU requires a baud rate of 115200. This will generate a error in the log saying 9600 is requested. This is to be expected and will be ignored. Setting baud rate to 9600 will cause boot issues

## GPIO Pinout

| Pin   | Function |
| ----- | -------- |
| GPIO1 | Tuya Tx  |
| GPIO3 | Tuya Rx  |