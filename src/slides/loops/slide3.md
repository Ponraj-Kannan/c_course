---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — WHILE LOOP TRACING
═══════════════════════════════════════════════════════ -->

<Slide2 topic="While Loop">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">while Loop — <span class="highlight">Tracing</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Syntax Diagram</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px 18px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#6b7280;">/* Initialize variable */</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">counter</span> = <span style="color:#b45309;">1</span>;<br>
    <br>
    <span style="color:#ef5050;">while</span> (<span style="color:#0e6ead;">counter</span> <span style="color:#c49a00;">&lt;=</span> <span style="color:#b45309;">5</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d\n"</span>, <span style="color:#0e6ead;">counter</span>);</span>
    <span style="padding-left:20px;display:block;color:#6b7280;">/* Update variable */</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">counter</span><span style="color:#c49a00;">++</span>;</span>
    }
  </div>
</div>

<div class="flex-col">
  <div v-after class="section-label">Step-by-Step Trace: counter = 1 to 5</div>
  <div>
    <table class="trace-table">
      <thead v-after>
        <tr><th>Iteration</th><th>counter</th><th>Condition (counter &lt;= 5)</th><th>Output</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>1</td><td>1</td><td class="yes">True</td><td>1</td></tr>
        <tr v-click><td>2</td><td>2</td><td class="yes">True</td><td>2</td></tr>
        <tr v-click><td>3</td><td>3</td><td class="yes">True</td><td>3</td></tr>
        <tr v-click><td>4</td><td>4</td><td class="yes">True</td><td>4</td></tr>
        <tr v-click><td>5</td><td>5</td><td class="yes">True</td><td>5</td></tr>
        <tr v-click class="hl"><td>6</td><td>6</td><td class="no">False</td><td>Exit</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="output-box" style="margin-top:8px;font-size:.72rem;">
    <span class="comment">/* Output */</span><br>
    1 &nbsp;2 &nbsp;3 &nbsp;4 &nbsp;5
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>The condition is checked <strong>before</strong> each iteration. If it is false from the start, the loop body never executes.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
