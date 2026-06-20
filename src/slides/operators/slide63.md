---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 30 — OPERATORS SUMMARY & REVIEW (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Operators — <span class="highlight">Summary & Review</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="section-label">What We Learned</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card card-red" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill pill-red">Arithmetic</span>
        <span class="small-text" style="color:var(--slate);">+  -  *  /  % — math on numbers</span>
      </div>
    </div>
    <div v-click class="card card-blue" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill pill-blue">Assignment</span>
        <span class="small-text" style="color:var(--slate);">=  +=  -=  *= — store & update values</span>
      </div>
    </div>
    <div v-click class="card card-orange" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill pill-orange">Relational</span>
        <span class="small-text" style="color:var(--slate);">==  !=  >  < — compare, return 0 or 1</span>
      </div>
    </div>
    <div v-click class="card card-green" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill pill-green">Logical</span>
        <span class="small-text" style="color:var(--slate);">&&  ||  ! — combine conditions</span>
      </div>
    </div>
    <div v-click class="card card-navy" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill pill-navy">Increment / Decrement</span>
        <span class="small-text" style="color:var(--slate);">++  -- — add or subtract 1</span>
      </div>
    </div>
    <div v-click class="card card-purple" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill pill-purple">Bitwise</span>
        <span class="small-text" style="color:var(--slate);">&  |  ^  ~  <<  >> — bit-level ops</span>
      </div>
    </div>
  </div>
</div>

<div class="flex-col">

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill" style="background:#fef9c3;color:#854d0e;">Ternary</span>
        <span class="small-text" style="color:var(--slate);">? : — compact if-else in one line</span>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill" style="background:#e6fffa;color:#234e52;">Special</span>
        <span class="small-text" style="color:var(--slate);">sizeof  &  *  cast — memory & pointers</span>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill" style="background:#faf5ff;color:#6b21a8;">Precedence</span>
        <span class="small-text" style="color:var(--slate);">Order of evaluation — use () when unsure</span>
      </div>
    </div>

  </div>

  <div v-click class="section-label" style="margin-top:4px;">Quick Reference Code</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">10</span>, <span style="color:#0e6ead;">b</span> = <span style="color:#b45309;">3</span>;<br>
    <span style="color:#0e6ead;">a</span> += <span style="color:#b45309;">5</span>;              <span style="color:#6b7280;">// Assignment: a = 15</span><br>
    <span style="color:#0e6ead;">a</span>++;                  <span style="color:#6b7280;">// Increment: a = 16</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">c</span> = <span style="color:#0e6ead;">a</span> > <span style="color:#0e6ead;">b</span> && <span style="color:#0e6ead;">b</span> != <span style="color:#b45309;">0</span>;  <span style="color:#6b7280;">// Logical: 1</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">m</span> = (<span style="color:#0e6ead;">a</span> > <span style="color:#0e6ead;">b</span>) ? <span style="color:#0e6ead;">a</span> : <span style="color:#0e6ead;">b</span>;   <span style="color:#6b7280;">// Ternary: 16</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%lu"</span>, <span style="color:#ef5050;">sizeof</span>(<span style="color:#0e6ead;">a</span>));    <span style="color:#6b7280;">// Special: 4</span>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div><strong>You're ready!</strong> Operators are the engine of every C program. Master them and you'll be able to write powerful, efficient logic at the hardware level!</div>
  </div>

</div>

</div>

  </template>
</Slide2>
