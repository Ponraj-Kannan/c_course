<Slide2 topic="Program Development Life Cycle — Part 1">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Program Development <span class="highlight">Life Cycle</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">1</div>
    <div>
      <div class="slide-h3">Problem Identification</div>
      <div class="small-text">Clearly state what needs to be solved.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--orange);">
    <div class="icon-circle ic-orange">2</div>
    <div>
      <div class="slide-h3">Problem Analysis</div>
      <div class="small-text">Understand inputs, outputs, constraints, and conditions.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">3</div>
    <div>
      <div class="slide-h3">Algorithm Design</div>
      <div class="small-text">Write the step-by-step logic in plain language.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--purple);">
    <div class="icon-circle ic-purple">4</div>
    <div>
      <div class="slide-h3">Flowchart Design</div>
      <div class="small-text">Visualize the algorithm with shapes and arrows.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--green);">
    <div class="icon-circle ic-green">5</div>
    <div>
      <div class="slide-h3">Coding</div>
      <div class="small-text">Convert the algorithm into a real programming language.</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">First Half — Visual</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">1. Problem Identification</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-cond" style="width:220px;">2. Problem Analysis</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">3. Algorithm Design</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-return" style="width:220px;">4. Flowchart Design</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">5. Coding</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;font-size:.7rem;">
    <div>Steps 1-5 happen <strong>before</strong> the compiler ever sees the code. Plan first, type later.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
