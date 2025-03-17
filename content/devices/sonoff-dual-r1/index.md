---
board: esp8266
date_published: '2023-04-13T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- global
tags:
- relay
title: Sonoff Dual R1
---

## Overview

This is a DIY solution, and you will need to have some knowledge of
electrical wiring and enough capabilities to do this work safely.
The goal is to replace the light switch with one that
can be controlled by home assistant, whilst retaining the ease of use of
a standard light that would also continue to work if the network went
down, or Home Assistant failed etc.
Use a _retractive_ style light switch. That is one that is spring
loaded and so always returns to the ``off`` position. It's effectively
a push button, that looks like a light switch.
We will be using GPIO4 and GPIO14 for the two retractive switches,
again they will both short to 0V when the switch is clicked.

The R1 version of the Dual controls the relays via the UART:
The logger baud_rate: 0 is required to make sure the logged does not
send any data over the UART or it would mess with the relays.