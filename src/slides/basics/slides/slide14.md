<Slide2 topic="float — Floating-Point Data Type">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">float</span> — Decimal Numbers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Purpose</div>
    <div class="body-text">Stores <strong>decimal / fractional</strong> numbers like 3.14 or -0.001.</div>
  </div>

  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">name</span> = <span style="color:#b45309;">value</span>;
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">temperature</span> = <span style="color:#b45309;">36.5</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">pi</span> = <span style="color:#b45309;">3.14f</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.2f"</span>, <span style="color:#0e6ead;">temperature</span>);
  </div>

  <div v-click class="output-box">36.50</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Memory &amp; Range</div>

  <table v-after class="cmp-table" style="font-size:.72rem;">
    <thead>
      <tr><th>Property</th><th>Value</th></tr>
    </thead>
    <tbody>
      <tr><td>Size</td><td class="mono">4 bytes</td></tr>
      <tr><td>Precision</td><td>6-7 significant digits</td></tr>
      <tr><td>Range</td><td class="mono">~1.2e-38 to 3.4e+38</td></tr>
      <tr><td>Format specifier</td><td class="mono">%f</td></tr>
    </tbody>
  </table>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:4px;">Decimal Visualization</div>
    <div style="background:#f7f8fc;padding:12px;border-radius:10px;border:1px solid var(--border);">
      <div style="display:flex;gap:6px;align-items:center;font-family:'Fira Code',monospace;">
        <span class="mem-cell m-float">3</span>
        <span style="color:var(--orange);font-weight:900;">.</span>
        <span class="mem-cell m-float">14</span>
      </div>
      <div class="small-text" style="margin-top:6px;">Integer part &middot; decimal point &middot; fractional part</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Suffix <span class="mono">f</span> (3.14f) marks a literal as <span class="mono">float</span>, otherwise it defaults to <span class="mono">double</span>.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
