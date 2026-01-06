---
layout: default
title: Proxydale | Blood on the Clocktower Variant
description: A compact 4–6 player Blood on the Clocktower experience that keeps the base-game feel through proxy chairs.
rules_download:
  title: Rules
  subtitle: Core PDF
  description: Complete ruleset for running Proxydale.
  links:
    - label: Download PDF
      url: /downloads/rules/Proxydale_Rules.pdf
scripts:
  - title: Welcome to Proxydale
    subtitle: Script
    description: Straightforward intro script focused on orientation and tempo.
    links:
      - label: JSON
        url: /downloads/scripts/welcome-to-proxydale/Welcome_to_Proxydale.json
      - label: PDF
        url: /downloads/scripts/welcome-to-proxydale/Welcome_to_Proxydale.pdf
  - title: Revenge of the Seat
    subtitle: Script
    description: Trickier layout centered on seat control and vote pressure.
    links:
      - label: JSON
        url: /downloads/scripts/revenge-of-the-seat/Revenge_of_the_Seat.json
      - label: PDF
        url: /downloads/scripts/revenge-of-the-seat/Revenge_of_the_Seat.pdf
  - title: Final Delegation
    subtitle: Script
    description: High-information script with late-game pivots and delegation risks.
    links:
      - label: JSON
        url: /downloads/scripts/final-delegation/Final_Delegation.json
      - label: PDF
        url: /downloads/scripts/final-delegation/Final_Delegation.pdf
---

<section class="hero" id="hero">
  <div class="container hero-grid">
    <div class="panel">
      <p class="subdued" style="letter-spacing:0.08em;text-transform:uppercase;">Small-table variant</p>
      <h1>PROXYDALE</h1>
      <p><em>“An unofficial small-player variant for Blood on the Clocktower (4–6 players)”</em></p>
      <p>Designed for groups that often end up with 4–6 players and want a full base-game feel (not Teensyville). Empty chairs act as proxy players so you keep base structure, information density, and voting stakes.</p>
      <div class="cta-row">
        <a class="button primary" href="#downloads">Download Rules (PDF)</a>
        <a class="button" href="#downloads">View Scripts</a>
      </div>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <div class="panel">
      <h2 class="section-title">What is Proxydale?</h2>
      <p class="subdued">Proxydale keeps the original Blood on the Clocktower cadence by treating empty chairs as proxy players. Townsfolk can target them, demons can strike them, and votes feel consequential even with four people at the table. Information stays dense while attribution remains uncertain.</p>
    </div>
  </div>
</section>

<section id="rules">
  <div class="container">
    <div class="panel columns">
      <div>
        <h2 class="section-title">Rules in a Nutshell</h2>
        <p class="subdued">A quick sweep of the core procedure. The PDF contains the full rules and clarifications.</p>
      </div>
      <div class="list-grid">
        <ul>
          <li><strong>Setup:</strong> Seat the Storyteller, 4–6 players, and enough empty chairs to reach 7–8 total seats.</li>
          <li><strong>Empty chairs:</strong> Each empty chair is a proxy with a face-down token and a token reference the Storyteller tracks.</li>
          <li><strong>Proxy system:</strong> Players may target proxies for abilities; proxies resolve via Storyteller adjudication.</li>
        </ul>
        <ul>
          <li><strong>Voting & majority:</strong> Majority counts proxies. Proxies abstain unless explicitly instructed; tie rules follow the base game.</li>
          <li><strong>Chair nominations:</strong> Players can nominate a seat; the Storyteller chooses which living occupant of that seat (player or proxy) resolves.</li>
          <li><strong>Evil veto:</strong> Evil team may veto one proxy assignment per game; clarify loudly when it happens.</li>
        </ul>
      </div>
      <div class="rune-divider"></div>
      <p class="subdued">Clarifications cover proxy deaths, handling drunk/poisoned interactions, information echoes across chairs, and Fabled options for table balance.</p>
    </div>
  </div>
</section>

<section id="downloads">
  <div class="container">
    <div class="panel">
      <h2 class="section-title">Downloads</h2>
      <p class="subdued">Keep the filenames as listed for easy table sharing. Files below are ready for GitHub Pages hosting; replace the placeholders when you have final PDFs/JSON.</p>
      <div class="download-section">
        {% include download-card.html title=page.rules_download.title subtitle=page.rules_download.subtitle description=page.rules_download.description links=page.rules_download.links %}
        <div class="rune-divider"></div>
        {% for script in page.scripts %}
          {% include download-card.html title=script.title subtitle=script.subtitle description=script.description links=script.links %}
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section id="design">
  <div class="container">
    <div class="panel columns">
      <div>
        <h2 class="section-title">Design goal</h2>
        <p class="subdued">Proxydale is tuned for experienced groups who want dense info and uncertain attribution at a small table.</p>
      </div>
      <div>
        <ul class="subdued">
          <li>Information density stays high while attribution stays foggy.</li>
          <li>Voting matters: empty chairs keep majority pressure honest.</li>
          <li>Storyteller-forward: expect proactive framing, reminders, and tone setting.</li>
          <li>Optional Fabled support (Sentinel, Fibbin, Gardener) for balance and pacing.</li>
          <li>Built for expansion: add rules pages, changelog, and more scripts without redesign.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
