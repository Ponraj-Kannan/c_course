<Slide2 topic="Setting Up the Environment">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Setting Up the <span class="highlight">Environment</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">1</div>
    <div>
      <div class="slide-h3">Install GCC</div>
      <div class="small-text">The compiler. Available via MinGW (Windows), <span class="mono">apt</span> (Linux), Xcode tools (mac).</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">2</div>
    <div>
      <div class="slide-h3">Install VS Code</div>
      <div class="small-text">Modern, lightweight editor with the C/C++ extension.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--green);">
    <div class="icon-circle ic-green">3</div>
    <div>
      <div class="slide-h3">Install Code::Blocks</div>
      <div class="small-text">Beginner-friendly IDE bundled with GCC.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--orange);">
    <div class="icon-circle ic-orange">4</div>
    <div>
      <div class="slide-h3">Install Dev-C++</div>
      <div class="small-text">Simple IDE, popular in many classrooms.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--purple);">
    <div class="icon-circle ic-purple">5</div>
    <div>
      <div class="slide-h3">Turbo C (Historical)</div>
      <div class="small-text">Classic 16-bit IDE — still seen in some textbooks, but outdated.</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Setup Checklist</div>

  <table v-after class="cmp-table" style="font-size:.7rem;">
    <thead>
      <tr><th>Step</th><th>What to Verify</th></tr>
    </thead>
    <tbody>
      <tr><td>Install compiler</td><td>Run <span class="mono">gcc --version</span></td></tr>
      <tr><td>Install editor / IDE</td><td>Create a new <span class="mono">.c</span> file</td></tr>
      <tr><td>Write hello.c</td><td>Print "Hello World"</td></tr>
      <tr><td>Compile</td><td>Run <span class="mono">gcc hello.c -o hello</span></td></tr>
      <tr><td>Execute</td><td>Run <span class="mono">./hello</span></td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><strong>Recommended for beginners:</strong> VS Code + GCC. Lightweight, modern, free.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
