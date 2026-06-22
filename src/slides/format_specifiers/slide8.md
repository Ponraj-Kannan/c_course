---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — COMMON MISTAKES & BEST PRACTICES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common Mistakes &amp; <span class="highlight">Best Practices</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Frequent Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Type mismatch</span>
        <div class="body-text">Using <span class="mono">%d</span> for a <span class="mono">float</span> — reads wrong bytes, prints garbage</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Missing &amp;</span>
        <div class="body-text"><span class="mono">scanf("%d", n)</span> instead of <span class="mono">scanf("%d", &amp;n)</span> — segfault</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">%s overflow</span>
        <div class="body-text"><span class="mono">scanf("%s", buf)</span> with no width — reads beyond buffer, corrupts memory</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Wrong length</span>
        <div class="body-text">Using <span class="mono">%d</span> for <span class="mono">long long</span> — must use <span class="mono">%lld</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">%lf in printf</span>
        <div class="body-text">Harmless in <span class="mono">printf</span>, but <span class="mono">%f</span> is sufficient — reserve <span class="mono">%lf</span> for <span class="mono">scanf</span></div>
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
      <tr v-click><td class="mono" style="color:var(--red-dark);">printf("%d", 3.14)</td><td class="mono" style="color:var(--green);">printf("%f", 3.14)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">scanf("%d", n)</td><td class="mono" style="color:var(--green);">scanf("%d", &amp;n)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">scanf("%s", buf)</td><td class="mono" style="color:var(--green);">scanf("%19s", buf)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">printf("%d", ll_var)</td><td class="mono" style="color:var(--green);">printf("%lld", ll_var)</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Compiler tip:</strong> Always compile with <span class="mono">-Wall -Wformat</span> — GCC will warn when a format specifier doesn't match the argument's actual type.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Format specifier mismatches are <strong>undefined behavior</strong> in C — the program may appear to work on one machine and crash on another.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
