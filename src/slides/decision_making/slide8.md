---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — THE SWITCH STATEMENT: SYNTAX
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">switch</span> Statement — Syntax</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono" style="color:var(--red);">switch</span> compares one <strong style="color:var(--green);">expression</strong> against several constant <strong style="color:var(--green);">case</strong> values — a cleaner alternative to a long <span class="mono">else if</span> ladder.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.95;">
    <span class="syn-keyword">switch</span> (<span class="syn-varname">expression</span>) {<br>
    &nbsp;&nbsp;<span class="syn-keyword">case</span> <span class="syn-value">value1</span>:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-value">// code</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-keyword">break</span>;<br>
    &nbsp;&nbsp;<span class="syn-keyword">case</span> <span class="syn-value">value2</span>:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-value">// code</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-keyword">break</span>;<br>
    &nbsp;&nbsp;<span class="syn-keyword">default</span>:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="syn-value">// fallback code</span><br>
    }
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Keyword Breakdown</div>

  <div style="display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">switch</span>
      <span class="body-text">Evaluates the expression once</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">case</span>
      <span class="body-text">A possible matching value — runs if expression equals it</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">break</span>
      <span class="body-text">Exits the switch after a matching case runs</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">default</span>
      <span class="body-text">Runs when no case matches (optional, like a final else)</span>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div>The <span class="mono">switch</span> expression must evaluate to an <strong>integer or character</strong> type — not a float or string in standard C.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Each <span class="mono">case</span> value must be a <strong>constant</strong> known at compile time — variables aren't allowed as case labels.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
