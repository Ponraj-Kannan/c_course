---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 12 — COMMON MISTAKES & BEST PRACTICES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common Mistakes &amp; <span class="highlight">Best Practices</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Frequent Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-hard">Off-by-one</span>
        <div class="body-text">Using <span class="mono">i &lt;= size</span> instead of <span class="mono">i &lt; size</span> in a loop</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-medium">Uninitialized</span>
        <div class="body-text">Reading array elements before assigning them a value (garbage data)</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-hard" style="text-align:center;">Dangling array</span>
        <div class="body-text">Returning the <strong>address of a local array</strong> from a function — it's destroyed once the function ends</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-medium" style="text-align:center;">Wrong sizeof</span>
        <div class="body-text">Using <span class="mono">sizeof(arr)</span> inside a function where <span class="mono">arr</span> is actually a pointer parameter</div>
      </div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Best Practices</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>❌ Avoid</th><th>✔ Do Instead</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono" style="color:var(--red-dark);">for (i=0; i&lt;=5; i++)</td><td class="mono" style="color:var(--green);">for (i=0; i&lt;5; i++)</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Hardcoding array length</td><td style="color:var(--green);">sizeof(arr)/sizeof(arr[0])</td></tr>
      <tr v-click><td style="color:var(--red-dark);">return localArr;</td><td style="color:var(--green);">Use malloc() or pass output array in</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Forgetting to pass size</td><td style="color:var(--green);">Always pass size as a parameter</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Golden Rule:</strong> An array's <strong>size never travels with it</strong> once passed to a function — the caller must always communicate it explicitly.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div>Compile with <span class="mono">-Wall -fsanitize=address</span> to catch many array bugs — bounds errors and uninitialized reads — before they cause silent corruption.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
