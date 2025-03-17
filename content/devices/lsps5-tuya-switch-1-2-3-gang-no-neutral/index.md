---
board: bk72xx
date_published: '2023-12-04T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- switch
title: LSPS5 Tuya Switch 1-2-3 Gang No Neutral
---

## Overview

- Has a BK7231N chip.
- Push button wall switch
- Can be cloudcut using tuya-cloudcutter

## GPIO Pinout

#

## 1-Gang Version

| Pin    | Function           |
| ------ | ------------------ |
| GPIO26 | Button 1           |
| GPIO7  | Relay 1            |
| GPIO8  | Relay 1            |
| GPIO6  | Wifi LED indicator |
#

## 2-Gang Version

| Pin    | Function           |
| ------ | ------------------ |
| GPIO14 | Button 1           |
| GPIO24 | Button 2           |
| GPIO7  | Relay 1            |
| GPIO9  | Relay 2            |
| GPIO6  | Wifi LED indicator |
#

## 3-Gang Version

| Pin    | Function           |
| ------ | ------------------ |
| GPIO14 | Button 1           |
| GPIO26 | Button 2           |
| GPIO24 | Button 3           |
| GPIO7  | Relay 1            |
| GPIO8  | Relay 2            |
| GPIO9  | Relay 3            |
| GPIO6  | Wifi LED indicator |

## PCB

## Basic Configuration (1 gang)

## Basic Configuration (2 gang)

## Basic Configuration (3 gang)

## Decoupled mode & toggle/dimming lights using device group

Add this configuration below
#

## For lights

#

## For switch

Example using button 2 to control lights in the same device group