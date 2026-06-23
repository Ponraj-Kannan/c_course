---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — MALLOC
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">malloc</span> — Memory Allocation</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">void</span>* <span class="syn-keyword">malloc</span>(<span class="syn-varname">size_t</span> <span class="syn-value">size</span>);
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:5px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">size</span>
      <span class="body-text">Number of bytes to allocate</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">void*</span>
      <span class="body-text">Returns a generic pointer — cast to the needed type</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">NULL</span>
      <span class="body-text">Returned if allocation fails — always check!</span>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Uninitialized memory:</strong> <span class="mono">malloc</span> does <strong>not</strong> zero out the allocated block — it contains <strong>garbage values</strong> until you write to it.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Always check for NULL:</strong> If the system is out of memory, <span class="mono">malloc</span> returns <span class="mono">NULL</span> — dereferencing it immediately crashes the program.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Example — Allocating an int Array</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> n = <span style="color:#b45309;">5</span>;<br>
    <br>
    <span style="color:#6b7280;">// Allocate 5 ints on the heap</span><br>
    <span style="color:#0e6ead;">int</span> *arr = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(n * <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    <br>
    <span style="color:#6b7280;">// Always check for NULL!</span><br>
    <span style="color:#ef5050;">if</span> (arr == <span style="color:#ef5050;">NULL</span>) {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Allocation failed\n"</span>);<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> <span style="color:#b45309;">1</span>;<br>
    }<br>
    <br>
    <span style="color:#6b7280;">// Use the array</span><br>
    arr[<span style="color:#b45309;">0</span>] = <span style="color:#b45309;">10</span>; arr[<span style="color:#b45309;">1</span>] = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#2d7a00;">free</span>(arr); <span style="color:#6b7280;">// release when done</span>
  </div>

  <div v-click class="mem-box" style="margin-top:6px;">
    <div class="mem-header">Heap after malloc(5 * sizeof(int)) = 20 bytes</div>
    <div class="mem-row">
      <div class="mem-name">arr[0]</div><div class="mem-val" style="color:var(--muted);">garbage</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">arr[1]</div><div class="mem-val" style="color:var(--muted);">garbage</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">arr[2..4]</div><div class="mem-val" style="color:var(--muted);">garbage</div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
