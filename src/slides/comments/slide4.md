---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — RULES & BEST PRACTICES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Comments in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Comment <span class="highlight">Rules</span> &amp; Best Practices</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Rules to Remember</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 1</div>
      <div class="body-text">Comments are <strong>ignored by the compiler</strong> — they have zero effect on program execution</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 2</div>
      <div class="body-text">Multi-line comments <strong>cannot be nested</strong> — only one <span class="mono">/* */</span> pair at a time</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 3</div>
      <div class="body-text"><span class="mono">//</span> comments <strong>cannot appear inside</strong> a string literal and still act as comments</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 4</div>
      <div class="body-text">Comments can be placed <strong>almost anywhere</strong> whitespace is allowed in code</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">RULE 5</div>
      <div class="body-text">An <strong>unterminated</strong> <span class="mono">/*</span> comment causes a compile-time error</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Good vs Bad Commenting</div>

  <div>
    <table class="cmp-table">
      <thead v-click>
        <tr><th>❌ Bad Practice</th><th>✔ Good Practice</th></tr>
      </thead>
      <tbody>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-size:.68rem;">// adds 1 to x<br>x = x + 1;</td><td class="mono" style="color:var(--green);font-size:.68rem;">// reset retry counter<br>x = x + 1;</td></tr>
        <tr v-click><td style="color:var(--red-dark);">Restates the obvious code</td><td style="color:var(--green);">Explains the <em>why</em>, not the <em>what</em></td></tr>
        <tr v-click><td style="color:var(--red-dark);">Left outdated after edits</td><td style="color:var(--green);">Updated whenever code changes</td></tr>
        <tr v-click><td style="color:var(--red-dark);">Overused on every line</td><td style="color:var(--green);">Used where logic isn't obvious</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Golden Rule:</strong> Good comments explain <em>intent</em> and <em>reasoning</em> — well-named variables and functions should explain the rest.</div>
  </div>

  <div v-click class="card card-blue" style="margin-top:4px;">
    <div class="small-text"><strong>Tip:</strong> Use multi-line comments for file/function headers and <span class="mono">//</span> for quick inline notes.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
