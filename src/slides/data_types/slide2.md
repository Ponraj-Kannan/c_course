---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — INTEGER TYPE: INT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Integer Type — <span class="highlight">int</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono" style="color:var(--red);">int</span> stores <strong style="color:var(--green);">whole numbers</strong> — positive, negative, or zero. It is the most commonly used data type in C.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Declaration & Initialization</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">int</span> count = <span style="color:#b45309;">0</span>;<br>
    <span style="color:#0e6ead;">int</span> temperature = <span style="color:#b45309;">-5</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Age: <span style="color:#ef5050;">%d</span>"</span>, age);
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Key Properties</div>
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">Size</span>
      <span class="body-text">Typically <strong>4 bytes</strong> (32 bits) on modern systems</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">Range</span>
      <span class="body-text"><strong>−2,147,483,648</strong> to <strong>2,147,483,647</strong></span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">Format</span>
      <span class="body-text"><span class="mono">%d</span> for printf/scanf</span>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Memory Diagram</div>

  <div v-after class="mem-box">
    <div class="mem-header">int age = 20 (4 bytes)</div>
    <div class="mem-row">
      <div class="mem-addr">0x100</div>
      <div class="mem-name">age</div>
      <div class="mem-val">20</div>
      <div class="mem-type">int</div>
    </div>
  </div>

  <div v-click style="margin-top:8px;">
    <div class="section-label" style="margin-bottom:6px;">Bit Representation</div>
    <div style="display:flex;gap:2px;flex-wrap:wrap;justify-content:center;">
      <div v-click style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#f0fff4;border:1px solid var(--green);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--green);">0</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">0</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">0</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">0</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">1</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">0</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">1</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">0</div>
      <div v-after style="background:#ebf8ff;border:1px solid var(--blue);border-radius:4px;padding:4px 7px;font-family:'Fira Code',monospace;font-size:.65rem;color:var(--blue);">0</div>
    </div>
    <div style="font-size:.6rem;color:var(--muted);text-align:center;margin-top:4px;">32-bit representation of 20 (shown partially)</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Integer overflow:</strong> Storing a value beyond the range (e.g. 2,147,483,648 in a signed int) wraps around silently — no error, just wrong results.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
