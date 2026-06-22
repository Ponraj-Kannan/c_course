---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — INITIALIZING & ACCESSING 2D ARRAYS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Initializing</span> &amp; <span class="highlight">Accessing</span> 2D Arrays</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Initialization</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> grid[<span style="color:#b45309;">2</span>][<span style="color:#b45309;">3</span>] = {<br>
    &nbsp;&nbsp;{<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>},  <span style="color:#6b7280;">// row 0</span><br>
    &nbsp;&nbsp;{<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>, <span style="color:#b45309;">6</span>}   <span style="color:#6b7280;">// row 1</span><br>
    };
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Accessing an Element</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, grid[<span style="color:#b45309;">1</span>][<span style="color:#b45309;">2</span>]); <span style="color:#6b7280;">// 6</span>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><span class="mono">grid[1][2]</span> means: go to row index <strong>1</strong>, then column index <strong>2</strong> within that row.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Traversing with Nested Loops</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> r = <span style="color:#b45309;">0</span>; r &lt; <span style="color:#b45309;">2</span>; r++) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> c = <span style="color:#b45309;">0</span>; c &lt; <span style="color:#b45309;">3</span>; c++) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, grid[r][c]);<br>
    &nbsp;&nbsp;}<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"\\n"</span>);<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.6;">1 &nbsp; 2 &nbsp; 3<br>4 &nbsp; 5 &nbsp; 6</div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div>The <strong>outer loop</strong> moves through rows; the <strong>inner loop</strong> moves through columns within the current row.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Beginner Trap:</strong> Swapping the loop bounds (using row count for the column loop or vice versa) causes out-of-bounds access on non-square grids.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
