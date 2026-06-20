<Slide2 topic="Compiler">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">Compiler</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">compiler</strong> translates the <strong style="color:var(--green);">entire</strong> high-level source code into machine code in <strong>one go</strong> — producing an executable file.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="margin-bottom:4px;">Advantages</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Fast execution after compiling</li>
      <li>Catches errors before running</li>
      <li>Produces stand-alone executable</li>
    </ul>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="margin-bottom:4px;">Examples</div>
    <div style="display:flex;gap:6px;margin-top:4px;flex-wrap:wrap;">
      <span class="pill pill-red">GCC (C)</span>
      <span class="pill pill-blue">Clang</span>
      <span class="pill pill-green">javac (Java)</span>
      <span class="pill pill-orange">Go compiler</span>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Working Process</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">Source Code (.c)</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">Compiler</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">Object Code (.o)</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-return" style="width:220px;">Linker</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">Executable (.exe)</div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Once compiled, the executable runs on its own — no compiler needed at runtime.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
