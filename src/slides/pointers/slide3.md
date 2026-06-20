---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — DECLARING & INITIALIZING POINTERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Declaring &amp; <span class="highlight">Initializing</span> Pointers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax Structure</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.85rem;line-height:2.2;">
    <span style="color:#0e6ead;">type</span> <span style="color:#ef5050;">*</span><span style="color:#c49a00;">pointer_name</span> <span style="color:#6b7280;">=</span> <span style="color:#2d7a00;">&amp;variable</span>;
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">type</span>
      <span class="body-text">Data type of the variable being pointed to</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">*</span>
      <span class="body-text">Marks the variable as a pointer (not the value itself)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">pointer_name</span>
      <span class="body-text">The identifier for the pointer variable</span>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Uninitialized pointers are dangerous:</strong> <span class="mono">int *p;</span> alone points to a <strong>garbage address</strong>. Dereferencing it is undefined behavior!</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Always initialize a pointer — either to a valid address, or to <span class="mono">NULL</span> if it has nothing to point to yet.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#6b7280;"># Pointer to int</span><br>
    <span style="color:#0e6ead;">int</span> num = <span style="color:#b45309;">42</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p1 = <span style="color:#ef5050;">&amp;</span>num;<br>
    <span style="color:#6b7280;"># Pointer to float</span><br>
    <span style="color:#0e6ead;">float</span> price = <span style="color:#b45309;">9.99</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#ef5050;">*</span>p2 = <span style="color:#ef5050;">&amp;</span>price;<br>
    <span style="color:#6b7280;"># NULL pointer — points to nothing</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p3 = <span style="color:#ef5050;">NULL</span>;
  </div>

  <div v-click class="mem-box" style="margin-top:6px;">
    <div class="mem-header">Memory After Declaration</div>
    <div class="mem-row">
      <div class="mem-name">p1</div>
      <div class="mem-val">&amp;num</div>
      <div class="mem-type">int*</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">p2</div>
      <div class="mem-val">&amp;price</div>
      <div class="mem-type">float*</div>
    </div>
    <div class="mem-row">
      <div class="mem-name">p3</div>
      <div class="mem-val">0x0</div>
      <div class="mem-type">int*</div>
    </div>
  </div>

  <div v-click class="card card-blue" style="margin-top:6px;">
    <div class="small-text"><strong>NULL check before use:</strong> Always test <span class="mono">if (p3 != NULL)</span> before dereferencing a pointer that might be NULL.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
