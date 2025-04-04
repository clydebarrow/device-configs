---
board: eps32-c3
date_published: '2024-04-25T12:00:00Z'
difficulty: 1
made_for_esphome: true
project_url: https://github.com/athom-tech/esp32-configs/blob/main/athom-smart-plug.yaml
standard:
- us
tags:
- plug
title: Athom Smart Plug US V3 (PG03V3-US16A)
---

## Overview

Maker: https://www.athom.tech/
Product page: https://www.athom.tech/blank-1/esp32-c3-us-plug-for-esphome
Also on Aliexpress, available pre-flashed with ESPHome or Tasmota.

## GPIO Pinout

| Pin    | Function   |
| ------ | ---------- |
| GPIO20 | CSE7766 Rx |
| GPIO3  | Button     |
| GPIO5  | Relay      |
| GPIO6  | Led        |

## Basic Configuration

The [Latest configuration](https://github.com/athom-tech/esp32-configs/blob/main/athom-smart-plug.yaml)
can be found on Athom's GitHub repo.