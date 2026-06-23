---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — MEMORY LEAKS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Memory Leaks</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">memory leak</strong> occurs when dynamically allocated memory is <strong style="color:var(--green);">never freed</strong> — the program consumes more and more RAM until it slows down or crashes.
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Real-World Analogy:</strong> A memory leak is like filling a bathtub without a drain — each allocation adds water, and eventually the tub overflows.</div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:6px;margin-bottom:4px;">
    <span class="pill pill-red">Leak Example</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> processData() {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> *data = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(<span style="color:#b45309;">100</span> * <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    &nbsp;&nbsp;<span style="color:#6b7280;">// ... use data ...</span><br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span>; <span style="color:#6b7280;">// ⚠ forgot free(data)!</span><br>
    }<span style="color:#6b7280;">// 400 bytes leaked every call</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div>If <span class="mono">processData()</span> is called in a loop, the leak grows with each iteration — programs running for hours can exhaust system memory.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">Fixed Version</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> processData() {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> *data = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(<span style="color:#b45309;">100</span> * <span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">if</span> (!data) <span style="color:#0e6ead;">return</span>;<br>
    &nbsp;&nbsp;<span style="color:#6b7280;">// ... use data ...</span><br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">free</span>(data);  <span style="color:#6b7280;">// ✔ always release</span><br>
    &nbsp;&nbsp;data = <span style="color:#ef5050;">NULL</span>;<br>
    }
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Detection Tools</div>
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <span class="pill pill-blue">Valgrind</span>
      <div class="body-text">Run with <span class="mono">valgrind --leak-check=full ./program</span> — reports every leaked block</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <span class="pill pill-green">AddressSanitizer</span>
      <div class="body-text">Compile with <span class="mono">-fsanitize=address</span> — catches leaks and invalid accesses at runtime</div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
