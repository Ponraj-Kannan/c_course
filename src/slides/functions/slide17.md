---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 17 — BUILT-IN LIBRARY FUNCTIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Built-in <span class="highlight">Library Functions</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      C provides a rich set of <strong style="color:var(--red);">pre-written functions</strong> in <strong style="color:var(--green);">standard libraries</strong>. You include the appropriate header file and call them directly — no need to write them yourself.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:4px;">stdio.h — Input / Output</div>
  <div v-after style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname" style="min-width:90px;">printf()</span>
      <span class="body-text">Print formatted output to the screen</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname" style="min-width:90px;">scanf()</span>
      <span class="body-text">Read formatted input from the keyboard</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname" style="min-width:90px;">puts()</span>
      <span class="body-text">Print a string followed by newline</span>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:4px;">math.h — Mathematics</div>
  <div v-after style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value" style="min-width:90px;">sqrt(x)</span>
      <span class="body-text">Square root of x</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value" style="min-width:90px;">pow(x, y)</span>
      <span class="body-text">x raised to the power y</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value" style="min-width:90px;">abs(x)</span>
      <span class="body-text">Absolute value of integer x</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value" style="min-width:90px;">ceil/floor()</span>
      <span class="body-text">Round up / round down</span>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">string.h — Strings</div>
  <div v-after style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword" style="min-width:90px;">strlen(s)</span>
      <span class="body-text">Length of string s</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword" style="min-width:90px;">strcpy(d,s)</span>
      <span class="body-text">Copy string s into d</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword" style="min-width:90px;">strcmp(a,b)</span>
      <span class="body-text">Compare two strings</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword" style="min-width:90px;">strcat(d,s)</span>
      <span class="body-text">Append string s to d</span>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Example Usage</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.73rem;line-height:2.1;">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;math.h&gt;</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.2f\n"</span>, <span style="color:#0e6ead;">sqrt</span>(<span style="color:#b45309;">25.0</span>));<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.2f\n"</span>, <span style="color:#0e6ead;">pow</span>(<span style="color:#b45309;">2</span>, <span style="color:#b45309;">10</span>));<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">5.00<br>1024.00</div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Link <span class="mono">math.h</span> functions with the <span class="mono">-lm</span> flag when compiling: <span class="mono" style="color:var(--blue);">gcc prog.c -lm</span></div>
  </div>

</div>

</div>

  </template>
</Slide2>
