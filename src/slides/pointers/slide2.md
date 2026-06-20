---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — ADDRESS-OF (&) AND DEREFERENCE (*) OPERATORS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">&amp;</span> and <span class="highlight">*</span> Operators</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">Address-of Operator &amp;</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> x = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%p"</span>, <span style="color:#ef5050;">&amp;</span>x); <span style="color:#6b7280;">// address of x</span>
  </div>
  <div v-click class="body-text" style="font-size:.74rem;"><span class="mono" style="color:var(--blue);">&amp;</span> returns the <strong>memory address</strong> of a variable — "give me the location of this."</div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:10px;margin-bottom:4px;">
    <span class="pill pill-green">Dereference Operator *</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p = <span style="color:#ef5050;">&amp;</span>x;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#ef5050;">*</span>p); <span style="color:#6b7280;">// value at that address → 10</span>
  </div>
  <div v-click class="body-text" style="font-size:.74rem;"><span class="mono" style="color:var(--green);">*</span> accesses the <strong>value stored</strong> at the address a pointer holds — "give me what's at this location."</div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Visualizing & and *</div>

  <div v-after style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:10px;padding:10px 18px;flex:1;text-align:center;">
        <div style="font-size:.62rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Variable</div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--green);font-size:.85rem;">x = 10</div>
        <div style="font-size:.6rem;color:var(--muted);margin-top:2px;">at 0x7f3a</div>
      </div>
      <div style="color:var(--muted);font-size:1rem;font-weight:900;text-align:center;">&amp;x →<br><span style="font-size:.6rem;">"address of x"</span></div>
      <div style="background:var(--red-soft);border:2px dashed var(--red);border-radius:10px;padding:10px 18px;min-width:90px;text-align:center;">
        <div style="font-size:.62rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Result</div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--red-dark);font-size:.85rem;">0x7f3a</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="background:#ebf8ff;border:2px solid var(--blue);border-radius:10px;padding:10px 18px;flex:1;text-align:center;">
        <div style="font-size:.62rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Pointer</div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;color:#2b6cb0;font-size:.85rem;">p = 0x7f3a</div>
      </div>
      <div style="color:var(--muted);font-size:1rem;font-weight:900;text-align:center;">*p →<br><span style="font-size:.6rem;">"value at p"</span></div>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:10px;padding:10px 18px;min-width:90px;text-align:center;">
        <div style="font-size:.62rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Result</div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--green);font-size:.85rem;">10</div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div><span class="mono">&amp;</span> and <span class="mono">*</span> are <strong>opposites</strong>: <span class="mono">*(&amp;x)</span> is the same as just writing <span class="mono">x</span>.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Beginner Trap:</strong> <span class="mono">*</span> means something different in a <strong>declaration</strong> (<span class="mono">int *p</span> — "p is a pointer") vs. an <strong>expression</strong> (<span class="mono">*p</span> — "dereference p").</div>
  </div>

</div>

</div>

  </template>
</Slide2>
