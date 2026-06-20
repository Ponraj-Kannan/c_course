---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — ELSE IF LADDER: FLOW & EXAMPLE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">else if</span> Ladder — Flow &amp; Example</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Grading Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> marks = <span style="color:#b45309;">82</span>;<br>
    <span style="color:#ef5050;">if</span> (marks &gt;= <span style="color:#b45309;">90</span>) <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"A"</span>);<br>
    <span style="color:#ef5050;">else if</span> (marks &gt;= <span style="color:#b45309;">75</span>) <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"B"</span>);<br>
    <span style="color:#ef5050;">else if</span> (marks &gt;= <span style="color:#b45309;">60</span>) <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"C"</span>);<br>
    <span style="color:#ef5050;">else</span> <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"F"</span>);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">B</div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Execution Trace</div>
    <table class="trace-table">
      <thead v-click>
        <tr><th>Check</th><th>Condition</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>1</td><td>marks &gt;= 90</td><td>False</td></tr>
        <tr v-click class="hl"><td>2</td><td>marks &gt;= 75</td><td>True → "B"</td></tr>
        <tr v-click><td>3</td><td>marks &gt;= 60</td><td>skipped</td></tr>
        <tr v-click><td>else</td><td>—</td><td>skipped</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Flow Diagram</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <div class="flow-node flow-cond" style="width:170px;">marks &gt;= 90?</div>
    <div class="flow-arrow">No ↓</div>
    <div class="flow-node flow-cond" style="width:170px;">marks &gt;= 75?</div>
    <div class="flow-arrow">Yes ↓</div>
    <div class="flow-node flow-body" style="width:170px;">Print "B"</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-node flow-end" style="width:170px;">Continue program</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Once <span class="mono">marks &gt;= 75</span> is true, the ladder <strong>stops checking</strong> — <span class="mono">marks &gt;= 60</span> and <span class="mono">else</span> never run.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div><strong>Best use case:</strong> Choosing one outcome among several <strong>ranges</strong> or <strong>mutually exclusive categories</strong> — like grading, tax brackets, or shipping tiers.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
