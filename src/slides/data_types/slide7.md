---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — DERIVED TYPES: ARRAYS & POINTERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Derived Types — <span class="highlight">Arrays</span> &amp; <span class="highlight">Pointers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Derived types</strong> are built from basic types — they don't introduce new kinds of data, but organize or reference existing data in new ways.
    </div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:8px;margin-bottom:4px;">
    <span class="pill pill-blue">Arrays</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> marks[<span style="color:#b45309;">5</span>] = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};<br>
    <span style="color:#6b7280;">// contiguous block of 5 ints = 20 bytes</span>
  </div>

  <div v-click class="mem-box" style="margin-top:4px;">
    <div class="mem-header">int marks[5] — 20 bytes total</div>
    <div class="mem-row">
      <div class="mem-name">marks[0]</div><div class="mem-val">90</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">marks[1]</div><div class="mem-val">85</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">marks[2..4]</div><div class="mem-val">78, 92, 88</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>An array's total size = <span class="mono">sizeof(element_type)</span> × <span class="mono">number_of_elements</span>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">Pointers</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span>  x   = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">int</span> *ptr = &amp;x;  <span style="color:#6b7280;">// ptr holds address of x</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%d</span>"</span>, *ptr);   <span style="color:#6b7280;">// dereference → 10</span>
  </div>

  <div v-click class="mem-box" style="margin-top:4px;">
    <div class="mem-header">Pointer in Memory</div>
    <div class="mem-row">
      <div class="mem-addr">0x200</div>
      <div class="mem-name">ptr</div>
      <div class="mem-val">0x100</div>
      <div class="mem-type">int*</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x100</div>
      <div class="mem-name">x</div>
      <div class="mem-val">10</div>
      <div class="mem-type">int</div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div>Both arrays and pointers are built on top of basic types — the <strong>base type</strong> determines how many bytes are read when the data is accessed.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
