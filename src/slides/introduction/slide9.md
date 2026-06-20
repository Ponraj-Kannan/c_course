<Slide2 topic="Program Development Life Cycle — Part 2">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Life Cycle — <span class="highlight">Steps 6 to 10</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">6</div>
    <div>
      <div class="slide-h3">Compilation</div>
      <div class="small-text">Convert source code into an executable using a compiler.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--orange);">
    <div class="icon-circle ic-orange">7</div>
    <div>
      <div class="slide-h3">Testing</div>
      <div class="small-text">Run the program with sample inputs and verify the output.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">8</div>
    <div>
      <div class="slide-h3">Debugging</div>
      <div class="small-text">Find and fix mistakes (syntax, logic, runtime).</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--purple);">
    <div class="icon-circle ic-purple">9</div>
    <div>
      <div class="slide-h3">Documentation</div>
      <div class="small-text">Write comments and user guides for future readers.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--green);">
    <div class="icon-circle ic-green">10</div>
    <div>
      <div class="slide-h3">Maintenance</div>
      <div class="small-text">Update, optimise, and patch the program over time.</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Second Half — Visual</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">6. Compilation</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-cond" style="width:220px;">7. Testing</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">8. Debugging</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">9. Documentation</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">10. Maintenance</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;font-size:.7rem;">
    <div><strong>Tip:</strong> Most working time is spent on testing, debugging, and maintenance — not the first write.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
