<Slide2 topic="Type Conversion">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Type Conversion</span> in C</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Type conversion</strong> is when a value of one data type is <strong style="color:var(--green);">converted</strong> into another.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Why?</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Mixing int and float in one expression</li>
      <li>Avoid loss of precision</li>
      <li>Match a function's expected type</li>
    </ul>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Two Kinds</div>
    <div class="body-text">
      <strong>Implicit</strong> — C does it automatically.<br>
      <strong>Explicit</strong> — you do it with a cast.
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Data Loss Risk</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">3.99</span>;<br>
    <span style="color:#0e6ead;">int</span>   <span style="color:#0e6ead;">b</span> = <span style="color:#0e6ead;">a</span>;<br>
    <span style="color:#6b7280;">// b = 3 (decimal lost!)</span>
  </div>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div>Converting <strong>float -&gt; int</strong> truncates the decimal — the rounded part is gone forever.</div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Conversion Flow</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:200px;">float 3.99</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:200px;">Truncate decimal</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:200px;">int 3</div>
  </div>
</div>

</div>

  </template>
</Slide2>
