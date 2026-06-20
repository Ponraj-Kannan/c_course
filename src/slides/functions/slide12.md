---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 12 — SCOPE: LOCAL vs GLOBAL VARIABLES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Variable <span class="highlight">Scope</span> — Local vs Global</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">Local Variables</span>
  </div>

  <div v-after class="card-red" style="border-radius:10px;">
    <div style="font-size:.78rem;line-height:1.6;color:var(--slate);">Declared <strong>inside a function</strong>. Only accessible within that function. They are created when the function is called and destroyed when it returns.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.73rem;line-height:1.9;">
    <span style="color:#b45309;">void</span> <span style="color:#0e6ead;">foo</span>() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b45309;">int</span> <span style="color:#ef5050;">x</span> = <span style="color:#b45309;">5</span>; <span style="color:#6b7280;">// local to foo()</span><br>
    }<br>
    <span style="color:#6b7280;">// x is NOT accessible here</span>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:6px;">
    <span class="pill pill-green">Global Variables</span>
  </div>

  <div v-after class="card-green" style="border-radius:10px;">
    <div style="font-size:.78rem;line-height:1.6;color:var(--slate);">Declared <strong>outside all functions</strong>. Accessible by any function in the file. They exist for the entire lifetime of the program.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.73rem;line-height:1.9;">
    <span style="color:#b45309;">int</span> <span style="color:#2d7a00;">count</span> = <span style="color:#b45309;">0</span>; <span style="color:#6b7280;">// global</span><br>
    <span style="color:#b45309;">void</span> <span style="color:#0e6ead;">inc</span>() { <span style="color:#2d7a00;">count</span>++; }<br>
    <span style="color:#b45309;">void</span> <span style="color:#0e6ead;">show</span>() { <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#2d7a00;">count</span>); }
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Scope Comparison</div>

  <div v-after>
    <table class="cmp-table">
      <thead>
        <tr><th>Feature</th><th>Local</th><th>Global</th></tr>
      </thead>
      <tbody>
        <tr><td>Declared inside</td><td>Function body</td><td>Outside all functions</td></tr>
        <tr><td>Accessible by</td><td>That function only</td><td>All functions</td></tr>
        <tr><td>Lifetime</td><td>Function call</td><td>Whole program</td></tr>
        <tr><td>Default value</td><td class="no">Garbage (undefined)</td><td class="yes">0 (auto-initialized)</td></tr>
        <tr><td>Recommended?</td><td class="yes">✔ Preferred</td><td class="no">Use sparingly</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Shadow Warning:</strong> If a local variable has the same name as a global, the <strong>local one wins</strong> inside the function — it "shadows" the global.</div>
  </div>

  <div v-click class="card card-orange" style="margin-top:4px;">
    <div class="small-text"><strong>Best Practice:</strong> Prefer local variables. Overusing globals makes programs hard to debug and maintain — any function can accidentally change them!</div>
  </div>

</div>

</div>

  </template>
</Slide2>
