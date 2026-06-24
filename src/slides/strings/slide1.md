---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT IS A STRING IN C?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is a <span class="highlight">String</span> in C?</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      In C, a <strong style="color:var(--red);">string</strong> is a <strong style="color:var(--green);">null-terminated array of characters</strong> — there is no built-in string type. Every string ends with a special character <span class="mono">\0</span> (null terminator) that marks where the string ends.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A string is like a sentence written on a row of boxes — one character per box, with a special "END" marker in the last box so programs know where to stop reading.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">char</span> name[] = <span style="color:#2d7a00;">"Alice"</span>;<br>
    <span style="color:#6b7280;">// stored as: A  l  i  c  e  \0</span>
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> The <span class="mono">\0</span> null terminator is automatically added when you use a string literal like <span class="mono">"Alice"</span> — but you must account for it when sizing char arrays manually.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Memory Layout of "Alice"</div>

  <div v-after style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;margin-top:4px;">
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#ebf8ff;border-color:var(--blue);color:#2b6cb0;">A</div>
      <div class="idx-num">[0]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#ebf8ff;border-color:var(--blue);color:#2b6cb0;">l</div>
      <div class="idx-num">[1]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#ebf8ff;border-color:var(--blue);color:#2b6cb0;">i</div>
      <div class="idx-num">[2]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#ebf8ff;border-color:var(--blue);color:#2b6cb0;">c</div>
      <div class="idx-num">[3]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#ebf8ff;border-color:var(--blue);color:#2b6cb0;">e</div>
      <div class="idx-num">[4]</div>
    </div>
    <div style="text-align:center;">
      <div class="idx-cell" style="background:#fff5f5;border-color:var(--red);color:var(--red-dark);">\0</div>
      <div class="idx-num">[5]</div>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:10px;">
    <div><strong>Size = length + 1:</strong> The string <span class="mono">"Alice"</span> has 5 characters but occupies <strong>6 bytes</strong> — always add 1 for the null terminator when declaring a char array.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Without <span class="mono">\0</span>, functions like <span class="mono">printf("%s")</span> and <span class="mono">strlen()</span> don't know where the string ends — they keep reading memory until they randomly find a zero byte.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
