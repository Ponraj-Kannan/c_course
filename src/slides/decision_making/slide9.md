---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — THE SWITCH STATEMENT: EXAMPLE & FLOW
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">switch</span> Statement — Example &amp; Flow</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Day-of-Week Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.8;">
    <span style="color:#0e6ead;">int</span> day = <span style="color:#b45309;">3</span>;<br>
    <span style="color:#ef5050;">switch</span> (day) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">1</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Mon"</span>); <span style="color:#ef5050;">break</span>;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">2</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Tue"</span>); <span style="color:#ef5050;">break</span>;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">3</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Wed"</span>); <span style="color:#ef5050;">break</span>;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">default</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Unknown"</span>);<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">Wed</div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Execution Trace</div>
    <table class="trace-table">
      <thead v-click>
        <tr><th>Case Checked</th><th>Match?</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>case 1</td><td>No</td></tr>
        <tr v-click><td>case 2</td><td>No</td></tr>
        <tr v-click class="hl"><td>case 3</td><td>Yes → "Wed", then break</td></tr>
        <tr><td>default</td><td>skipped</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Flow Diagram</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <div class="flow-node flow-call" style="width:160px;">Evaluate day</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-node flow-cond" style="width:160px;">day == 1?</div>
    <div class="flow-arrow">No ↓</div>
    <div class="flow-node flow-cond" style="width:160px;">day == 2?</div>
    <div class="flow-arrow">No ↓</div>
    <div class="flow-node flow-cond" style="width:160px;">day == 3?</div>
    <div class="flow-arrow">Yes ↓</div>
    <div class="flow-node flow-body" style="width:160px;">Print "Wed"</div>
    <div class="flow-arrow">↓ break</div>
    <div class="flow-node flow-end" style="width:160px;">Exit switch</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Conceptually a <span class="mono">switch</span> checks cases <strong>top to bottom</strong> just like an <span class="mono">else if</span> ladder, but with cleaner syntax for equality checks.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
