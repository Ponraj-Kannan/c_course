---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — DECLARATION & INITIALIZATION
═══════════════════════════════════════════════════════ -->

<Slide2 topic="2D Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Declaration</span> &amp; <span class="highlight">Initialization</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span style="color:#b45309;">data_type</span> <span style="color:#0e6ead;">array_name</span><span style="color:#ef5050;">[</span><span style="color:#2d7a00;">ROWS</span><span style="color:#ef5050;">][</span><span style="color:#c49a00;">COLS</span><span style="color:#ef5050;">]</span>;
  </div>

  <div v-click style="margin-top:4px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">data_type</span>
      <span class="body-text">Type of each element: <span class="mono">int</span>, <span class="mono">float</span>, <span class="mono">char</span>…</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">array_name</span>
      <span class="body-text">Identifier following C naming rules</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">ROWS</span>
      <span class="body-text">Number of rows — <strong>must be a constant</strong></span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">COLS</span>
      <span class="body-text">Number of columns — <strong>must be a constant</strong></span>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Ways to Initialize</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.73rem;line-height:2.1;">
    <span style="color:#6b7280;">// Method 1: Row-wise braces (recommended)</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">mat</span>[<span style="color:#2d7a00;">3</span>][<span style="color:#c49a00;">3</span>] = {<br>
    &nbsp;&nbsp;{<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>},<br>
    &nbsp;&nbsp;{<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>, <span style="color:#b45309;">6</span>},<br>
    &nbsp;&nbsp;{<span style="color:#b45309;">7</span>, <span style="color:#b45309;">8</span>, <span style="color:#b45309;">9</span>}<br>
    };<br><br>
    <span style="color:#6b7280;">// Method 2: Flat list (C fills row by row)</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">mat</span>[<span style="color:#2d7a00;">3</span>][<span style="color:#c49a00;">3</span>] = {<span style="color:#b45309;">1</span>,<span style="color:#b45309;">2</span>,<span style="color:#b45309;">3</span>,<span style="color:#b45309;">4</span>,<span style="color:#b45309;">5</span>,<span style="color:#b45309;">6</span>,<span style="color:#b45309;">7</span>,<span style="color:#b45309;">8</span>,<span style="color:#b45309;">9</span>};<br><br>
    <span style="color:#6b7280;">// Method 3: Partial init — rest become 0</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">mat</span>[<span style="color:#2d7a00;">3</span>][<span style="color:#c49a00;">3</span>] = {<span style="color:#b45309;">0</span>};
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Visualizing a 3×3 Initialized Array</div>

  <div v-after style="display:flex;flex-direction:column;gap:4px;margin-top:4px;">
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="font-family:'Fira Code',monospace;font-size:.65rem;color:var(--muted);width:60px;text-align:right;padding-right:6px;">mat[0]</div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">1<div class="idx-num">[0][0]</div></div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">2<div class="idx-num">[0][1]</div></div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">3<div class="idx-num">[0][2]</div></div>
    </div>
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="font-family:'Fira Code',monospace;font-size:.65rem;color:var(--muted);width:60px;text-align:right;padding-right:6px;">mat[1]</div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">4<div class="idx-num">[1][0]</div></div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">5<div class="idx-num">[1][1]</div></div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">6<div class="idx-num">[1][2]</div></div>
    </div>
    <div style="display:flex;gap:6px;align-items:center;">
      <div style="font-family:'Fira Code',monospace;font-size:.65rem;color:var(--muted);width:60px;text-align:right;padding-right:6px;">mat[2]</div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">7<div class="idx-num">[2][0]</div></div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">8<div class="idx-num">[2][1]</div></div>
      <div class="idx-cell" style="min-width:42px;text-align:center;">9<div class="idx-num">[2][2]</div></div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div><strong>Total elements</strong> = ROWS × COLS. A <span class="mono">3×3</span> array stores <strong>9</strong> integers = 9 × 4 = <strong>36 bytes</strong> in memory.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Important:</strong> In C, you <strong>must always</strong> specify the number of columns when declaring a 2D array. The row count can sometimes be omitted during initialization, but columns never can.</div>
  </div>

  <div v-click class="card card-green" style="margin-top:4px;">
    <div class="small-text"><strong>Uninitialized local 2D arrays</strong> contain <em>garbage values</em>. Always initialize or zero-fill before use!</div>
  </div>

</div>

</div>

  </template>
</Slide2>