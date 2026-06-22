---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — NAMING CONVENTIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Naming <span class="highlight">Conventions</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Naming conventions are <strong style="color:var(--red);">not enforced by the compiler</strong> — but following them makes code <strong style="color:var(--green);">readable, consistent, and professional</strong>.
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-green">snake_case</span>
        <div>
          <div class="body-text">Words joined by underscores — most common in C</div>
          <div style="font-family:'Fira Code',monospace;font-size:.7rem;color:var(--green);margin-top:2px;">total_marks &nbsp; student_name &nbsp; max_value</div>
        </div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-navy">UPPER_CASE</span>
        <div>
          <div class="body-text">All caps with underscores — used for constants / macros</div>
          <div style="font-family:'Fira Code',monospace;font-size:.7rem;color:var(--navy-mid);margin-top:2px;">MAX_SIZE &nbsp; PI &nbsp; BUFFER_LEN</div>
        </div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-blue">camelCase</span>
        <div>
          <div class="body-text">First word lowercase, subsequent words capitalised</div>
          <div style="font-family:'Fira Code',monospace;font-size:.7rem;color:var(--blue);margin-top:2px;">totalScore &nbsp; studentAge &nbsp; fileName</div>
        </div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-orange">PascalCase</span>
        <div>
          <div class="body-text">Every word capitalised — used for structs and typedefs</div>
          <div style="font-family:'Fira Code',monospace;font-size:.7rem;color:var(--orange);margin-top:2px;">StudentRecord &nbsp; NodeList &nbsp; BankAccount</div>
        </div>
      </div>
    </div>

  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Convention by Entity Type</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Entity</th><th>Convention</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Variables</td><td>snake_case</td><td class="mono">student_age</td></tr>
      <tr v-click><td>Functions</td><td>snake_case</td><td class="mono">get_total()</td></tr>
      <tr v-click><td>Constants / Macros</td><td>UPPER_CASE</td><td class="mono">MAX_SIZE</td></tr>
      <tr v-click><td>Structs / Typedefs</td><td>PascalCase</td><td class="mono">StudentRecord</td></tr>
      <tr v-click><td>Pointers</td><td>prefix p_</td><td class="mono">p_node</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Consistency wins:</strong> Pick one style and stick to it throughout your project — mixing conventions in the same codebase is harder to read than any single convention.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
