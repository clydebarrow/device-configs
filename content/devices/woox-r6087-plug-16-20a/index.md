---
board: bk72xx
date_published: '2023-09-27T12:00:00Z'
difficulty: 1
made_for_esphome: false
project_url: ''
standard:
- eu
tags:
- plug
title: Woox R6087 Plug 16/20A
---

## Notes

## GPIO Pinout

| Pin  | Function          |
| ---- | ----------------- |
| P6   | Button            |
| P24  | Relay             |
| P8   | LED, inverted     |
| P7   | Status LED        |

## Board Configuration

```yaml
bk72xx:
  board: wb2s
  framework:
    version: latest
    options:
      LT_UART_DEFAULT_PORT: 1
```