---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS AN ARRAY?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is an <span class="highlight">Array?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An <strong style="color:var(--red);">array</strong> is a <strong style="color:var(--green);">collection of elements</strong> of the same data type, stored in <strong>contiguous memory locations</strong> and accessed using a single name with an index.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> An array is like a row of numbered lockers — same size, side by side, each holding one item, accessed by its locker number.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#6b7280;">// An array of 5 integers</span><br>
    <span style="color:#0e6ead;">int</span> marks[<span style="color:#b45309;">5</span>] = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> Without arrays, storing 100 values would need 100 separate variable names — arrays let you manage them as one unit.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Array in Memory</div>

  <div v-after class="mem-box">
    <div class="mem-header">int marks[5]</div>
    <div class="mem-row">
      <div class="mem-addr">0x100</div>
      <div class="mem-name">marks[0]</div>
      <div class="mem-val">90</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x104</div>
      <div class="mem-name">marks[1]</div>
      <div class="mem-val">85</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x108</div>
      <div class="mem-name">marks[2]</div>
      <div class="mem-val">78</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x10C</div>
      <div class="mem-name">marks[3]</div>
      <div class="mem-val">92</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x110</div>
      <div class="mem-name">marks[4]</div>
      <div class="mem-val">88</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>All elements sit <strong>side by side</strong> in memory — each <span class="mono">int</span> takes 4 bytes, so addresses increase by 4 each time.</div>
  </div>

  <div v-click class="card card-orange" style="margin-top:4px;">
    <div class="small-text"><strong>Fixed size:</strong> Once declared, a standard C array's size cannot grow or shrink at runtime.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
