---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — FREE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">free</span> — Releasing Memory</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">void</span> <span class="syn-keyword">free</span>(<span class="syn-keyword">void</span>* <span class="syn-varname">ptr</span>);
  </div>

  <div v-click class="card-navy" style="border-radius:10px;margin-top:6px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono" style="color:var(--red);">free()</span> returns a dynamically allocated block back to the heap — making it available for future allocations. The pointer variable <strong style="color:var(--green);">still holds the old address</strong> after freeing.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;margin-top:6px;">
    <span style="color:#0e6ead;">int</span> *p = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(<span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    *p = <span style="color:#b45309;">42</span>;<br>
    <span style="color:#2d7a00;">free</span>(p);     <span style="color:#6b7280;">// heap block released</span><br>
    p = <span style="color:#ef5050;">NULL</span>;   <span style="color:#6b7280;">// best practice — nullify pointer</span>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div><strong>Set to NULL after freeing:</strong> Always assign <span class="mono">p = NULL</span> right after <span class="mono">free(p)</span> — it prevents the pointer from becoming a dangling pointer that could be accidentally used.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">What Happens in Memory</div>

  <div v-after style="display:flex;gap:10px;align-items:flex-start;">
    <div style="flex:1;text-align:center;">
      <div style="font-size:.65rem;color:var(--muted);margin-bottom:4px;font-weight:700;">Before free</div>
      <div class="mem-box">
        <div class="mem-row">
          <div class="mem-name">p</div>
          <div class="mem-val" style="color:var(--green);">42</div>
          <div class="mem-type">int*</div>
        </div>
      </div>
    </div>
    <div style="font-size:1.4rem;color:var(--muted);padding-top:20px;">→</div>
    <div style="flex:1;text-align:center;">
      <div style="font-size:.65rem;color:var(--muted);margin-bottom:4px;font-weight:700;">After free(p)</div>
      <div class="mem-box">
        <div class="mem-row">
          <div style="padding:8px 12px;font-size:.68rem;color:var(--muted);font-style:italic;flex:1;">returned to heap</div>
        </div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Double-free is fatal:</strong> Calling <span class="mono">free(p)</span> twice on the same pointer corrupts the heap allocator's internal state — often causing a crash or silent memory corruption.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>free(NULL) is safe:</strong> Calling <span class="mono">free</span> on a <span class="mono">NULL</span> pointer does nothing — this is guaranteed by the C standard.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
