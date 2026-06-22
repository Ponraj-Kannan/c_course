---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — RULES FOR NAMING IDENTIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Rules for <span class="highlight">Naming Identifiers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">The Rules</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 1</div>
      <div class="body-text">Can only contain <strong>letters</strong> (a–z, A–Z), <strong>digits</strong> (0–9), and <strong>underscores</strong> ( _ )</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 2</div>
      <div class="body-text">Must <strong>start with a letter or underscore</strong> — never a digit</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 3</div>
      <div class="body-text"><strong>No spaces or special characters</strong> — @, #, $, !, -, ., % are all forbidden</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 4</div>
      <div class="body-text"><strong>Cannot be a keyword</strong> — reserved words like <span class="mono">int</span>, <span class="mono">for</span>, <span class="mono">return</span> are off-limits</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 5</div>
      <div class="body-text"><strong>Case-sensitive</strong> — <span class="mono">total</span>, <span class="mono">Total</span>, and <span class="mono">TOTAL</span> are three distinct identifiers</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 6</div>
      <div class="body-text"><strong>No length limit</strong> in modern C, but only the first <strong>31 characters</strong> are guaranteed significant (C89 limit)</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Allowed Characters at a Glance</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Character Type</th><th>Allowed?</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Letters (a–z, A–Z)</td><td class="yes">✔ Yes</td><td class="mono">name</td></tr>
      <tr v-click><td>Digits (0–9)</td><td class="yes">✔ Yes (not first)</td><td class="mono">val2</td></tr>
      <tr v-click><td>Underscore _</td><td class="yes">✔ Yes</td><td class="mono">_temp</td></tr>
      <tr v-click><td>Spaces</td><td class="no">✘ No</td><td class="mono">my var</td></tr>
      <tr v-click><td>Special chars (@#$)</td><td class="no">✘ No</td><td class="mono">val@1</td></tr>
      <tr v-click><td>Starts with digit</td><td class="no">✘ No</td><td class="mono">2score</td></tr>
    </tbody>
  </table>

</div>

</div>

  </template>
</Slide2>
