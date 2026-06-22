---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS AN IDENTIFIER?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is an <span class="highlight">Identifier?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An <strong style="color:var(--red);">identifier</strong> is a <strong style="color:var(--green);">user-defined name</strong> given to a program element — a variable, function, array, or any other entity — so it can be referenced throughout the program.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> An identifier is like a name tag at a conference — it uniquely identifies a person (or entity) so others can refer to them by name.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">age</span> = <span style="color:#b45309;">20</span>;        <span style="color:#6b7280;">// age is an identifier</span><br>
    <span style="color:#0e6ead;">float</span> <span style="color:#ef5050;">totalScore</span>;    <span style="color:#6b7280;">// totalScore is an identifier</span><br>
    <span style="color:#0e6ead;">void</span> <span style="color:#ef5050;">printResult</span>(); <span style="color:#6b7280;">// printResult is an identifier</span>
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> Every name you invent in a C program — for variables, functions, labels, or types — is an identifier. Keywords are <em>not</em> identifiers (they belong to the language).</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Where Identifiers Appear</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div class="icon-circle ic-red" style="width:32px;height:32px;font-size:.8rem;flex-shrink:0;">📦</div>
      <div class="body-text"><strong>Variables</strong> — <span class="mono" style="color:var(--red-dark);">int count = 0;</span></div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div class="icon-circle ic-blue" style="width:32px;height:32px;font-size:.8rem;flex-shrink:0;">⚙️</div>
      <div class="body-text"><strong>Functions</strong> — <span class="mono" style="color:var(--blue);">void calculate();</span></div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div class="icon-circle ic-green" style="width:32px;height:32px;font-size:.8rem;flex-shrink:0;">📋</div>
      <div class="body-text"><strong>Arrays</strong> — <span class="mono" style="color:var(--green);">int marks[5];</span></div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div class="icon-circle ic-orange" style="width:32px;height:32px;font-size:.8rem;flex-shrink:0;">🔗</div>
      <div class="body-text"><strong>Pointers</strong> — <span class="mono" style="color:var(--orange);">int *ptr;</span></div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div class="icon-circle ic-purple" style="width:32px;height:32px;font-size:.8rem;flex-shrink:0;">🏷️</div>
      <div class="body-text"><strong>Structures / Typedefs</strong> — <span class="mono" style="color:var(--purple);">struct Student;</span></div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Identifiers are <strong>case-sensitive</strong> in C — <span class="mono">score</span>, <span class="mono">Score</span>, and <span class="mono">SCORE</span> are three completely different identifiers.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
