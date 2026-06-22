---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — DERIVED TYPES: STRUCTURES & UNIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Derived Types — <span class="highlight">Structures</span> &amp; <span class="highlight">Unions</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-navy">struct — All members exist together</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">struct</span> Student {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span>  id;     <span style="color:#6b7280;">// 4 bytes</span><br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">float</span> gpa;   <span style="color:#6b7280;">// 4 bytes</span><br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">char</span>  grade; <span style="color:#6b7280;">// 1 byte</span><br>
    }; <span style="color:#6b7280;">// total ≥ 9 bytes (padding may add more)</span>
  </div>

  <div v-click class="mem-box" style="margin-top:4px;">
    <div class="mem-header">struct Student — each member has own space</div>
    <div class="mem-row"><div class="mem-name">id</div><div class="mem-val">101</div><div class="mem-type">4 B</div></div>
    <div class="mem-row"><div class="mem-name">gpa</div><div class="mem-val">8.75</div><div class="mem-type">4 B</div></div>
    <div class="mem-row"><div class="mem-name">grade</div><div class="mem-val">'A'</div><div class="mem-type">1 B</div></div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-orange">union — All members share one space</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">union</span> Data {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span>   i; <span style="color:#6b7280;">// 4 bytes</span><br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">float</span> f; <span style="color:#6b7280;">// 4 bytes</span><br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">char</span>  c; <span style="color:#6b7280;">// 1 byte</span><br>
    }; <span style="color:#6b7280;">// total = 4 bytes (largest member)</span>
  </div>

  <div v-click class="mem-box" style="margin-top:4px;">
    <div class="mem-header">union Data — all share same 4 bytes</div>
    <div class="mem-row"><div class="mem-name">i / f / c</div><div class="mem-val">shared</div><div class="mem-type">4 B</div></div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Only one member at a time:</strong> Writing to <span class="mono">u.i</span> then reading <span class="mono">u.f</span> gives garbage — in a union, only the <strong>last written member</strong> is valid.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><strong>struct</strong> size = sum of all members (+ padding). <strong>union</strong> size = size of the <em>largest</em> member only.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
