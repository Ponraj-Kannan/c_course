---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS A DATA TYPE?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is a <span class="highlight">Data Type?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">data type</strong> tells the compiler <strong style="color:var(--green);">what kind of value</strong> a variable holds and <strong style="color:var(--green);">how much memory</strong> to allocate for it.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A data type is like a container shape — a cup holds liquids, a box holds solids. You can't pour water into a box; similarly, a <span class="mono">char</span> variable can't hold a decimal number properly.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">int</span>    age   = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">float</span>  gpa   = <span style="color:#b45309;">8.75</span>;<br>
    <span style="color:#0e6ead;">char</span>   grade = <span style="color:#2d7a00;">'A'</span>;<br>
    <span style="color:#0e6ead;">double</span> pi    = <span style="color:#b45309;">3.14159265</span>;
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> Every variable in C must have a type declared at compile time — C is a <strong>statically typed</strong> language. The type is fixed and cannot change.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">C Data Type Categories</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">Basic</div>
      <div class="body-text"><span class="mono">int</span>, <span class="mono">float</span>, <span class="mono">double</span>, <span class="mono">char</span>, <span class="mono">void</span> — built into the language</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">Modified</div>
      <div class="body-text"><span class="mono">short</span>, <span class="mono">long</span>, <span class="mono">signed</span>, <span class="mono">unsigned</span> — alter size or range of basic types</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">Derived</div>
      <div class="body-text"><span class="mono">arrays</span>, <span class="mono">pointers</span>, <span class="mono">structs</span>, <span class="mono">unions</span> — built from basic types</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--orange);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">User-defined</div>
      <div class="body-text"><span class="mono">typedef</span>, <span class="mono">enum</span> — programmer-named aliases or sets</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>The data type determines three things: <strong>memory size</strong>, <strong>value range</strong>, and <strong>allowed operations</strong> — e.g. arithmetic on <span class="mono">int</span>, but not on <span class="mono">void</span>.</div>
  </div>

  <div v-click class="card card-orange" style="margin-top:4px;">
    <div class="small-text"><strong>Platform note:</strong> Exact sizes (e.g. <span class="mono">int</span> = 2 or 4 bytes) can vary by platform — always use <span class="mono">sizeof()</span> to check.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
