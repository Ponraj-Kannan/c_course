---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 11 — BEST PRACTICES & SAFE PATTERNS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Best Practices &amp; <span class="highlight">Safe Patterns</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">The Allocation Checklist</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ 1</div>
      <div class="body-text">Use <span class="mono">sizeof(*ptr)</span> not <span class="mono">sizeof(type)</span> — type-safe and refactor-proof</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ 2</div>
      <div class="body-text">Always check the return value for <span class="mono">NULL</span> before dereferencing</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ 3</div>
      <div class="body-text">Every <span class="mono">malloc</span>/<span class="mono">calloc</span> must have a matching <span class="mono">free</span> — pair them at the same level</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ 4</div>
      <div class="body-text">Set pointer to <span class="mono">NULL</span> immediately after <span class="mono">free</span></div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ 5</div>
      <div class="body-text">Use a temporary pointer for <span class="mono">realloc</span> — never overwrite the original directly</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Safe malloc Wrapper Pattern</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.68rem;line-height:1.85;">
    <span style="color:#6b7280;">// A wrapper that never returns NULL</span><br>
    <span style="color:#0e6ead;">void</span>* safe_malloc(<span style="color:#0e6ead;">size_t</span> size) {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">void</span> *ptr = <span style="color:#2d7a00;">malloc</span>(size);<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">if</span> (ptr == <span style="color:#ef5050;">NULL</span>) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">fprintf</span>(stderr, <span style="color:#2d7a00;">"Out of memory\n"</span>);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">exit</span>(<span style="color:#b45309;">EXIT_FAILURE</span>);<br>
    &nbsp;&nbsp;}<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> ptr;<br>
    }
  </div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div>Wrapping <span class="mono">malloc</span> in a helper centralises error handling — your application code stays clean and the allocation safety check is never accidentally omitted.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><strong>Function pairing rule:</strong> If a function allocates memory, either the <em>same</em> function frees it, or the function's documentation clearly states the caller is responsible — never leave ownership ambiguous.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
