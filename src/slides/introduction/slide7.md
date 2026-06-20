<Slide2 topic="Assembler &amp; Translator Comparison">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Assembler</span> &amp; Translator Comparison</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-purple" style="text-align:center;">
    <div class="slide-h2" style="color:var(--purple);">Assembler</div>
    <div class="small-text" style="margin-top:4px;">Converts <strong>assembly</strong> mnemonics into machine code.</div>
  </div>

  <div v-click class="section-label">Working Process</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:4px 0;">
    <div class="flow-node flow-start" style="width:220px;">Assembly (.asm)</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">Assembler</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">Machine Code (binary)</div>
  </div>

  <div v-click class="card card-blue" style="margin-top:4px;">
    <div class="small-text"><strong>Purpose:</strong> Used in device drivers, embedded firmware, and OS kernels where every CPU cycle matters.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Compiler vs Interpreter vs Assembler</div>

  <table v-after class="cmp-table" style="font-size:.7rem;">
    <thead>
      <tr><th>Feature</th><th>Compiler</th><th>Interpreter</th><th>Assembler</th></tr>
    </thead>
    <tbody>
      <tr><td>Translates</td><td>Whole program</td><td>Line by line</td><td>Assembly only</td></tr>
      <tr><td>Output</td><td>Executable file</td><td>Direct result</td><td>Machine code</td></tr>
      <tr><td>Speed</td><td class="yes">Fastest</td><td>Slower</td><td class="yes">Very fast</td></tr>
      <tr><td>Error report</td><td>All at compile time</td><td>One at a time</td><td>At assemble time</td></tr>
      <tr><td>Used by</td><td>C, C++, Go</td><td>Python, JS</td><td>Asm / firmware</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:4px;font-size:.7rem;">
    <div>All three are <strong>translators</strong> — they convert what humans write into something the CPU understands.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
