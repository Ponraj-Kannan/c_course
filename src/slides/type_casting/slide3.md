<Slide2 topic="Type Conversion">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Explicit</span> Conversion (Type Casting)</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Explicit casting</strong> is when YOU force a value into a different type using <span class="mono">(type)</span>.
    </div>
  </div>

  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block" style="font-size:.78rem;line-height:2;">
    <span style="color:#dd6b20;">(target_type)</span> <span style="color:#0e6ead;">expression</span>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">result</span> = (<span style="color:#0e6ead;">float</span>)<span style="color:#b45309;">10</span> / <span style="color:#b45309;">3</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.2f"</span>, <span style="color:#0e6ead;">result</span>);
  </div>

  <div v-click class="output-box">3.33</div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Without the cast, <span class="mono">10/3</span> is an integer division giving <span class="mono">3</span>. The cast turns 10 into 10.0 first.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Before vs After</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Expression</th><th>Result</th><th>Why</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">10 / 3</td><td class="mono no">3</td><td>int / int -&gt; int</td></tr>
      <tr><td class="mono">(float)10 / 3</td><td class="mono yes">3.33</td><td>float / int -&gt; float</td></tr>
      <tr><td class="mono">10 / 3.0</td><td class="mono yes">3.33</td><td>3.0 promotes 10 too</td></tr>
      <tr><td class="mono">(int)3.99</td><td class="mono">3</td><td>truncates decimal</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><strong>Real-world use:</strong> Calculating averages, percentages, ratios where decimals matter.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
