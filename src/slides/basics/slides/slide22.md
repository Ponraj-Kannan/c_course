<Slide2 topic="Input &amp; Output — Console Interaction">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Input</span> &amp; <span class="highlight">Output</span> in C</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Programs need to <strong style="color:var(--red);">talk to the user</strong>: read information in, show results out. C uses <span class="mono">scanf</span> and <span class="mono">printf</span> from <span class="mono">stdio.h</span>.
    </div>
  </div>

  <div v-click class="g2" style="gap:8px;">
    <div class="card card-blue" style="text-align:center;">
      <div class="slide-h3" style="color:var(--blue);">Standard Input</div>
      <div class="small-text">Keyboard / file (stdin)</div>
      <div class="mono" style="margin-top:4px;color:var(--navy);">scanf</div>
    </div>
    <div class="card card-green" style="text-align:center;">
      <div class="slide-h3" style="color:var(--green);">Standard Output</div>
      <div class="small-text">Console (stdout)</div>
      <div class="mono" style="margin-top:4px;color:var(--navy);">printf</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Both functions are <strong>built-in</strong> — just include <span class="mono">&lt;stdio.h&gt;</span> and call them.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Workflow</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">User runs program</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">printf("Enter age: ")</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-cond" style="width:220px;">scanf("%d", &amp;age)</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">CPU stores value in age</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">printf("You are %d", age)</div>
  </div>
</div>

</div>

  </template>
</Slide2>
