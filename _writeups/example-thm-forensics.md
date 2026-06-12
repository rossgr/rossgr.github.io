---
title: "TryHackMe: Example Forensics Room"
date: 2026-04-02
summary: "Memory and disk image analysis to reconstruct an attacker's timeline using Volatility and Autopsy."
platform: "TryHackMe"
difficulty: "Easy"
tags: [forensics, dfir, ctf]
---

> This is a second example writeup, included so the writeups page and tag filter have more than
> one entry to demonstrate with. Replace or remove it freely.

## Scenario

A short description of the scenario provided by the room — e.g. a workstation suspected of being
compromised, with a memory dump and disk image provided for analysis.

## Memory analysis

```bash
volatility3 -f memdump.raw windows.pslist
```

Walk through identifying the suspicious process, extracting it for further analysis, and any
network connections found via `netscan`.

## Disk analysis

Describe how Autopsy (or your tool of choice) was used to recover deleted files, browser
history, or other artefacts relevant to the investigation.

## Timeline & conclusion

Summarise the attacker's actions in chronological order and answer the room's questions,
explaining your reasoning for each.

## Lessons learned

- Key takeaway one.
- Key takeaway two.
