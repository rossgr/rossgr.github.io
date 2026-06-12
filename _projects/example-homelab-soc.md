---
title: "Home Lab: Segmented SOC Environment"
date: 2026-01-22
summary: "A self-hosted lab built with Proxmox and pfSense to practise network segmentation, IDS deployment and log aggregation."
status: "Ongoing"
repo_url: "https://github.com/yourusername/homelab-soc"
demo_url: ""
tags: [networking, infrastructure, blue-team]
---

> This is a second example project, included so the projects page and tag filter have more than
> one entry to demonstrate with. Replace or remove it freely.

## Overview

Describe the lab setup: hypervisor, virtual network topology, and the goals of the project
(e.g. practising segmentation, monitoring, and incident detection).

## Components

- **Hypervisor:** Proxmox VE running on a small form-factor server.
- **Firewall / routing:** pfSense, with separate VLANs for management, "corporate" and "DMZ" segments.
- **Monitoring:** Suricata for network IDS, feeding alerts into a Wazuh / ELK stack.
- **Targets:** A handful of intentionally vulnerable VMs for practising detections against.

## What I learned

Notes on configuring VLAN trunking, writing custom Suricata rules, and tuning alert noise in
the SIEM. Include any diagrams of the network topology if you have them.

## Next steps

- Add a SOAR-style automation layer for alert triage.
- Document common attack scenarios and the detections they trigger.
