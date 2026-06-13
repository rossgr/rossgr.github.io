---
layout: page
title: Contact
eyebrow: Get in touch
subtitle: "Whether it's about a project, a writeup, or an opportunity — feel free to reach out."
permalink: /contact/
---
<div class="contact-grid">
  <div>
    <h2>Find me online</h2>
    <ul class="contact-list">
      {% if site.author.email %}
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg>
        <div>
          <span class="label">Email</span>
          <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
        </div>
      </li>
      {% endif %}

      {% if site.author.github %}
      <li>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 11 .6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.6 7.9-5.9 7.9-11C23.3 5.6 18.3.5 12 .5z"/></svg>
        <div>
          <span class="label">GitHub</span>
          <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">github.com/{{ site.author.github }}</a>
        </div>
      </li>
      {% endif %}

      {% if site.author.linkedin %}
      <li>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
        <div>
          <span class="label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">linkedin.com/in/{{ site.author.linkedin }}</a>
        </div>
      </li>
      {% endif %}

      {% if site.author.tryhackme and site.author.tryhackme != "" %}
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        <div>
          <span class="label">TryHackMe</span>
          <a href="https://tryhackme.com/p/{{ site.author.tryhackme }}" target="_blank" rel="noopener">{{ site.author.tryhackme }}</a>
        </div>
      </li>
      {% endif %}

      {% if site.author.hackthebox and site.author.hackthebox != "" %}
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        <div>
          <span class="label">Hack The Box</span>
          <a href="https://app.hackthebox.com/profile/{{ site.author.hackthebox }}" target="_blank" rel="noopener">Profile</a>
        </div>
      </li>
      {% endif %}

      {% if site.author.location %}
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <div>
          <span class="label">Location</span>
          <span>{{ site.author.location }}</span>
        </div>
      </li>
      {% endif %}
    </ul>
  </div>

</div>
