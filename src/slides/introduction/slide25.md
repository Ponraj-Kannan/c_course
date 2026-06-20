<Slide2 topic="Compilation Process — Detailed">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Compilation <span class="highlight">Process</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">1. Preprocessing</div>
    <div class="body-text">Handles <span class="mono">#include</span>, <span class="mono">#define</span>, removes comments. Output: <span class="mono">.i</span> file.</div>
  </div>

  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">2. Compilation</div>
    <div class="body-text">C code is converted to <strong>assembly</strong> code. Output: <span class="mono">.s</span> file.</div>
  </div>

  <div v-click class="card card-purple">
    <div class="slide-h3" style="color:var(--purple);">3. Assembly</div>
    <div class="body-text">The assembler turns assembly into <strong>object code</strong>. Output: <span class="mono">.o</span> file.</div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">4. Linking</div>
    <div class="body-text">Linker combines object files + standard libraries into a runnable <strong>executable</strong>.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Pipeline Visualization</div>

  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div v-click class="card card-orange" style="width:220px; text-align:center">
      <div class="body-text">hello.c (source)</div>
    </div>
    <div v-after class="flow-arrow">&#x25BC;</div>
    <div v-click class="card card-orange" style="width:220px; text-align:center">
      <div class="body-text">Preprocessor -> hello.i</div>
    </div>
    <div v-after class="flow-arrow">&#x25BC;</div>
    <div v-click class="card card-red" style="width:220px; text-align:center">
      <div class="body-text">Compiler -> hello.s</div>
    </div>
    <div v-after class="flow-arrow">&#x25BC;</div>
    <div v-click class="card card-purple" style="width:220px; text-align:center">
      <div class="body-text">Assembler -> hello.o</div>
    </div>
    <div v-after class="flow-arrow">&#x25BC;</div>
    <div v-click class="card-green" style="width:220px; text-align:center">
      <div class="body-text">Linker -> hello (run!)</div>
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
