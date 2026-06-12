---
title: "HTB: Example Box — Initial Foothold to Root"
date: 2026-05-18
summary: "Enumeration, exploitation of a vulnerable web app, and privilege escalation via a misconfigured SUID binary."
platform: "Hack The Box"
difficulty: "Medium"
tags: [web, linux, privilege-escalation, ctf]
---

> This is an example writeup included with the site template. Replace it with your own content,
> or delete it once you've added your first real writeup.

## Overview

A short summary of the machine or challenge: what the target was, what the overall path to root
looked like, and any standout techniques used.

## Enumeration

Start with a port scan to identify open services.

```bash
nmap -sC -sV -oN scans/initial.nmap 10.10.10.10
```

```text
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1
80/tcp open  http    nginx 1.18.0
```

Browsing the web application reveals a login form and a hidden endpoint discovered via
directory brute-forcing.

```bash
gobuster dir -u http://10.10.10.10 -w /usr/share/wordlists/dirb/common.txt -x php
```

## Gaining a foothold

Describe the vulnerability you identified (e.g. an authentication bypass, file upload, or
command injection) and how you exploited it to get a reverse shell.

```bash
curl -s http://10.10.10.10/upload.php -F "file=@shell.php"
```

```bash
nc -lvnp 4444
```

## Privilege escalation

Once on the box, enumerate for misconfigurations.

```bash
find / -perm -4000 -type f 2>/dev/null
```

Explain what you found and how it was abused to escalate to root, including the final
exploitation steps and the contents of the root flag (redacted).

## Lessons learned

- Key takeaway one — e.g. importance of input validation on file uploads.
- Key takeaway two — e.g. auditing SUID binaries as part of a post-exploitation checklist.
- Tools used: `nmap`, `gobuster`, `curl`, `nc`.
