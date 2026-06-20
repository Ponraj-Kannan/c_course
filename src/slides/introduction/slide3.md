<Slide2 topic="Low-Level vs High-Level Languages">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Low-Level</span> vs <span class="highlight">High-Level</span> Languages</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-red" style="text-align:center;">
    <div class="slide-h2" style="color:var(--red-dark);">Low-Level Languages</div>
    <div class="small-text" style="margin-top:4px;">Close to the machine. Hard for humans.</div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">M</div>
    <div>
      <div class="slide-h3">Machine Language</div>
      <div class="small-text">Pure binary (0s and 1s) — directly understood by the CPU.</div>
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#6b7280;"># Machine code (example)</span><br>
    <span style="color:#2d7a00;">10110000 01100001</span>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--orange);">
    <div class="icon-circle ic-orange">A</div>
    <div>
      <div class="slide-h3">Assembly Language</div>
      <div class="small-text">Uses short mnemonics (MOV, ADD). Needs an <strong>assembler</strong>.</div>
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#6b7280;">; Assembly</span><br>
    <span style="color:#ef5050;">MOV</span> <span style="color:#0e6ead;">AL</span>, <span style="color:#b45309;">61h</span><br>
    <span style="color:#ef5050;">ADD</span> <span style="color:#0e6ead;">AL</span>, <span style="color:#b45309;">02h</span>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-green" style="text-align:center;">
    <div class="slide-h2" style="color:var(--green);">High-Level Languages</div>
    <div class="small-text" style="margin-top:4px;">Close to human language. Easy to read &amp; write.</div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">C</div>
    <div>
      <div class="slide-h3">Characteristics</div>
      <div class="small-text">Human-readable, portable, uses words like <span class="mono">if</span>, <span class="mono">while</span>.</div>
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#6b7280;">// High-level C code</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">sum</span> = <span style="color:#b45309;">97</span> + <span style="color:#b45309;">2</span>;<br>
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">sum</span>);
  </div>

  <div v-click class="card card-blue">
    <div class="small-text"><strong>Examples:</strong></div>
    <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
      <span class="pill pill-red">C</span>
      <span class="pill pill-blue">Python</span>
      <span class="pill pill-green">Java</span>
      <span class="pill pill-orange">JavaScript</span>
      <span class="pill pill-purple">C++</span>
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
