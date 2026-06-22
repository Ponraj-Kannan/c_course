---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — TYPES OF IDENTIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Types of <span class="highlight">Identifiers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      In C, identifiers are used to name <strong style="color:var(--red);">six categories</strong> of program entities — each with its own purpose and naming conventions.
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-red">Variables</span>
        <div class="body-text">Named memory locations — <span class="mono" style="color:var(--red-dark);">int count; float price;</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-blue">Functions</span>
        <div class="body-text">Named blocks of reusable code — <span class="mono" style="color:var(--blue);">void display(); int add();</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-green">Arrays</span>
        <div class="body-text">Named collections of same-type elements — <span class="mono" style="color:var(--green);">int marks[5];</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-orange">Pointers</span>
        <div class="body-text">Named address variables — <span class="mono" style="color:var(--orange);">int *ptr; char *name;</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-navy">Structures</span>
        <div class="body-text">Named user-defined types — <span class="mono" style="color:var(--navy-mid);">struct Student { ... };</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:center;">
        <span class="pill pill-blue">Typedefs</span>
        <div class="body-text">Aliases for existing types — <span class="mono" style="color:var(--blue);">typedef unsigned int uint;</span></div>
      </div>
    </div>

  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">All in One Program</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#6b7280;">// variable identifier</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">count</span> = <span style="color:#b45309;">0</span>;<br>
    <br>
    <span style="color:#6b7280;">// array identifier</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">marks</span>[<span style="color:#b45309;">5</span>];<br>
    <br>
    <span style="color:#6b7280;">// pointer identifier</span><br>
    <span style="color:#0e6ead;">int</span> *<span style="color:#ef5050;">ptr</span> = &amp;count;<br>
    <br>
    <span style="color:#6b7280;">// structure identifier</span><br>
    <span style="color:#0e6ead;">struct</span> <span style="color:#ef5050;">Student</span> { <span style="color:#0e6ead;">int</span> id; };<br>
    <br>
    <span style="color:#6b7280;">// typedef identifier</span><br>
    <span style="color:#0e6ead;">typedef</span> <span style="color:#0e6ead;">unsigned int</span> <span style="color:#ef5050;">uint</span>;<br>
    <br>
    <span style="color:#6b7280;">// function identifier</span><br>
    <span style="color:#0e6ead;">void</span> <span style="color:#ef5050;">display</span>() { ... }
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>Each highlighted name in the code above is an identifier — they all follow the same naming rules, just used for different purposes.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
