---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — CALLING A FUNCTION & EXECUTION FLOW
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Calling a Function &amp; <span class="highlight">Execution Flow</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">How to Call a Function</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.76rem;line-height:2.2;">
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b45309;">int</span> result = <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>); <span style="color:#6b7280;">// ← function call</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, result);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;<br>
    }
  </div>

  <div v-click style="margin-top:4px;display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <div style="background:var(--red);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0;">1</div>
      <div class="body-text"><strong>Arguments</strong> — the actual values passed: <span class="mono" style="color:var(--green);">4</span> and <span class="mono" style="color:var(--green);">5</span></div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0;">2</div>
      <div class="body-text">Control jumps to the <strong>function body</strong>; local parameters <span class="mono">a=4, b=5</span> are created</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:800;flex-shrink:0;">3</div>
      <div class="body-text"><span class="mono" style="color:var(--red-dark);">return</span> sends <span class="mono" style="color:var(--green);">9</span> back; control resumes in <span class="mono">main()</span></div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><strong>Arguments</strong> are the values you pass. <strong>Parameters</strong> are the variables that receive them inside the function.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Execution Flow Diagram</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-top:4px;">
    <div class="flow-node flow-start" style="width:180px;">Program starts at main()</div>
    <div class="flow-arrow">↓</div>
    <div class="flow-node flow-call" style="width:180px;">Call: add(4, 5)</div>
    <div class="flow-arrow">↓</div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="font-size:.6rem;color:var(--muted);">jump ➜</div>
      <div class="flow-node flow-body" style="width:180px;">Execute add() body<br><span style="font-family:'Fira Code',monospace;font-size:.65rem;">a=4, b=5 → 4+5=9</span></div>
    </div>
    <div class="flow-arrow">↓</div>
    <div class="flow-node flow-return" style="width:180px;">return 9</div>
    <div class="flow-arrow">↓</div>
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="font-size:.6rem;color:var(--muted);">back ➜</div>
      <div class="flow-node flow-call" style="width:180px;">result = 9<br>printf("%d", result)</div>
    </div>
    <div class="flow-arrow">↓</div>
    <div class="flow-node flow-end" style="width:180px;">return 0 — Program ends</div>
  </div>

  <div v-click class="card card-orange" style="margin-top:6px;">
    <div class="small-text"><strong>Output:</strong> <span class="mono">9</span> is printed to the screen.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
