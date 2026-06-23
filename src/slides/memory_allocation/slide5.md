---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — MALLOC VS CALLOC
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">malloc</span> vs <span class="highlight">calloc</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Side-by-Side Comparison</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th>malloc</th><th>calloc</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Arguments</td><td>1 (total bytes)</td><td>2 (count, size each)</td></tr>
      <tr v-click><td>Initialises memory?</td><td class="no">✘ No (garbage)</td><td class="yes">✔ Yes (zeros)</td></tr>
      <tr v-click><td>Speed</td><td>Slightly faster</td><td>Slightly slower</td></tr>
      <tr v-click><td>Returns on fail</td><td class="mono">NULL</td><td class="mono">NULL</td></tr>
      <tr v-click><td>Use when</td><td>You'll write before read</td><td>You need safe zero state</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Both return a <span class="mono">void*</span> — cast it to the appropriate pointer type before use: <span class="mono">(int*) malloc(...)</span>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Memory State After Allocation</div>

  <div v-after style="display:flex;flex-direction:column;gap:8px;">
    <div>
      <div style="font-size:.7rem;font-weight:700;color:var(--red-dark);font-family:'Fira Code',monospace;margin-bottom:4px;">malloc(3 * sizeof(int))</div>
      <div style="display:flex;gap:4px;">
        <div style="text-align:center;">
          <div class="idx-cell" style="background:#fff5f5;border-color:var(--red);color:var(--red-dark);">??</div>
          <div class="idx-num">[0]</div>
        </div>
        <div style="text-align:center;">
          <div class="idx-cell" style="background:#fff5f5;border-color:var(--red);color:var(--red-dark);">??</div>
          <div class="idx-num">[1]</div>
        </div>
        <div style="text-align:center;">
          <div class="idx-cell" style="background:#fff5f5;border-color:var(--red);color:var(--red-dark);">??</div>
          <div class="idx-num">[2]</div>
        </div>
      </div>
      <div class="small-text" style="margin-top:4px;color:var(--red-dark);">Garbage — do not read before writing!</div>
    </div>
    <div>
      <div style="font-size:.7rem;font-weight:700;color:var(--green);font-family:'Fira Code',monospace;margin-bottom:4px;">calloc(3, sizeof(int))</div>
      <div style="display:flex;gap:4px;">
        <div style="text-align:center;">
          <div class="idx-cell" style="background:#f0fff4;border-color:var(--green);color:var(--green);">0</div>
          <div class="idx-num">[0]</div>
        </div>
        <div style="text-align:center;">
          <div class="idx-cell" style="background:#f0fff4;border-color:var(--green);color:var(--green);">0</div>
          <div class="idx-num">[1]</div>
        </div>
        <div style="text-align:center;">
          <div class="idx-cell" style="background:#f0fff4;border-color:var(--green);color:var(--green);">0</div>
          <div class="idx-num">[2]</div>
        </div>
      </div>
      <div class="small-text" style="margin-top:4px;color:var(--green);">All zeroes — safe to use immediately</div>
    </div>

  </div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Prefer <span class="mono">calloc</span></strong> when building data structures like linked lists or graphs — unintended reads of garbage values are a common source of subtle bugs.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
