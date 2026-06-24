---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — ACCESSING & MODIFYING ELEMENTS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="2D Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Accessing</span> &amp; <span class="highlight">Modifying</span> Elements</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax — Reading an Element</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.8rem;line-height:2.2;">
    <span style="color:#0e6ead;">array_name</span><span style="color:#ef5050;">[</span><span style="color:#2d7a00;">row_index</span><span style="color:#ef5050;">][</span><span style="color:#c49a00;">col_index</span><span style="color:#ef5050;">]</span>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2.1;margin-top:4px;">
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">mat</span>[<span style="color:#2d7a00;">3</span>][<span style="color:#c49a00;">3</span>] = {<br>
    &nbsp;&nbsp;{<span style="color:#b45309;">1</span>,<span style="color:#b45309;">2</span>,<span style="color:#b45309;">3</span>}, {<span style="color:#b45309;">4</span>,<span style="color:#b45309;">5</span>,<span style="color:#b45309;">6</span>}, {<span style="color:#b45309;">7</span>,<span style="color:#b45309;">8</span>,<span style="color:#b45309;">9</span>}<br>
    };<br><br>
    <span style="color:#6b7280;">// Read element at row 1, col 2</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">mat</span>[<span style="color:#b45309;">1</span>][<span style="color:#b45309;">2</span>]); <span style="color:#6b7280;">// Output: 6</span><br><br>
    <span style="color:#6b7280;">// Modify element at row 0, col 0</span><br>
    <span style="color:#0e6ead;">mat</span>[<span style="color:#b45309;">0</span>][<span style="color:#b45309;">0</span>] = <span style="color:#b45309;">99</span>;
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">6</div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div>Indices are <strong>zero-based</strong>. For a <span class="mono">3×3</span> array, valid row indices are <span class="mono">0, 1, 2</span> and valid column indices are <span class="mono">0, 1, 2</span>. Accessing <span class="mono">mat[3][0]</span> is <strong>out of bounds!</strong></div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Visual — Which Cell is mat[1][2]?</div>

  <div v-after style="display:flex;flex-direction:column;gap:4px;margin-top:4px;">
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="font-family:'Fira Code',monospace;font-size:.65rem;color:var(--muted);width:56px;text-align:right;padding-right:6px;">Row 0</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">1</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">2</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">3</div>
    </div>
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="font-family:'Fira Code',monospace;font-size:.65rem;color:var(--muted);width:56px;text-align:right;padding-right:6px;">Row 1</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">4</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">5</div>
      <div class="idx-cell hl" style="min-width:44px;text-align:center;">6<div class="idx-num" style="color:var(--red-dark);">[1][2]</div></div>
    </div>
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="font-family:'Fira Code',monospace;font-size:.65rem;color:var(--muted);width:56px;text-align:right;padding-right:6px;">Row 2</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">7</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">8</div>
      <div class="idx-cell" style="min-width:44px;text-align:center;">9</div>
    </div>
    <div style="display:flex;gap:6px;margin-left:60px;">
      <div class="idx-num" style="min-width:44px;">Col 0</div>
      <div class="idx-num" style="min-width:44px;">Col 1</div>
      <div class="idx-num" style="min-width:44px;color:var(--red-dark);font-weight:700;">Col 2 ↑</div>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Index Formula</div>

  <div v-after style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="background:var(--red);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0;">i</div>
      <div class="body-text"><strong>Row index</strong> — selects which sub-array (row) to look at</div>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="background:var(--blue);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0;">j</div>
      <div class="body-text"><strong>Column index</strong> — selects the specific element within that row</div>
    </div>
  </div>

  <div v-click class="card card-orange" style="margin-top:6px;">
    <div class="small-text"><strong>Tip:</strong> C does <em>not</em> check array bounds at runtime. Accessing out-of-bounds indices causes <strong>undefined behaviour</strong> — always stay within <span class="mono">[0..ROWS-1][0..COLS-1]</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>