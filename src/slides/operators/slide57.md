---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 27 — CONDITIONAL (TERNARY) OPERATOR (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Conditional (Ternary) <span class="highlight">Operator</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      The <strong style="color:var(--red);">ternary operator (<span class="mono">? :</span>)</strong> is a compact shorthand for an <span class="mono">if-else</span> statement. It evaluates a condition and returns one of two values based on whether the condition is <strong>true</strong> or <strong>false</strong>.
    </div>
  </div>

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f0f4ff;border-radius:10px;border:1px solid #c5cde8;padding:14px 16px;">
    <div class="syntax-row" style="flex-wrap:wrap;gap:6px;">
      <span class="syn-varname">result</span>
      <span class="syn-operator">=</span>
      <span class="syn-keyword">condition</span>
      <span class="syn-operator">?</span>
      <span class="syn-value">value_if_true</span>
      <span class="syn-operator">:</span>
      <span class="syn-value" style="background:#fff0f0;color:var(--red-dark);">value_if_false</span>
      <span style="color:var(--slate);font-family:'Fira Code',monospace;font-size:.78rem;">;</span>
    </div>
    <div style="display:flex;gap:30px;margin-top:8px;flex-wrap:wrap;">
      <div style="text-align:center;"><div class="syn-label">variable</div></div>
      <div style="text-align:center;"><div class="syn-label">condition</div></div>
      <div style="text-align:center;"><div class="syn-label">if true</div></div>
      <div style="text-align:center;"><div class="syn-label">if false</div></div>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Think of it as:</strong> <span class="mono">if (condition) { result = A; } else { result = B; }</span> — all collapsed into one line!</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Code Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#6b7280;">// Ternary instead of if-else</span><br>
    <span style="color:#ef5050;">char</span> *<span style="color:#0e6ead;">status</span> = (<span style="color:#0e6ead;">age</span> >= <span style="color:#b45309;">18</span>) ? <span style="color:#2d7a00;">"Adult"</span> : <span style="color:#2d7a00;">"Minor"</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%s\n"</span>, <span style="color:#0e6ead;">status</span>);  <span style="color:#6b7280;">// Adult</span><br>
    <br>
    <span style="color:#6b7280;">// Finding max of two numbers</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">15</span>, <span style="color:#0e6ead;">b</span> = <span style="color:#b45309;">28</span>;<br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">max</span> = (<span style="color:#0e6ead;">a</span> > <span style="color:#0e6ead;">b</span>) ? <span style="color:#0e6ead;">a</span> : <span style="color:#0e6ead;">b</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Max: %d\n"</span>, <span style="color:#0e6ead;">max</span>);  <span style="color:#6b7280;">// Max: 28</span><br>
    <br>
    <span style="color:#6b7280;">// Even or odd check</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">n</span> = <span style="color:#b45309;">7</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%s\n"</span>, (<span style="color:#0e6ead;">n</span> % <span style="color:#b45309;">2</span> == <span style="color:#b45309;">0</span>) ? <span style="color:#2d7a00;">"Even"</span> : <span style="color:#2d7a00;">"Odd"</span>); <span style="color:#6b7280;">// Odd</span>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><strong>Best practice:</strong> Use the ternary operator for <em>simple</em> two-way choices. For complex logic with multiple branches, stick to <span class="mono">if-else</span> for better readability.</div>
  </div>

  <div v-click class="card card-blue" style="margin-top:6px; margin-bottom:40px">
    <div class="small-text"><strong>Real-world use:</strong> Finding max/min, printing labels, grade assignment, toggling boolean flags</div>
  </div>

</div>

</div>

  </template>
</Slide2>
