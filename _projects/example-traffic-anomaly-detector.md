---
title: "Network Traffic Anomaly Detector"
date: 2026-03-10
summary: "A Python tool that analyses PCAP files and flags anomalous traffic patterns using simple statistical baselines."
status: "Active"
repo_url: "https://github.com/yourusername/traffic-anomaly-detector"
demo_url: ""
tags: [python, networking, detection]
---

> This is an example project page included with the site template. Replace it with details of
> your own project, or delete it once you've added your first real one.

## What it does

A short description of the project's purpose, the problem it solves, and who it's for.

## How it works

Explain the architecture or approach at a high level — e.g. PCAP ingestion with `scapy`,
feature extraction, and a simple thresholding model to flag outliers.

```python
import pyshark

capture = pyshark.FileCapture("traffic.pcap")
for packet in capture:
    print(packet.highest_layer, packet.length)
```

## Key features

- Parses PCAP files and extracts per-flow statistics.
- Flags flows that deviate significantly from a learned baseline.
- Outputs a summary report in JSON and a simple terminal view.

## What I learned

A short reflection on the technical challenges, what you'd do differently, and any follow-up
work planned.

## Tech stack

`Python` &middot; `Scapy` &middot; `Pandas` &middot; `Click`
