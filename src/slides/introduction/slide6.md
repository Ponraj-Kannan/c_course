<Slide2 topic="Interpreter">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">Interpreter</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An <strong style="color:var(--red);">interpreter</strong> reads and executes the source code <strong style="color:var(--green);">line by line</strong> — no separate executable file is produced.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="margin-bottom:4px;">Advantages</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Easier to test and debug</li>
      <li>Cross-platform with same interpreter</li>
      <li>Quick to start — no build step</li>
    </ul>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="margin-bottom:4px;">Examples</div>
    <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap;">
      <span class="pill pill-blue">Python</span>
      <span class="pill pill-orange">JavaScript</span>
      <span class="pill pill-green">Ruby</span>
      <span class="pill pill-purple">PHP</span>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Working Process</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">Source Code (.py)</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">Interpreter</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">Read &amp; Execute Line 1</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">Read &amp; Execute Line 2</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">Result on Screen</div>
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>Errors are caught at runtime, so a bug in line 100 may only appear once line 100 actually runs.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
