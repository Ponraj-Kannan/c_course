---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — CALLOC
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">calloc</span> — Contiguous Allocation</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">void</span>* <span class="syn-keyword">calloc</span>(<span class="syn-varname">size_t</span> <span class="syn-value">n</span>, <span class="syn-varname">size_t</span> <span class="syn-value">size</span>);
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:5px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">n</span>
      <span class="body-text">Number of elements to allocate</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">size</span>
      <span class="body-text">Size of each element in bytes</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">void*</span>
      <span class="body-text">Returns pointer to zero-initialised block</span>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div><strong>Zero-initialised:</strong> Unlike <span class="mono">malloc</span>, <span class="mono">calloc</span> sets every byte of the allocated block to <strong>0</strong> — safe to read immediately without writing first.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><span class="mono">calloc(n, size)</span> is equivalent to <span class="mono">malloc(n * size)</span> followed by <span class="mono">memset(..., 0, n * size)</span> — but often optimised by the OS.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#6b7280;">// Allocate 5 ints, all set to 0</span><br>
    <span style="color:#0e6ead;">int</span> *arr = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">calloc</span>(<span style="color:#b45309;">5</span>, <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    <br>
    <span style="color:#ef5050;">if</span> (arr == <span style="color:#ef5050;">NULL</span>) {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Allocation failed\n"</span>);<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> <span style="color:#b45309;">1</span>;<br>
    }<br>
    <br>
    <span style="color:#6b7280;">// Safe to read — all elements are 0</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%d</span>"</span>, arr[<span style="color:#b45309;">0</span>]); <span style="color:#6b7280;">// 0</span><br>
    <span style="color:#2d7a00;">free</span>(arr);
  </div>

  <div v-click class="mem-box" style="margin-top:6px;">
    <div class="mem-header">Heap after calloc(5, sizeof(int)) = 20 bytes</div>
    <div class="mem-row">
      <div class="mem-name">arr[0]</div><div class="mem-val" style="color:var(--green);">0</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">arr[1]</div><div class="mem-val" style="color:var(--green);">0</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">arr[2..4]</div><div class="mem-val" style="color:var(--green);">0</div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
