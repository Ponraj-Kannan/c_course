<Slide2 topic="double — Higher Precision">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">double</span> — Higher Precision Floats</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-purple">
    <div class="slide-h3" style="color:var(--purple);">Purpose</div>
    <div class="body-text">Stores decimal numbers with <strong>twice the precision</strong> of <span class="mono">float</span> — used in science and finance.</div>
  </div>

  <div v-click class="section-label">Syntax &amp; Example</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">double</span> <span style="color:#0e6ead;">salary</span> = <span style="color:#b45309;">123456.789</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.3lf"</span>, <span style="color:#0e6ead;">salary</span>);
  </div>

  <div v-click class="output-box">123456.789</div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Use <span class="mono">%lf</span> (not <span class="mono">%f</span>) when scanning a double with <span class="mono">scanf</span>.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">float vs double</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Feature</th><th>float</th><th>double</th></tr>
    </thead>
    <tbody>
      <tr><td>Size</td><td class="mono">4 bytes</td><td class="mono">8 bytes</td></tr>
      <tr><td>Precision</td><td>6-7 digits</td><td class="yes">15-16 digits</td></tr>
      <tr><td>Range</td><td>~3.4e38</td><td class="yes">~1.8e308</td></tr>
      <tr><td>Specifier</td><td class="mono">%f</td><td class="mono">%lf</td></tr>
      <tr><td>Speed</td><td class="yes">Faster</td><td>Slightly slower</td></tr>
    </tbody>
  </table>

  <div v-click class="card card-blue" style="margin-top:6px;">
    <div class="small-text"><strong>Rule of thumb:</strong> Use <span class="mono">double</span> by default unless memory or speed is critical.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
