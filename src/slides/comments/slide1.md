---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS A COMMENT?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Comments in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is a <span class="highlight">Comment?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">comment</strong> is <strong style="color:var(--green);">non-executable text</strong> in source code used to explain what the code does. The compiler <strong>ignores</strong> comments completely — they exist only for humans reading the code.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A comment is like a sticky note left on a recipe — it doesn't change the dish, but it helps the next cook understand why a step was done a certain way.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#6b7280;">// This program prints a greeting</span><br>
    <span style="color:#0e6ead;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> main() {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hello, World!"</span>);<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> <span style="color:#b45309;">0</span>;<br>
    }
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Why Use Comments?</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-red" style="width:32px;height:32px;font-size:.85rem;">📝</div>
      <div class="body-text"><strong>Explain logic</strong> — clarify why code does something, not just what</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-blue" style="width:32px;height:32px;font-size:.85rem;">🤝</div>
      <div class="body-text"><strong>Help teammates</strong> — make code easier for others to understand</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-green" style="width:32px;height:32px;font-size:.85rem;">🔧</div>
      <div class="body-text"><strong>Aid debugging</strong> — temporarily disable code without deleting it</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-orange" style="width:32px;height:32px;font-size:.85rem;">📚</div>
      <div class="body-text"><strong>Document intent</strong> — record assumptions, TODOs, and warnings</div>
    </div>
  </div>

  <div v-click class="card card-blue" style="margin-top:4px;">
    <div class="small-text"><strong>Compiler behavior:</strong> Before compilation, the preprocessor strips out all comments — they never become part of the executable.</div>
  </div>
  
  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div>C supports <strong>two types</strong> of comments: single-line (<span class="mono">//</span>) and multi-line (<span class="mono">/* */</span>). We'll cover both next.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
