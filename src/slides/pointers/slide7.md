---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — POINTER TO POINTER (DOUBLE POINTERS)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Pointer to Pointer <span class="highlight">(Double Pointers)</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">double pointer</strong> stores the address of <strong style="color:var(--green);">another pointer</strong> — a pointer pointing to a pointer, declared with <span class="mono">**</span>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> x = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p = <span style="color:#ef5050;">&amp;</span>x;     <span style="color:#6b7280;">// pointer to x</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">**</span>pp = <span style="color:#ef5050;">&amp;</span>p;   <span style="color:#6b7280;">// pointer to p</span>
  </div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Dereferencing Levels</div>
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Expression</th><th>Value</th></tr>
      </thead>
      <tbody>
        <tr v-click><td class="mono">x</td><td>10</td></tr>
        <tr v-click><td class="mono">p</td><td>address of x</td></tr>
        <tr v-click><td class="mono">*p</td><td>10</td></tr>
        <tr v-click><td class="mono">pp</td><td>address of p</td></tr>
        <tr v-click><td class="mono">*pp</td><td>address of x</td></tr>
        <tr v-click><td class="mono">**pp</td><td>10</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Chain of References</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <div style="background:#faf5ff;border:2px solid var(--purple);border-radius:8px;padding:8px 20px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--purple);">pp (int**)</div>
    <div style="font-size:.65rem;color:var(--muted);">stores address of p</div>
    <div style="color:var(--muted);font-size:1.2rem;">↓</div>
    <div style="background:#ebf8ff;border:2px solid var(--blue);border-radius:8px;padding:8px 20px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:#2b6cb0;">p (int*)</div>
    <div style="font-size:.65rem;color:var(--muted);">stores address of x</div>
    <div style="color:var(--muted);font-size:1.2rem;">↓</div>
    <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:8px 20px;font-family:'Fira Code',monospace;font-size:.85rem;font-weight:700;color:var(--green);">x = 10</div>
    <div style="font-size:.65rem;color:var(--muted);">actual value</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Each extra <span class="mono">*</span> adds one more "hop" through memory before reaching the actual value.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div><strong>Common use cases:</strong> modifying a pointer inside a function, dynamic 2D arrays, and arrays of strings (<span class="mono">char **argv</span>).</div>
  </div>

</div>

</div>

  </template>
</Slide2>
