---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — NESTED IF-ELSE: SYNTAX
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Nested if-else</span> — Syntax</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">nested if-else</strong> places one <span class="mono">if</span>/<span class="mono">else</span> statement <strong style="color:var(--green);">inside</strong> another — used when a decision depends on the outcome of a previous decision.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.76rem;line-height:1.95;">
    <span class="syn-keyword">if</span> (<span class="syn-varname">outerCondition</span>) {<br>
    &nbsp;&nbsp;<span class="syn-keyword">if</span> (<span class="syn-varname">innerCondition</span>) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-value">// runs if both are true</span><br>
    &nbsp;&nbsp;} <span class="syn-keyword">else</span> {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-value">// outer true, inner false</span><br>
    &nbsp;&nbsp;}<br>
    } <span class="syn-keyword">else</span> {<br>
    &nbsp;&nbsp;<span class="syn-value">// outer false</span><br>
    }
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Dangling else trap:</strong> An <span class="mono">else</span> always binds to the <strong>nearest unmatched</strong> <span class="mono">if</span> — always use braces to make nesting unambiguous.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">When to Use Nesting</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-blue" style="width:32px;height:32px;font-size:.85rem;">🔗</div>
      <div class="body-text">The <strong>inner condition only matters</strong> if the outer one is already true</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-green" style="width:32px;height:32px;font-size:.85rem;">🧩</div>
      <div class="body-text">Checking <strong>combinations</strong> of conditions, e.g. age AND citizenship</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-orange" style="width:32px;height:32px;font-size:.85rem;">⚠️</div>
      <div class="body-text">Deep nesting hurts readability — <strong>3-4 levels</strong> is usually the practical limit</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Nested <span class="mono">if-else</span> differs from an <span class="mono">else if</span> ladder: the ladder checks <strong>alternative</strong> conditions, while nesting checks conditions that <strong>depend</strong> on each other.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div>Sometimes nested conditions can be simplified using the <strong>&amp;&amp;</strong> (logical AND) operator instead of nesting.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
