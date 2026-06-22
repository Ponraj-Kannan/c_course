---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — FORMAT SPECIFIERS IN SCANF
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Format Specifiers in <span class="highlight">scanf</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono">scanf</span> uses the same type specifiers as <span class="mono">printf</span>, but it <strong style="color:var(--red);">reads data from input</strong> instead of printing it — and needs a <strong style="color:var(--green);">&amp; (address-of)</strong> before most variables.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">int</span> age;<br>
    <span style="color:#0e6ead;">float</span> gpa;<br>
    <span style="color:#0e6ead;">char</span> name[<span style="color:#b45309;">20</span>];<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%d</span>"</span>, <span style="color:#ef5050;">&amp;</span>age);<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%f</span>"</span>, <span style="color:#ef5050;">&amp;</span>gpa);<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%s</span>"</span>, name); <span style="color:#6b7280;">// no & needed for arrays</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Missing &amp; is a classic bug:</strong> <span class="mono">scanf("%d", age)</span> passes the <em>value</em> as an address — this almost always causes a segfault.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">printf vs scanf Key Differences</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th>printf</th><th>scanf</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Direction</td><td>Output</td><td>Input</td></tr>
      <tr v-click><td>Needs &amp; ?</td><td class="no">✘ No</td><td class="yes">✔ Yes (non-arrays)</td></tr>
      <tr v-click><td>double specifier</td><td class="mono">%f or %lf</td><td class="mono">%lf only</td></tr>
      <tr v-click><td>%s stops at</td><td>null terminator</td><td>whitespace</td></tr>
      <tr v-click><td>Width in %s</td><td>pads output</td><td>limits input chars</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div><strong>Buffer overflow risk:</strong> <span class="mono">scanf("%s", name)</span> with no width limit reads endlessly — use <span class="mono">scanf("%19s", name)</span> to cap at 19 chars (leaving room for <span class="mono">\0</span>).</div>
  </div>

</div>

</div>

  </template>
</Slide2>
