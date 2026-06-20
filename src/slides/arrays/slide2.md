---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — DECLARING & INITIALIZING ARRAYS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Declaring &amp; <span class="highlight">Initializing</span> Arrays</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax Structure</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">type</span> <span class="syn-varname">arrayName</span>[<span class="syn-value">size</span>];
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">type</span>
      <span class="body-text">Data type shared by all elements (int, float, char...)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">arrayName</span>
      <span class="body-text">Identifier used to refer to the whole array</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">size</span>
      <span class="body-text">Number of elements — must be a constant</span>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Uninitialized elements</strong> hold <strong>garbage values</strong> — always initialize before reading, or explicitly zero them out.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Initialization Styles</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:2;">
    <span style="color:#6b7280;"># 1. Declare then assign later</span><br>
    <span style="color:#0e6ead;">int</span> nums[<span style="color:#b45309;">3</span>];<br>
    <span style="color:#6b7280;"># 2. Declare + initialize together</span><br>
    <span style="color:#0e6ead;">int</span> nums[<span style="color:#b45309;">3</span>] = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>};<br>
    <span style="color:#6b7280;"># 3. Size inferred from values</span><br>
    <span style="color:#0e6ead;">int</span> nums[] = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>};<br>
    <span style="color:#6b7280;"># 4. Partial init — rest become 0</span><br>
    <span style="color:#0e6ead;">int</span> nums[<span style="color:#b45309;">5</span>] = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>};
  </div>

  <div v-click class="mem-box" style="margin-top:6px;">
    <div class="mem-header">Partial Init: int nums[5] = {10, 20}</div>
    <div class="mem-row">
      <div class="mem-name">nums[0]</div>
      <div class="mem-val">10</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">nums[1]</div>
      <div class="mem-val">20</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">nums[2..4]</div>
      <div class="mem-val" style="color:var(--muted);">0 (default)</div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
