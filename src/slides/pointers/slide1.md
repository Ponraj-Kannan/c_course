---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS A POINTER?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is a <span class="highlight">Pointer?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">pointer</strong> is a <strong style="color:var(--green);">variable that stores the memory address</strong> of another variable — instead of holding a value directly, it "points to" where that value lives.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A pointer is like a house address written on a piece of paper. The paper isn't the house — it just tells you where to find it.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#6b7280;">// A normal variable and a pointer to it</span><br>
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>ptr = <span style="color:#ef5050;">&amp;</span>age;
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> Pointers let you work with memory directly — pass data efficiently, build dynamic structures, and modify variables from anywhere they're referenced.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Normal Variable vs Pointer</div>

  <div v-after class="mem-box">
    <div class="mem-header">Python Memory (RAM)</div>
    <div class="mem-row">
      <div class="mem-addr">0x7f3a</div>
      <div class="mem-name">age</div>
      <div class="mem-val">20</div>
      <div class="mem-type">int</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x9b1c</div>
      <div class="mem-name">ptr</div>
      <div class="mem-val">0x7f3a</div>
      <div class="mem-type">int*</div>
    </div>
  </div>

  <div v-click style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-top:8px;">
    <div style="background:#ebf8ff;border:2px solid var(--blue);border-radius:8px;padding:8px 20px;font-family:'Fira Code',monospace;font-size:.78rem;font-weight:700;color:#2b6cb0;">ptr</div>
    <div style="font-size:.65rem;color:var(--muted);">pointer variable</div>
    <div style="color:var(--muted);font-size:1.2rem;">↓ stores address</div>
    <div style="background:#f0f4ff;border:2px solid var(--navy-mid);border-radius:8px;padding:4px 14px;font-size:.62rem;color:var(--navy-mid);font-family:'Fira Code',monospace;">0x7f3a</div>
    <div style="color:var(--muted);font-size:1.2rem;">↓ points to</div>
    <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:8px 20px;font-family:'Fira Code',monospace;font-size:.85rem;font-weight:700;color:var(--green);">age = 20</div>
    <div style="font-size:.65rem;color:var(--muted);">actual variable</div>
  </div>

  <div v-click class="card card-orange" style="margin-top:6px;">
    <div class="small-text">A pointer's value is just an address — its <strong>size</strong> on most systems is fixed (4 or 8 bytes), regardless of what it points to!</div>
  </div>

</div>

</div>

  </template>
</Slide2>
