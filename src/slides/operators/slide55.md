---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 26 — BITWISE OPERATORS (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Bitwise <span class="highlight">Operators</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Bitwise operators</strong> work directly on the <strong>binary (bit-level) representation</strong> of integers. They are extremely fast and widely used in systems programming, graphics, and embedded systems.
    </div>
  </div>

  <div>
   <div v-click class="section-label" style="margin-top:8px;">Truth Table</div>
    <table class="cmp-table" style="font-size:.7rem;margin-top:6px;">
      <thead v-click><tr><th>Operator</th><th>Name</th><th>Example (a=5, b=3)</th><th>Result</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&</td><td>Bitwise AND</td><td class="mono">5 & 3</td><td class="mono yes">1</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">|</td><td>Bitwise OR</td><td class="mono">5 | 3</td><td class="mono yes">7</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">^</td><td>Bitwise XOR</td><td class="mono">5 ^ 3</td><td class="mono yes">6</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">~</td><td>Bitwise NOT</td><td class="mono">~5</td><td class="mono no">-6</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&lt;&lt;</td><td>Left Shift</td><td class="mono">5 << 1</td><td class="mono yes">10</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&gt;&gt;</td><td>Right Shift</td><td class="mono">5 >> 1</td><td class="mono yes">2</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Bit-Level Visualization</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.71rem;line-height:1.85;">
    <span style="color:#6b7280;">// 5 in binary = 0101</span><br>
    <span style="color:#6b7280;">// 3 in binary = 0011</span><br>
    <br>
    <span style="color:#6b7280;">// AND: both bits must be 1</span><br>
    <span style="color:#6b7280;">// 0101 & 0011 = 0001 → 1</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#b45309;">5</span> & <span style="color:#b45309;">3</span>);   <span style="color:#6b7280;">// 1</span><br>
    <br>
    <span style="color:#6b7280;">// OR: at least one bit must be 1</span><br>
    <span style="color:#6b7280;">// 0101 | 0011 = 0111 → 7</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#b45309;">5</span> | <span style="color:#b45309;">3</span>);   <span style="color:#6b7280;">// 7</span><br>
    <br>
    <span style="color:#6b7280;">// Left shift: multiply by 2</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#b45309;">5</span> << <span style="color:#b45309;">1</span>);  <span style="color:#6b7280;">// 10 (5 × 2)</span><br>
    <br>
    <span style="color:#6b7280;">// Right shift: divide by 2</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#b45309;">5</span> >> <span style="color:#b45309;">1</span>);  <span style="color:#6b7280;">// 2 (5 ÷ 2)</span>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><strong>Tip:</strong> Left shift (<span class="mono">&lt;&lt; n</span>) multiplies by <span class="mono">2ⁿ</span>. Right shift (<span class="mono">>> n</span>) divides by <span class="mono">2ⁿ</span>. These are faster than arithmetic multiplication!</div>
  </div>

  <div v-click class="card card-purple" style="margin-top:6px;">
    <div class="small-text"><strong>Real-world use:</strong> Setting/clearing hardware flags, graphics pixel operations, fast multiply/divide, encryption algorithms, permissions/masks</div>
  </div>

</div>

</div>

  </template>
</Slide2>
