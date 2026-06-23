---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — REALLOC
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">realloc</span> — Resize Allocated Memory</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">void</span>* <span class="syn-keyword">realloc</span>(<span class="syn-keyword">void</span>* <span class="syn-varname">ptr</span>, <span class="syn-varname">size_t</span> <span class="syn-value">newSize</span>);
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:5px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">ptr</span>
      <span class="body-text">Pointer to the previously allocated block</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">newSize</span>
      <span class="body-text">The new total size in bytes (can be larger or smaller)</span>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">What realloc Does Internally</div>
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">CASE 1</div>
      <div class="body-text">Enough room in place → <strong>extends</strong> the existing block, same address returned</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--orange);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">CASE 2</div>
      <div class="body-text">Not enough room → allocates <strong>new block</strong>, copies data, frees old block — <strong>new address returned</strong></div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">CASE 3</div>
      <div class="body-text">Allocation fails → returns <span class="mono">NULL</span> — <strong>original block is NOT freed</strong></div>
    </div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Safe realloc Pattern</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> *arr = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(<span style="color:#b45309;">3</span> * <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    <br>
    <span style="color:#6b7280;">// Grow to 6 elements — safe pattern</span><br>
    <span style="color:#0e6ead;">int</span> *temp = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">realloc</span>(arr, <span style="color:#b45309;">6</span> * <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    <span style="color:#ef5050;">if</span> (temp == <span style="color:#ef5050;">NULL</span>) {<br>
    &nbsp;&nbsp;<span style="color:#6b7280;">// arr still valid — don't lose it!</span><br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">free</span>(arr);<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> <span style="color:#b45309;">1</span>;<br>
    }<br>
    arr = temp; <span style="color:#6b7280;">// safe to reassign now</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Never do:</strong> <span class="mono">arr = realloc(arr, newSize)</span> — if <span class="mono">realloc</span> returns <span class="mono">NULL</span>, you lose the original pointer and create a <strong>memory leak</strong>.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Passing <span class="mono">NULL</span> as <span class="mono">ptr</span> makes <span class="mono">realloc</span> behave like <span class="mono">malloc</span>. Passing <span class="mono">0</span> as <span class="mono">newSize</span> behaves like <span class="mono">free</span> on most systems.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
