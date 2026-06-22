---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 11 — QUICK REFERENCE & COMMON MISTAKES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Quick <span class="highlight">Reference</span> &amp; Common Mistakes</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Full Type Reference</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Type</th><th>Size</th><th>Use for</th><th>Format</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">char</td><td>1 B</td><td>Single character</td><td class="mono">%c</td></tr>
      <tr v-click><td class="mono">int</td><td>4 B</td><td>Whole numbers</td><td class="mono">%d</td></tr>
      <tr v-click><td class="mono">short int</td><td>2 B</td><td>Small integers</td><td class="mono">%hd</td></tr>
      <tr v-click><td class="mono">long long</td><td>8 B</td><td>Very large integers</td><td class="mono">%lld</td></tr>
      <tr v-click><td class="mono">float</td><td>4 B</td><td>Decimal (low prec.)</td><td class="mono">%f</td></tr>
      <tr v-click><td class="mono">double</td><td>8 B</td><td>Decimal (high prec.)</td><td class="mono">%lf</td></tr>
      <tr v-click><td class="mono">unsigned int</td><td>4 B</td><td>Non-negative integers</td><td class="mono">%u</td></tr>
    </tbody>
  </table>

</div>

<div class="flex-col">

  <div v-click class="section-label">Common Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Integer division</span>
        <div class="body-text"><span class="mono">7 / 2</span> gives <span class="mono">3</span>, not <span class="mono">3.5</span> — both operands are <span class="mono">int</span> so the result is truncated</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Overflow</span>
        <div class="body-text">Storing a value beyond a type's range wraps around silently with no error</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Float equality</span>
        <div class="body-text">Never compare floats with <span class="mono">==</span> — use <span class="mono">fabs(a - b) &lt; 0.0001</span> instead</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Wrong format</span>
        <div class="body-text">Using <span class="mono">%d</span> for <span class="mono">float</span> or <span class="mono">%f</span> for <span class="mono">int</span> — misread bytes, garbage output</div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div><strong>Golden Rule:</strong> Choose the <em>smallest type that fits your data</em> — and always use <span class="mono">sizeof()</span> to verify sizes rather than assuming them.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
