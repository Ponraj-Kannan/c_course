---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS I/O IN C?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is <span class="highlight">I/O</span> in C?</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Input/Output (I/O)</strong> is how a C program <strong style="color:var(--green);">communicates with the outside world</strong> — reading data from the user or a file (<em>input</em>) and sending results back to the screen or a file (<em>output</em>).
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> I/O is like a conversation — the program asks a question (output), the user types an answer (input), and the program responds (output again).</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#6b7280;">// Required header for all I/O functions</span><br>
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span>
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> All standard I/O functions in C live in <span class="mono">&lt;stdio.h&gt;</span> — you must include it before using <span class="mono">printf</span>, <span class="mono">scanf</span>, or any other I/O function.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Three Standard Streams</div>

  <div style="display:flex;flex-direction:column;gap:8px;">
    <div v-click style="display:flex;gap:10px;align-items:center;">
      <div class="icon-circle ic-blue" style="width:34px;height:34px;font-size:.8rem;flex-shrink:0;">↓</div>
      <div>
        <div style="font-family:'Fira Code',monospace;font-weight:700;color:var(--blue);font-size:.78rem;">stdin</div>
        <div class="small-text">Standard input — reads from keyboard by default</div>
      </div>
    </div>
    <div v-click style="display:flex;gap:10px;align-items:center;">
      <div class="icon-circle ic-green" style="width:34px;height:34px;font-size:.8rem;flex-shrink:0;">↑</div>
      <div>
        <div style="font-family:'Fira Code',monospace;font-weight:700;color:var(--green);font-size:.78rem;">stdout</div>
        <div class="small-text">Standard output — writes to screen by default</div>
      </div>
    </div>
    <div v-click style="display:flex;gap:10px;align-items:center;">
      <div class="icon-circle ic-red" style="width:34px;height:34px;font-size:.8rem;flex-shrink:0;">⚠</div>
      <div>
        <div style="font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);font-size:.78rem;">stderr</div>
        <div class="small-text">Standard error — writes error messages to screen</div>
      </div>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">C I/O Functions at a Glance</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <span v-click class="pill pill-red">printf</span>
    <span v-after class="pill pill-blue">scanf</span>
    <span v-after class="pill pill-green">putchar</span>
    <span v-after class="pill pill-navy">getchar</span>
    <span v-after class="pill pill-orange">puts</span>
    <span v-after class="pill pill-orange">gets / fgets</span>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>All these functions interact with <span class="mono">stdin</span> / <span class="mono">stdout</span> — they are called <strong>standard I/O</strong> functions.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
