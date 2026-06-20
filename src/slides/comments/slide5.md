---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — WHY COMMENTS MATTER
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Comments in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Why <span class="highlight">Comments</span> Matter</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">Without Comments</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> f(<span style="color:#0e6ead;">int</span> n) {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> r = <span style="color:#b45309;">1</span>;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">2</span>; i &lt;= n; i++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;r *= i;<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> r;<br>
    }
  </div>
  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div>What does <span class="mono">f</span> compute? What does <span class="mono">r</span> mean? A reader has to mentally trace the loop to find out.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">With Comments</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#6b7280;">// Returns factorial of n (n!)</span><br>
    <span style="color:#0e6ead;">int</span> factorial(<span style="color:#0e6ead;">int</span> n) {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> result = <span style="color:#b45309;">1</span>;  <span style="color:#6b7280;">// running product</span><br>
    &nbsp;&nbsp;<span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">2</span>; i &lt;= n; i++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;result *= i;<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> result;<br>
    }
  </div>
  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>The comment plus clear names make the purpose obvious <strong>instantly</strong> — no tracing required.</div>
  </div>

</div>

</div>

<div v-click style="margin-top:14px;">
  <div class="section-label" style="margin-bottom:6px;">Quick Recap</div>
  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
    <div class="step-box active">// single-line</div>
    <div class="step-arrow">+</div>
    <div class="step-box active">/* multi-line */</div>
    <div class="step-arrow">→</div>
    <div class="step-box" style="border-color:var(--green);background:#f0fff4;color:var(--green);">Ignored by compiler</div>
    <div class="step-arrow">→</div>
    <div class="step-box" style="border-color:var(--blue);background:#ebf8ff;color:var(--blue);">Readable code for humans</div>
  </div>
</div>

  </template>
</Slide2>
