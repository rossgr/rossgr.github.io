---
layout: page
title: About
eyebrow: About me
permalink: /about/
---
<div class="about-grid">
  <div class="about-card">
    <div class="skill-group">
      <h3>Core skills</h3>
      <ul class="skill-list">
        <li>Network Security</li>
        <li>Penetration Testing</li>
        <li>Digital Forensics</li>
        <li>Linux</li>
        <li>Python</li>
        <li>Bash</li>
      </ul>
    </div>

    <div class="skill-group">
      <h3>Tools &amp; platforms</h3>
      <ul class="skill-list">
        <li>Burp Suite</li>
        <li>Wireshark</li>
        <li>Nmap</li>
        <li>Metasploit</li>
        <li>Ghidra</li>
        <li>Docker</li>
      </ul>
    </div>

    <div class="skill-group">
      <h3>Certifications</h3>
      <ul class="skill-list">
        <li>CompTIA Security+</li>
        <li>eJPT</li>
      </ul>
    </div>
  </div>

  <div>
    <p>
      Hi, I'm {{ site.author.name }} — a postgraduate student studying {{ site.author.role | downcase }}.
      I'm interested in offensive security, network defence and digital forensics, and I use this site
      to keep a public log of the CTF challenges, labs, projects and academic work I produce along the way.
    </p>
    <p>
      Outside of my coursework I enjoy working through platforms such as Hack The Box and TryHackMe,
      contributing to small open-source security tools, and reading up on recent vulnerability research
      and threat intelligence reporting.
    </p>

    <h2>Education &amp; experience</h2>
    <ul class="timeline">
      <li>
        <span class="timeline__date">2025 — Present</span>
        <h3>MSc Cyber Security</h3>
        <p>University Name — coursework covering network security, malware analysis, secure software
          development and digital forensics. Dissertation in progress.</p>
      </li>
      <li>
        <span class="timeline__date">2022 — 2025</span>
        <h3>BSc Computer Science</h3>
        <p>University Name — graduated with a focus on systems programming, networking and applied
          cryptography.</p>
      </li>
      <li>
        <span class="timeline__date">2024</span>
        <h3>Security Internship / Placement</h3>
        <p>Brief description of role, responsibilities and what you worked on. Replace this with your
          own experience, or remove the entry if it doesn't apply.</p>
      </li>
    </ul>

    <h2>How this site works</h2>
    <p>
      This site is built with Jekyll and hosted directly on GitHub Pages — there's no separate build
      step. Writeups, projects and papers each live in their own folder as markdown files, so adding new
      content is as simple as committing a new file. See the project README for details.
    </p>
  </div>
</div>
