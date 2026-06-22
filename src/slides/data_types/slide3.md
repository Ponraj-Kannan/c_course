---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — FLOATING POINT TYPES: FLOAT & DOUBLE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Floating Point — <span class="highlight">float</span> &amp; <span class="highlight">double</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">float — Single Precision</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.9;">
    <span style="color:#0e6ead;">float</span> price = <span style="color:#b45309;">9.99f</span>;<br>
    <span style="color:#0e6ead;">float</span> temp  = <span style="color:#b45309;">36.5f</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%f</span>"</span>, price); <span style="color:#6b7280;">// 9.990000</span>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:8px;margin-bottom:4px;">
    <span class="pill pill-green">double — Double Precision</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.9;">
    <span style="color:#0e6ead;">double</span> pi      = <span style="color:#b45309;">3.14159265358979</span>;<br>
    <span style="color:#0e6ead;">double</span> balance = <span style="color:#b45309;">99999.999</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%.10lf</span>"</span>, pi);
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>f suffix:</strong> A literal like <span class="mono">3.14</span> is a <span class="mono">double</span> by default — write <span class="mono">3.14f</span> to assign a <span class="mono">float</span> without an implicit narrowing warning.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">float vs double Comparison</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th>float</th><th>double</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Size</td><td>4 bytes (32-bit)</td><td>8 bytes (64-bit)</td></tr>
      <tr v-click><td>Precision</td><td>~6–7 decimal digits</td><td>~15–16 decimal digits</td></tr>
      <tr v-click><td>printf/scanf</td><td class="mono">%f</td><td class="mono">%lf</td></tr>
      <tr v-click><td>Default literal</td><td class="no">✘ No (use f suffix)</td><td class="yes">✔ Yes</td></tr>
      <tr v-click><td>Use when</td><td>Memory matters</td><td>Precision matters</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Floating point is not exact:</strong> <span class="mono">0.1 + 0.2</span> in C does not equal exactly <span class="mono">0.3</span> — never use <span class="mono">==</span> to compare floats; check if the difference is within a small tolerance.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
