---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — COMMON MISTAKES & PATTERNS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common <span class="highlight">Mistakes</span> &amp; Patterns</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Frequent Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">No NULL check</span>
        <div class="body-text">Using the pointer without checking if <span class="mono">malloc</span> returned <span class="mono">NULL</span> — instant segfault when memory is full</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Wrong sizeof</span>
        <div class="body-text"><span class="mono">malloc(n)</span> instead of <span class="mono">malloc(n * sizeof(int))</span> — allocates far fewer bytes than needed</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">realloc trap</span>
        <div class="body-text"><span class="mono">ptr = realloc(ptr, n)</span> — if it returns <span class="mono">NULL</span>, the original pointer is lost and the block leaks</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Free stack memory</span>
        <div class="body-text">Calling <span class="mono">free()</span> on a stack variable (not heap) — corrupts the allocator</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Partial free</span>
        <div class="body-text">Freeing a pointer that was <strong>incremented</strong> (e.g. <span class="mono">arr++; free(arr);</span>) — must free the original base address</div>
      </div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Avoid vs Do Instead</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>❌ Avoid</th><th>✔ Do Instead</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono" style="color:var(--red-dark);">malloc(n)</td><td class="mono" style="color:var(--green);">malloc(n * sizeof(type))</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Skip NULL check</td><td style="color:var(--green);">Always check before use</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">p = realloc(p, n)</td><td class="mono" style="color:var(--green);">tmp = realloc(p, n); if(tmp) p = tmp</td></tr>
      <tr v-click><td style="color:var(--red-dark);">free then use</td><td style="color:var(--green);">free then set to NULL</td></tr>
      <tr v-click><td style="color:var(--red-dark);">free stack var</td><td style="color:var(--green);">Only free heap (malloc'd) pointers</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Use <span class="mono">sizeof(*ptr)</span> instead of <span class="mono">sizeof(type)</span> — it automatically adapts if the pointer type ever changes: <span class="mono">malloc(n * sizeof(*arr))</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
