---
layout: default
title: Proxydale | Blood on the Clocktower Variant
description: Unofficial 4–6 player Blood on the Clocktower variant that keeps the full-game structure through proxy chairs.
rules_download:
  title: Proxydale Rulebook
  subtitle: Rules
  description: Complete ruleset for running Proxydale-based game sessions.
  links:
    - label: PDF (English)
      url: /downloads/rules/PROXYDALE_Rules_v0.2_EN.pdf
    - label: PDF (Italian)
      url: /downloads/rules/PROXYDALE_Rules_v0.2_IT.pdf
scripts:
  - title: Welcome to Proxydale
    subtitle: Script
    description: Specifically designed to guarantee an experience similar to the standard game without overburdening the Storyteller. All characters can be easily managed via proxy.
    links:
      - label: JSON
        url: https://www.botcscripts.com/script/9720/1.0.0/download
      - label: PDF
        url: https://www.botcscripts.com/script/9720/1.0.0/download_pdf
      - label: Translations & more
        url: https://www.botcscripts.com/script/9720
  - title: Revenge of the Seat
    subtitle: Script
    description: Designed to introduce more complex strategies by leveraging the specific mechanics of this version. Recommended after at least 5–10 games with the previous script.
    comingsoon: Coming soon
  - title: Final Delegation
    subtitle: Script
    description: A true brain-teaser built around the synergies of some experimental characters. Recommended after at least 10–20 games with the previous scripts.
    comingsoon: Coming soon
---

<section class="hero" id="hero">
  <div class="container hero-grid">
    <div class="panel">
      <p class="subdued" style="letter-spacing:0.08em;text-transform:uppercase;">Blood on the Clocktower</p>
      <h1>PROXYDALE</h1>
      <p><em>An unofficial small-player variant for Blood on the Clocktower (4–6 players)</em></p>
      <p>Blood on the Clocktower is a social deduction game of secrets, logic, and deception, in which players take on unique roles with special abilities while a Storyteller guides the game and the narrative. It is published by The Pandemonium Institute.</p>
      <div class="hero-meta">
        <div><strong>Official site:</strong> <a href="https://bloodontheclocktower.com/">bloodontheclocktower.com</a></div>
        <div>Blood on the Clocktower is © The Pandemonium Institute. All rights reserved.</div>
      </div>
      <p>Proxydale is a homebrew variant designed to make Blood on the Clocktower playable with only 4, 5, or 6 players, while still preserving the structure and feeling of a full base game (not Teensyville):
        a variant specifically designed to support longer arcs, layered information, and the broader strategic space of the standard game.
      </p>
      <div class="cta-row">
        <a class="button primary" href="#downloads">Download Rules and Scripts (PDF & JSON)</a>
      </div>
    </div>
  </div>
</section>

<section id="overview">
  <div class="container">
    <div class="panel">
      <h2 class="section-title">Overview</h2>
      <p class="subdued">
        Proxydale is an unofficial variant of Blood on the Clocktower designed to make the game fully playable with only 4 to 6 players, without sacrificing the structure, depth, and long-term deduction of a standard session.
Instead of reducing the game to fit a smaller group, Proxydale expands it: empty chairs are added to the circle to represent full characters in play, generating information, abilities, and hidden interactions.
      </p>
      <p class="subdued">
These “proxy characters” are managed through a unique proxy system, preserving the information flow of larger games while obscuring its exact source. The result is a darker, more layered experience, where clues exist, but certainty is rare, and deduction becomes a matter of weaving invisible threads rather than trusting visible roles.</p>
      <p class="subdued">The idea behind this project came from a small group of Blood of the Clocktower players experimenting with ways to run meaningful, deduction-heavy sessions at very low player counts, without stripping the game down or fundamentally changing its identity.</p>
    </div>
  </div>
</section>

<section id="rules">
  <div class="container">
    <div class="panel columns">
      <div>
        <h2 class="section-title">Rules in a nutshell</h2>
        <p class="subdued">Use these highlights as a quick reference. The PDF contains the full rules, clarifications, and Storyteller guidance.</p>
        <ul class="readable-list">
          <li><strong>Setup:</strong> Increase the circle to 7, 8, or 9 total seats by adding empty chairs. Characters are assigned as in a normal game, with the only restriction that at least one Good and one Evil character must belong to real players (otherwise, re-deal or use Gardener to fix). Empty chairs receive characters and alignments like normal players. Recommended Fabled: Sentinel, Fibbin, Gardener.</li>
          <li><strong>Empty chairs:</strong> Empty chairs represent full characters in play, but they are not players. They can be killed, poisoned, drunk, etc.; can be nominated and executed; do not speak, vote, or nominate directly.</li>
          <li><strong>Proxy system:</strong> Each empty chair’s ability is handled through a proxy player of the same team, chosen by the Storyteller when needed (alive or dead). Night abilities are resolved normally, with the proxy receiving the information or making choices. Day or mixed abilities are assigned at the end of the night so the proxy can use them during the day. The proxy player is told which character activated and what information they learned and/or what action they must take. The proxy is never told which chair the character belongs to. Good proxies only know the character exists somewhere among the living chairs. Evil proxies can often deduce or know the location from the initial evil wake-up.</li>
          <li><strong>Voting and majority:</strong> Empty chairs do not vote and do not count toward majority. Only living real players are used to calculate the votes needed for execution.</li>
          <li><strong>Nominations involving chairs:</strong> Chairs cannot nominate directly. A dead player may ask a living chair to nominate on their behalf (once per day, clearly stated, and not targeting itself). After such a request, before voting begins, any Evil player (alive or dead) may publicly veto the nomination. The veto only works if both the chair and the vetoing player are Evil. If valid, the nomination is cancelled, with the obvious drawback that both are publicly revealed as Evil.</li>
          <li><strong>Clarifications:</strong> All effects (poison, drunkenness, madness, etc.) apply to chair characters normally. If a chair’s character is poisoned or drunk, the proxy receives faulty information. If a chair’s character is healthy, its information is correct even if the proxy is poisoned or drunk (unless another effect interferes).</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="design">
  <div class="container">
    <div class="panel columns">
      <div>
        <h2 class="section-title">Design goal</h2>
        <p class="subdued">Proxydale preserves the information density of larger games while introducing uncertainty about where information belongs, creating a more opaque, strategic, and deduction-focused experience for very small groups.</p>
      </div>
      <div>
        <ul class="readable-list">
          <li>For the Good team, the main benefit lies in informational continuity: even with a small number of real players, the information flow typical of a full game is largely preserved thanks to the chairs. This allows for deeper deductions, cross-referencing of data, and the construction of coherent narratives over the medium term, rewarding coordination, shared memory, and probabilistic reasoning rather than individual certainty.</li>
          <li>For the Evil team, Proxydale offers new opportunities for concealment and manipulation. The ability to know and coordinate with one’s ally enables more sophisticated strategies than in Teensyville, while the Good team’s inability to precisely locate characters opens broader spaces for ambiguity.</li>
          <li>Overall, Proxydale is designed for experienced groups who can appreciate a more cerebral and less declarative game, and it benefits decisively from an attentive, proactive Storyteller willing to intervene with tools like the Fibbin to maintain pacing, clarity, and balance.</li>
          <li>In this context, chairs are not merely a technical solution to a numerical problem, but become a true design tool, capable of transforming the game into an exercise in pure deduction and strategic tension.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="downloads">
  <div class="container">
    <div class="panel">
      <h2 class="section-title">Downloads</h2>
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
