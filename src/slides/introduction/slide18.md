<Slide2 topic="GCC Compiler">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">GCC</span> Compiler</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">GCC</strong> (GNU Compiler Collection) is the most widely used C compiler — free, open-source, and runs on every major OS.
    </div>
  </div>

  <div v-click class="section-label">Common Commands</div>

  <div v-after class="code-block">
    <span style="color:#6b7280;"># Compile program.c into 'program'</span><br>
    <span style="color:#2d7a00;">gcc</span> <span style="color:#0e6ead;">program.c</span> <span style="color:#ef5050;">-o</span> <span style="color:#0e6ead;">program</span><br>
    <br>
    <span style="color:#6b7280;"># Run the executable</span><br>
    <span style="color:#2d7a00;">./program</span><br>
    <br>
    <span style="color:#6b7280;"># Check GCC version</span><br>
    <span style="color:#2d7a00;">gcc</span> <span style="color:#ef5050;">--version</span><br>
    <br>
    <span style="color:#6b7280;"># Enable all warnings</span><br>
    <span style="color:#2d7a00;">gcc</span> <span style="color:#ef5050;">-Wall</span> <span style="color:#0e6ead;">program.c</span> <span style="color:#ef5050;">-o</span> <span style="color:#0e6ead;">program</span>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Compilation Stages</div>

  <div v-after style="display:flex;flex-direction:column;gap:6px;">
    <div class="stage-box s-pre">
      <div class="stage-label">Stage 1</div>
      <div>Preprocessing</div>
      <div class="small-text" style="margin-top:2px;">Expands #include, macros, removes comments.</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="stage-box s-cmp">
      <div class="stage-label">Stage 2</div>
      <div>Compilation</div>
      <div class="small-text" style="margin-top:2px;">C code -> assembly code.</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="stage-box s-asm">
      <div class="stage-label">Stage 3</div>
      <div>Assembly</div>
      <div class="small-text" style="margin-top:2px;">Assembly -> machine code (.o object file).</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="stage-box s-lnk">
      <div class="stage-label">Stage 4</div>
      <div>Linking</div>
      <div class="small-text" style="margin-top:2px;">Combines .o files + libraries -> executable.</div>
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
