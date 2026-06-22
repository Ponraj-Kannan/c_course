---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — SIZEOF OPERATOR
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">sizeof</span> Operator</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono" style="color:var(--red);">sizeof</span> is a <strong style="color:var(--green);">compile-time operator</strong> that returns the size (in bytes) of a type or variable — essential for writing portable C code.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span class="syn-keyword">sizeof</span>(<span class="syn-varname">type</span>);<br>
    <span class="syn-keyword">sizeof</span>(<span class="syn-varname">variable</span>);
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;margin-top:6px;">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"int    = <span style="color:#ef5050;">%lu</span> bytes\n"</span>, <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"float  = <span style="color:#ef5050;">%lu</span> bytes\n"</span>, <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">float</span>));<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"double = <span style="color:#ef5050;">%lu</span> bytes\n"</span>, <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">double</span>));<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"char   = <span style="color:#ef5050;">%lu</span> bytes\n"</span>, <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">char</span>));
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    int    = 4 bytes<br>
    float  = 4 bytes<br>
    double = 8 bytes<br>
    char   = 1 bytes
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Standard Sizes (64-bit system)</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Type</th><th>Size (bytes)</th><th>Format</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">char</td><td>1</td><td class="mono">%c / %d</td></tr>
      <tr v-click><td class="mono">short int</td><td>2</td><td class="mono">%hd</td></tr>
      <tr v-click><td class="mono">int</td><td>4</td><td class="mono">%d</td></tr>
      <tr v-click><td class="mono">long int</td><td>4 or 8</td><td class="mono">%ld</td></tr>
      <tr v-click><td class="mono">long long int</td><td>8</td><td class="mono">%lld</td></tr>
      <tr v-click><td class="mono">float</td><td>4</td><td class="mono">%f</td></tr>
      <tr v-click><td class="mono">double</td><td>8</td><td class="mono">%lf</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div><span class="mono">sizeof</span> returns a value of type <span class="mono">size_t</span> — use <span class="mono">%lu</span> (or <span class="mono">%zu</span> in C99+) to print it, not <span class="mono">%d</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
