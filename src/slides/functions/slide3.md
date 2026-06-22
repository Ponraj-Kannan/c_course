---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — FUNCTION ANATOMY & SYNTAX
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Function <span class="highlight">Anatomy</span> &amp; Syntax</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Full Syntax</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2.2;">
    <span style="color:#b45309;">return_type</span> <span style="color:#0e6ead;">function_name</span>(<span style="color:#2d7a00;">parameters</span>) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6b7280;">// body — statements</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> <span style="color:#b45309;">value</span>;<br>
    }
  </div>

  <div v-click style="margin-top:4px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">return_type</span>
      <span class="body-text">Data type of the value the function returns (<span class="mono">int</span>, <span class="mono">void</span>, etc.)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">function_name</span>
      <span class="body-text">Identifier — follows C naming rules</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">parameters</span>
      <span class="body-text">Input values passed to the function (can be empty)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">return</span>
      <span class="body-text">Sends a value back to the caller (skip for <span class="mono">void</span>)</span>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>If a function does <strong>not</strong> return a value, use <span class="mono" style="color:var(--red-dark);">void</span> as the return type.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Labelled Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2.1;position:relative;">
    <span style="color:#b45309;">int</span>&nbsp;<span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span>&nbsp;<span style="color:#2d7a00;">a</span>,&nbsp;<span style="color:#b45309;">int</span>&nbsp;<span style="color:#2d7a00;">b</span>)&nbsp;{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b45309;">int</span>&nbsp;<span style="color:#0e6ead;">result</span>&nbsp;=&nbsp;<span style="color:#2d7a00;">a</span>&nbsp;+&nbsp;<span style="color:#2d7a00;">b</span>;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span>&nbsp;<span style="color:#0e6ead;">result</span>;<br>
    }
  </div>

  <div style="display:flex;flex-direction:column;gap:6px;margin-top:2px;">
    <div v-click style="display:flex;align-items:center;gap:8px;">
      <div class="body-text"><span class="mono" style="color:var(--red-dark);">int</span> — return type: this function gives back an integer</div>
    </div>
    <div v-click style="display:flex;align-items:center;gap:8px;">
      <div class="body-text"><span class="mono" style="color:#0e6ead;">add</span> — function name (descriptive!)</div>
    </div>
    <div v-click style="display:flex;align-items:center;gap:8px;">
      <div class="body-text"><span class="mono" style="color:var(--green);">(int a, int b)</span> — two parameters (inputs)</div>
    </div>
    <div v-click style="display:flex;align-items:center;gap:8px;">
      <div class="body-text"><span class="mono" style="color:var(--orange);">return result</span> — sends the computed value back to caller</div>
    </div>
  </div>

  <div v-click class="card card-green" style="margin-top:4px;">
    <div class="small-text"><strong>void function example:</strong> <span class="mono">void greet() &#123; printf("Hello!"); &#125;</span> — no return needed.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
