---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — PASSING ARRAYS TO FUNCTIONS: 2D
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Passing Arrays to Functions — <span class="highlight">2D</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      For a 2D array parameter, the <strong style="color:var(--red);">column size is required</strong> — the compiler needs it to calculate the memory offset for each row.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> printGrid(<span style="color:#0e6ead;">int</span> g[][<span style="color:#b45309;">3</span>], <span style="color:#0e6ead;">int</span> rows) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> r = <span style="color:#b45309;">0</span>; r &lt; rows; r++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> c = <span style="color:#b45309;">0</span>; c &lt; <span style="color:#b45309;">3</span>; c++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, g[r][c]);<br>
    }
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Row size is optional, column size is NOT:</strong> <span class="mono">int g[][3]</span> compiles, but <span class="mono">int g[][]</span> does not — C must know how many columns to skip per row.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Why Column Size is Mandatory</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <div style="background:#f0f4ff;border:2px solid var(--navy-mid);border-radius:8px;padding:6px 16px;font-size:.68rem;color:var(--navy-mid);font-family:'Fira Code',monospace;">g[1][0] address = base + (1 × 3 + 0) × 4</div>
    <div style="color:var(--muted);font-size:.65rem;">row index × column count + col index, scaled by element size</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:10px;">
    <div>Without knowing the column count, the compiler <strong>cannot compute</strong> how far to jump for each row — that's why it's a required part of the type.</div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Calling the Function</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> grid[<span style="color:#b45309;">2</span>][<span style="color:#b45309;">3</span>] = {<span style="color:#b45309;">1</span>,<span style="color:#b45309;">2</span>,<span style="color:#b45309;">3</span>},{<span style="color:#b45309;">4</span>,<span style="color:#b45309;">5</span>,<span style="color:#b45309;">6</span>};<br>
    printGrid(grid, <span style="color:#b45309;">2</span>);
  </div>

</div>

</div>

  </template>
</Slide2>
