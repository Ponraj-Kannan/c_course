---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 28 — SPECIAL OPERATORS (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Special <span class="highlight">Operators</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      C has several <strong style="color:var(--red);">special operators</strong> that are unique to the language — they deal with <strong>memory size</strong>, <strong>addresses</strong>, <strong>pointers</strong>, and <strong>expression sequencing</strong>. These give C its close-to-hardware power.
    </div>
  </div>

  <div>
    <table class="cmp-table" style="font-size:.7rem;margin-top:6px;">
      <thead v-click><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">sizeof</td><td>Size-of</td><td>Returns size in bytes of a type or variable</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&</td><td>Address-of</td><td>Returns the memory address of a variable</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">*</td><td>Dereference</td><td>Accesses the value at a pointer address</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">,</td><td>Comma</td><td>Evaluates multiple expressions left to right</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">( type )</td><td>Type Cast</td><td>Converts a value from one type to another</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><strong>Note:</strong> The <span class="mono">&</span> (address-of) and <span class="mono">*</span> (dereference) operators are the foundation of <strong>pointer programming</strong> — one of C's most powerful features.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Code Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.71rem;line-height:1.85;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">10</span>;<br>
    <br>
    <span style="color:#6b7280;">// sizeof — memory size</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%lu\n"</span>, <span style="color:#ef5050;">sizeof</span>(<span style="color:#ef5050;">int</span>));  <span style="color:#6b7280;">// 4 (bytes)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%lu\n"</span>, <span style="color:#ef5050;">sizeof</span>(<span style="color:#0e6ead;">x</span>));   <span style="color:#6b7280;">// 4 (bytes)</span><br>
    <br>
    <span style="color:#6b7280;">// & — address-of operator</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%p\n"</span>, &<span style="color:#0e6ead;">x</span>);  <span style="color:#6b7280;">// memory address of x</span><br>
    <br>
    <span style="color:#6b7280;">// * — pointer dereference</span><br>
    <span style="color:#ef5050;">int</span> *<span style="color:#0e6ead;">ptr</span> = &<span style="color:#0e6ead;">x</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, *<span style="color:#0e6ead;">ptr</span>);  <span style="color:#6b7280;">// 10 (value at address)</span><br>
    <br>
    <span style="color:#6b7280;">// Type cast</span><br>
    <span style="color:#ef5050;">float</span> <span style="color:#0e6ead;">result</span> = (<span style="color:#ef5050;">float</span>)<span style="color:#b45309;">7</span> / <span style="color:#b45309;">2</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.1f\n"</span>, <span style="color:#0e6ead;">result</span>);  <span style="color:#6b7280;">// 3.5</span>
  </div>

  <div v-click class="card card-purple" style="margin-top:6px; margin-bottom:40px">
    <div class="small-text"><strong>Real-world use:</strong> <span class="mono">sizeof</span> for dynamic memory allocation; <span class="mono">&</span> and <span class="mono">*</span> for pointers, arrays, functions; cast for data type conversions</div>
  </div>

</div>

</div>

  </template>
</Slide2>
