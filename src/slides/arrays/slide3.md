---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — ACCESSING & MODIFYING ARRAY ELEMENTS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Accessing</span> &amp; <span class="highlight">Modifying</span> Elements</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Each element is accessed using <strong style="color:var(--red);">arrayName[index]</strong>. C arrays are <strong style="color:var(--green);">zero-indexed</strong> — the first element is at index 0, not 1.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> marks[<span style="color:#b45309;">5</span>] = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, marks[<span style="color:#b45309;">0</span>]); <span style="color:#6b7280;">// 90 (first)</span><br>
    marks[<span style="color:#b45309;">2</span>] = <span style="color:#b45309;">99</span>;       <span style="color:#6b7280;">// modify 3rd element</span>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Beginner Trap:</strong> In <span class="mono">int marks[5]</span>, valid indices are <span class="mono">0</span> to <span class="mono">4</span> — <span class="mono">marks[5]</span> does <strong>not exist</strong>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Index-to-Element Mapping</div>

  <div v-after style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;">
    <div style="text-align:center;">
      <div class="idx-cell">90</div>
      <div style="font-size:.62rem;color:var(--muted);margin-top:2px;">[0]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell">85</div>
      <div style="font-size:.62rem;color:var(--muted);margin-top:2px;">[1]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#fff5f5;border-color:var(--red);color:var(--red-dark);">99</div>
      <div style="font-size:.62rem;color:var(--muted);margin-top:2px;">[2] modified</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell">92</div>
      <div style="font-size:.62rem;color:var(--muted);margin-top:2px;">[3]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell">88</div>
      <div style="font-size:.62rem;color:var(--muted);margin-top:2px;">[4]</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:10px;">
    <div>The last valid index of any array is always <span class="mono">size - 1</span> — for a 5-element array, that's index <span class="mono">4</span>.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div>Both <strong>reading</strong> (<span class="mono">marks[2]</span>) and <strong>writing</strong> (<span class="mono">marks[2] = 99</span>) use the exact same indexing syntax.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
