---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 11 — SWITCH RULES & RESTRICTIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">switch</span> Rules &amp; Restrictions</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">The Rules</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 1</div>
      <div class="body-text">The switch expression must be an <strong>int</strong> or <strong>char</strong> type (no float, double, or string)</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 2</div>
      <div class="body-text"><span class="mono">case</span> values must be <strong>constant expressions</strong> known at compile time</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 3</div>
      <div class="body-text"><strong>Duplicate case values</strong> are a compile-time error</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 4</div>
      <div class="body-text"><span class="mono">default</span> is <strong>optional</strong> and can appear anywhere — but is conventionally placed last</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 5</div>
      <div class="body-text"><span class="mono">switch</span> statements <strong>can be nested</strong> inside other switch or if statements</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Valid vs Invalid Case Labels</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Case Label</th><th>Valid?</th><th>Reason</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">case 5:</td><td class="yes">✔ Valid</td><td>Integer constant</td></tr>
      <tr v-click><td class="mono">case 'A':</td><td class="yes">✔ Valid</td><td>Character constant</td></tr>
      <tr v-click><td class="mono">case x:</td><td class="no">✘ Invalid</td><td>x is a variable, not constant</td></tr>
      <tr v-click><td class="mono">case 3.14:</td><td class="no">✘ Invalid</td><td>Float not allowed</td></tr>
      <tr v-click><td class="mono">case 5: case 5:</td><td class="no">✘ Invalid</td><td>Duplicate case value</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div><strong>switch vs else-if-ladder:</strong> Use <span class="mono">switch</span> for exact-match comparisons on a single variable; use a ladder for <strong>range checks</strong> like <span class="mono">marks &gt;= 60</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
