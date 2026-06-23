---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — RECURSIVE FLOW EXECUTION
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Recursive Flow — Step-by-Step Execution">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Recursive <span class="highlight">Flow Execution</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Example — Print Digits in Reverse</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">void</span> <span style="color:#2d7a00;">printReverse</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">n</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">if</span> (<span style="color:#0e6ead;">n</span> == <span style="color:#b45309;">0</span>) <span style="color:#6b7280;">// base case</span></span>
    <span style="padding-left:40px;display:block;"><span style="color:#ef5050;">return</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d "</span>, <span style="color:#0e6ead;">n</span> % <span style="color:#b45309;">10</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printReverse</span>(<span style="color:#0e6ead;">n</span> / <span style="color:#b45309;">10</span>);</span>
    }<br>
    <span style="color:#2d7a00;">printReverse</span>(<span style="color:#b45309;">123</span>);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">3 &nbsp; 2 &nbsp; 1</div>

  <div v-click class="section-label" style="margin-top:6px;">Execution Trace Table</div>

  <div v-after>
    <table class="trace-table">
      <thead><tr><th>Call</th><th>Input n</th><th>Action</th><th>Returns</th></tr></thead>
      <tbody>
        <tr><td>1st</td><td>123</td><td>print 3, call printReverse(12)</td><td>waits</td></tr>
        <tr><td>2nd</td><td>12</td><td>print 2, call printReverse(1)</td><td>waits</td></tr>
        <tr><td>3rd</td><td>1</td><td>print 1, call printReverse(0)</td><td>waits</td></tr>
        <tr class="hl"><td>4th</td><td>0</td><td>base case</td><td class="hl">return</td></tr>
        <tr><td>3rd</td><td>unwind</td><td>returns</td><td>—</td></tr>
        <tr><td>2nd</td><td>unwind</td><td>returns</td><td>—</td></tr>
        <tr><td>1st</td><td>unwind</td><td>returns</td><td class="hl">done</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Complete Execution Flow Diagram</div>

  <div style="display:flex;flex-direction:column;align-items:center;gap:3px;padding:4px 0;">
    <div class="flow-node flow-start" style="width:240px;" v-click>printReverse(123)</div>
    <div class="flow-arrow" v-after>&#x25BC;</div>
    <div class="flow-node flow-call" style="width:240px;" v-click>print 3, call(12)</div>
    <div class="flow-arrow" v-after>&#x25BC;</div>
    <div class="flow-node flow-call" style="width:240px;" v-click>print 2, call(1)</div>
    <div class="flow-arrow" v-after>&#x25BC;</div>
    <div class="flow-node flow-call" style="width:240px;" v-click>print 1, call(0)</div>
    <div class="flow-arrow" v-after>&#x25BC;</div>
    <div class="flow-node flow-end" style="width:240px;" v-click>n==0, return (base case)</div>
    <div class="flow-arrow" v-after>&#x25B2;</div>
    <div class="flow-node flow-return" style="width:240px;" v-click>returns to call(1)</div>
    <div class="flow-arrow" v-after>&#x25B2;</div>
    <div class="flow-node flow-return" style="width:240px;" v-click>returns to call(12)</div>
    <div class="flow-arrow" v-after>&#x25B2;</div>
    <div class="flow-node flow-body" style="width:240px;" v-click>returns to call(123)</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;font-size:.7rem;  margin-bottom:40px;">
    <div>The recursive calls go <strong>down</strong> until base case, then results are <strong>assembled on the way back up</strong>.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
