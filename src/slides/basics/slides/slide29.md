<Slide2 topic="Common Mistakes &amp; Debug Tips">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common <span class="highlight">Mistakes</span> &amp; Debug Tips</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">Forgot &amp; in scanf</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">age</span>);<br>
      <span style="color:#c0392b;font-weight:700;">// crash / undefined</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> <span class="mono">scanf("%d", &amp;age);</span></div>
  </div>

  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">Wrong specifier</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">3.14</span>;<br>
      <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">x</span>);<br>
      <span style="color:#c0392b;font-weight:700;">// garbage output</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> use <span class="mono">%f</span> for float.</div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">= instead of ==</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#ef5050;">if</span> (<span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">5</span>) { ... }<br>
      <span style="color:#c0392b;font-weight:700;">// always true!</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> use <span class="mono">==</span> for comparison.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Integer division surprise</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">avg</span> = <span style="color:#b45309;">7</span> / <span style="color:#b45309;">2</span>;<br>
      <span style="color:#c0392b;font-weight:700;">// avg = 3.0, not 3.5</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> cast one operand to float.</div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Using uninitialized variable</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span>;<br>
      <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">x</span>);<br>
      <span style="color:#c0392b;font-weight:700;">// garbage value</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> initialize at declaration.</div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><strong>Pro tip:</strong> Compile with <span class="mono">gcc -Wall</span> — most of these warnings appear automatically.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
