---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — COMMON PITFALLS & BEST PRACTICES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common Pitfalls &amp; <span class="highlight">Best Practices</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Dangerous Pointer Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-hard">Wild</span>
        <div class="body-text">Uninitialized pointer — points to a <strong>random address</strong>; dereferencing it is undefined behavior</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-hard">Dangling</span>
        <div class="body-text">Points to memory that has been <strong>freed</strong> or gone out of scope — using it crashes or corrupts data</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-medium">Leak</span>
        <div class="body-text">Allocated memory (<span class="mono">malloc</span>) that's <strong>never freed</strong> — wastes memory over time</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="badge-medium">Null</span>
        <div class="body-text">Dereferencing a <span class="mono">NULL</span> pointer — typically crashes the program immediately</div>
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
      <tr v-click><td class="mono" style="color:var(--red-dark);">int *p;</td><td class="mono" style="color:var(--green);">int *p = NULL;</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Using p after free(p)</td><td style="color:var(--green);">Set p = NULL right after freeing</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Forgetting free()</td><td style="color:var(--green);">Pair every malloc() with a free()</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Dereferencing without checks</td><td style="color:var(--green);">Always check <span class="mono">if (p != NULL)</span></td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Golden Rule:</strong> A pointer should always be in one of three states — <strong>NULL</strong>, pointing to a <strong>valid object</strong>, or about to be <strong>set to one</strong>. Never "just floating."</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div>Tools like <strong>Valgrind</strong> and compiler sanitizers (<span class="mono">-fsanitize=address</span>) help catch pointer bugs during development.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
