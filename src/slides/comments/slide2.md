---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — SINGLE-LINE COMMENTS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Comments in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Single-Line</span> Comments</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.85rem;line-height:2.2;">
    <span class="syn-operator">//</span> <span style="color:#2d7a00;">comment text goes here</span>
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">//</span>
      <span class="body-text">Starts the comment — everything after it on the same line is ignored</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">text</span>
      <span class="body-text">Any text, explanation, or note for the line</span>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Note:</strong> A single-line comment ends automatically at the <strong>end of the line</strong> — there's no closing symbol needed.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#6b7280;">// Declare and initialize age</span><br>
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;  <span style="color:#6b7280;">// student's age</span><br>
    <br>
    <span style="color:#0e6ead;">float</span> pi = <span style="color:#b45309;">3.14</span>;  <span style="color:#6b7280;">// approx value of π</span><br>
    <span style="color:#6b7280;">// printf("debug line"); — disabled for now</span>
  </div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Where It Can Appear</div>
    <div style="display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;gap:8px;align-items:center;" v-click>
        <span class="pill pill-green">✔ Own line</span>
        <span class="body-text" style="font-size:.72rem;">As a standalone explanation above code</span>
      </div>
      <div style="display:flex;gap:8px;align-items:center;" v-click>
        <span class="pill pill-blue">✔ End of line</span>
        <span class="body-text" style="font-size:.72rem;">Trailing note right after a statement</span>
      </div>
    </div>
  </div>

  <div v-click class="card card-orange" style="margin-top:8px;">
    <div class="small-text"><strong>Common use:</strong> Quickly "comment out" one line of code while testing, without deleting it.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
