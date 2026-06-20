---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS DECISION MAKING?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is <span class="highlight">Decision Making?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Decision making</strong> lets a program <strong style="color:var(--green);">choose between different paths</strong> of execution based on whether a condition is true or false.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> Decision statements are like a fork in the road — depending on a signpost (the condition), you take one path or another.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#ef5050;">if</span> (age &gt;= <span style="color:#b45309;">18</span>) {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Adult"</span>);<br>
    }
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> Without decision-making, a program runs the same statements every time — branching is what lets logic adapt to data.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">C's Decision-Making Tools</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">1</div>
      <div class="body-text"><strong><span class="mono">if</span></strong> — runs code only when a condition is true</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">2</div>
      <div class="body-text"><strong><span class="mono">if-else</span></strong> — picks one of two paths</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">3</div>
      <div class="body-text"><strong><span class="mono">else if ladder</span></strong> — picks one of many paths</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--orange);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">4</div>
      <div class="body-text"><strong>Nested if-else</strong> — a decision inside another decision</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--purple);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">5</div>
      <div class="body-text"><strong><span class="mono">switch</span></strong> — matches a value against multiple cases</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Every decision in C is built around a <strong>condition</strong> that evaluates to <span class="mono">true</span> (non-zero) or <span class="mono">false</span> (zero).</div>
  </div>

</div>

</div>

  </template>
</Slide2>
