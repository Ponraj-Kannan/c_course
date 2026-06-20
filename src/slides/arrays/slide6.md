---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — MULTIDIMENSIONAL ARRAYS: 2D ARRAY BASICS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Multidimensional Arrays — <span class="highlight">2D Array Basics</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">2D array</strong> is an array of arrays — think of it as a <strong style="color:var(--green);">grid with rows and columns</strong>, useful for tables, matrices, and game boards.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.1;">
    <span class="syn-keyword">type</span> <span class="syn-varname">arrayName</span>[<span class="syn-value">rows</span>][<span class="syn-value">cols</span>];
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;margin-top:4px;">
    <span style="color:#6b7280;">// A 3-row, 4-column grid</span><br>
    <span style="color:#0e6ead;">int</span> grid[<span style="color:#b45309;">3</span>][<span style="color:#b45309;">4</span>];
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>In memory, C stores 2D arrays in <strong>row-major order</strong> — the entire first row comes first, then the second row, and so on.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Mental Model: Rows & Columns</div>

  <div v-after style="display:flex;flex-direction:column;gap:6px;align-items:center;">
    <div style="display:flex;gap:6px;">
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">1</div><div class="idx-num">[0][0]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">2</div><div class="idx-num">[0][1]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">3</div><div class="idx-num">[0][2]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">4</div><div class="idx-num">[0][3]</div></div>
    </div>
    <div style="display:flex;gap:6px;">
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">5</div><div class="idx-num">[1][0]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">6</div><div class="idx-num">[1][1]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">7</div><div class="idx-num">[1][2]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">8</div><div class="idx-num">[1][3]</div></div>
    </div>
    <div style="display:flex;gap:6px;">
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">9</div><div class="idx-num">[2][0]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">10</div><div class="idx-num">[2][1]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">11</div><div class="idx-num">[2][2]</div></div>
      <div style="text-align:center;"><div class="idx-cell" style="min-width:30px;padding:6px 8px;font-size:.72rem;">12</div><div class="idx-num">[2][3]</div></div>
    </div>
  </div>
  <div v-click class="small-text" style="text-align:center;margin-top:4px;">grid[row][col] — 3 rows × 4 columns = 12 elements total</div>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div><strong>Row-major storage:</strong> Linear memory order is [0][0], [0][1], [0][2], [0][3], [1][0], [1][1]... — row by row.</div>
  </div>

</div>

</div>

  </template>
</Slide2>