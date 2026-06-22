---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — ARRAY BOUNDS & COMMON ERRORS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Array <span class="highlight">Bounds</span> &amp; Common Errors</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      C performs <strong style="color:var(--red);">no automatic bounds checking</strong>. Accessing an index outside the valid range is <strong style="color:var(--green);">undefined behavior</strong> — it may crash, corrupt data, or appear to "work."
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> arr[<span style="color:#b45309;">5</span>] = {<span style="color:#b45309;">1</span>,<span style="color:#b45309;">2</span>,<span style="color:#b45309;">3</span>,<span style="color:#b45309;">4</span>,<span style="color:#b45309;">5</span>};<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, arr[<span style="color:#ef5050;">10</span>]); <span style="color:#6b7280;">// out of bounds!</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>No NameError, no crash guarantee:</strong> Unlike Python, C won't stop you — it reads whatever happens to be at that memory address, which is unpredictable.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Off-by-one is the classic bug:</strong> looping with <span class="mono">i &lt;= 5</span> instead of <span class="mono">i &lt; 5</span> reads one element past the end.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Valid vs Out-of-Bounds Access</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Access</th><th>Valid?</th><th>Why</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">arr[0]</td><td class="yes">✔ Valid</td><td>First element</td></tr>
      <tr v-click><td class="mono">arr[4]</td><td class="yes">✔ Valid</td><td>Last element (size - 1)</td></tr>
      <tr v-click><td class="mono">arr[5]</td><td class="no">✘ Invalid</td><td>One past the end</td></tr>
      <tr v-click><td class="mono">arr[-1]</td><td class="no">✘ Invalid</td><td>Negative index</td></tr>
      <tr v-click><td class="mono">arr[100]</td><td class="no">✘ Invalid</td><td>Far outside bounds</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Always loop with <span class="mono">i &lt; size</span>, and compute size with <span class="mono">sizeof(arr)/sizeof(arr[0])</span> rather than a hardcoded number.</div>
  </div>

  <div v-click class="card card-orange" style="margin-top:4px;">
    <div class="small-text"><strong>Tooling tip:</strong> Compile with <span class="mono">-fsanitize=address</span> to catch out-of-bounds access during testing.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
