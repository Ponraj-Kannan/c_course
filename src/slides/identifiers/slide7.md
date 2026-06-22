---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — BEST PRACTICES & COMMON MISTAKES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Best Practices &amp; Common <span class="highlight">Mistakes</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Common Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Keyword clash</span>
        <div class="body-text">Using <span class="mono">int</span>, <span class="mono">for</span>, or <span class="mono">return</span> as a variable name — compile error</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Case confusion</span>
        <div class="body-text">Treating <span class="mono">Score</span> and <span class="mono">score</span> as the same — they are different identifiers in C</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Meaningless names</span>
        <div class="body-text">Single-letter names like <span class="mono">a</span>, <span class="mono">x</span>, <span class="mono">q</span> — hard to understand without context</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Leading double __</span>
        <div class="body-text">Names starting with <span class="mono">__</span> or <span class="mono">_X</span> are reserved for the compiler — avoid using them</div>
      </div>
    </div>

  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Good vs Bad Naming</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>❌ Bad Name</th><th>✔ Good Name</th><th>Why Better</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono" style="color:var(--red-dark);">x</td><td class="mono" style="color:var(--green);">student_age</td><td>Descriptive</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">fn1</td><td class="mono" style="color:var(--green);">calculate_tax</td><td>Reveals intent</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">data</td><td class="mono" style="color:var(--green);">sales_records</td><td>Context clear</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">temp2</td><td class="mono" style="color:var(--green);">swap_buffer</td><td>Purpose obvious</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">int</td><td class="mono" style="color:var(--green);">count</td><td>Not a keyword</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Avoid look-alike names:</strong> Names like <span class="mono">l</span> (lowercase L) and <span class="mono">1</span> (one), or <span class="mono">O</span> (uppercase O) and <span class="mono">0</span> (zero) are visually indistinguishable in many fonts.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div><strong>Golden Rule:</strong> A good identifier name tells you <em>what</em> it stores or <em>what</em> it does — without needing a comment to explain it.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
