---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS DYNAMIC MEMORY ALLOCATION?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is <span class="highlight">Dynamic Memory Allocation?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Dynamic memory allocation</strong> lets a program request memory from the <strong style="color:var(--green);">heap at runtime</strong> — unlike static/local variables whose size must be known at compile time.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> Static allocation is like booking a fixed table at a restaurant. Dynamic allocation is like getting a table only when you arrive — and giving it back when you leave.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#6b7280;">// Required header for all allocation functions</span><br>
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdlib.h&gt;</span>
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> When you don't know the size of data at compile time (e.g. user input, variable-length arrays), dynamic allocation lets you request exactly what you need at runtime.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Static vs Dynamic Allocation</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th>Static / Local</th><th>Dynamic</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Where stored</td><td>Stack</td><td>Heap</td></tr>
      <tr v-click><td>Size known when?</td><td>Compile time</td><td>Runtime</td></tr>
      <tr v-click><td>Managed by</td><td>Compiler</td><td>Programmer</td></tr>
      <tr v-click><td>Lifetime</td><td>Scope ends → freed</td><td>Until free() called</td></tr>
      <tr v-click><td>Risk</td><td>Stack overflow</td><td>Memory leak</td></tr>
    </tbody>
  </table>

  <div v-click class="section-label" style="margin-top:8px;">The Four Functions</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <span v-click class="pill pill-red">malloc</span>
    <span v-after class="pill pill-blue">calloc</span>
    <span v-after class="pill pill-green">realloc</span>
    <span v-after class="pill pill-orange">free</span>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>All four functions live in <span class="mono">&lt;stdlib.h&gt;</span> — always include it before using any dynamic allocation.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
