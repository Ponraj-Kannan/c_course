---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — POINTER ARITHMETIC
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Pointer <span class="highlight">Arithmetic</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      When you add <span style="color:var(--red);font-weight:700;">1</span> to a pointer, it doesn't move by 1 byte — it moves by <strong style="color:var(--green);">sizeof(type)</strong> bytes, jumping to the <em>next element</em> of that type.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> arr[] = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p = arr;  <span style="color:#6b7280;">// p points to arr[0]</span><br>
    p<span style="color:#ef5050;">++</span>;  <span style="color:#6b7280;">// p now points to arr[1]</span>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Supported Operations</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ OK</div>
      <div class="body-text"><span class="mono">p + 1</span>, <span class="mono">p - 1</span>, <span class="mono">p++</span>, <span class="mono">p--</span> — move between elements</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔ OK</div>
      <div class="body-text"><span class="mono">p2 - p1</span> — distance between two pointers (in elements)</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✘ NO</div>
      <div class="body-text"><span class="mono">p1 + p2</span> — adding two pointers is meaningless and disallowed</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">How the Address Jumps</div>

  <div v-after class="mem-box">
    <div class="mem-header">int arr[3] = {10, 20, 30}</div>
    <div class="mem-row">
      <div class="mem-addr">0x100</div>
      <div class="mem-name">arr[0]</div>
      <div class="mem-val">10</div>
      <div class="mem-type">p</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x104</div>
      <div class="mem-name">arr[1]</div>
      <div class="mem-val">20</div>
      <div class="mem-type">p+1</div>
    </div>
    <div class="mem-row">
      <div class="mem-addr">0x108</div>
      <div class="mem-name">arr[2]</div>
      <div class="mem-val">30</div>
      <div class="mem-type">p+2</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Since <span class="mono">int</span> is 4 bytes, <span class="mono">p + 1</span> moves the address by <strong>4</strong>, not 1 — from <span class="mono">0x100</span> to <span class="mono">0x104</span>.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Out-of-bounds danger:</strong> <span class="mono">p + 5</span> on a 3-element array reads memory <strong>outside</strong> the array — undefined behavior, no automatic bounds checking in C.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
