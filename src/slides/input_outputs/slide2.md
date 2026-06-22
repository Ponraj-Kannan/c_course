---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — PRINTF: FORMATTED OUTPUT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">printf</span> — Formatted Output</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">printf</span>(<span class="syn-value">"format string"</span>, <span class="syn-varname">arg1</span>, <span class="syn-varname">arg2</span>, ...);
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:5px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">"format string"</span>
      <span class="body-text">Text with embedded <span class="mono">%</span> specifiers and escape sequences</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">arg1, arg2...</span>
      <span class="body-text">Values substituted in place of each specifier</span>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Escape Sequences</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <div v-click style="background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px;padding:5px 10px;font-family:'Fira Code',monospace;font-size:.72rem;"><span style="color:var(--red);">\n</span> newline</div>
    <div v-after style="background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px;padding:5px 10px;font-family:'Fira Code',monospace;font-size:.72rem;"><span style="color:var(--red);">\t</span> tab</div>
    <div v-after style="background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px;padding:5px 10px;font-family:'Fira Code',monospace;font-size:.72rem;"><span style="color:var(--red);">\\</span> backslash</div>
    <div v-after style="background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px;padding:5px 10px;font-family:'Fira Code',monospace;font-size:.72rem;"><span style="color:var(--red);">\"</span> quote</div>
    <div v-after style="background:#f6f8fa;border:1px solid #e1e4e8;border-radius:6px;padding:5px 10px;font-family:'Fira Code',monospace;font-size:.72rem;"><span style="color:var(--red);">\0</span> null</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">float</span> gpa = <span style="color:#b45309;">8.75</span>;<br>
    <span style="color:#0e6ead;">char</span> name[] = <span style="color:#2d7a00;">"Alice"</span>;<br>
    <br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Name : <span style="color:#ef5050;">%s</span>\n"</span>, name);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Age  : <span style="color:#ef5050;">%d</span>\n"</span>, age);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"GPA  : <span style="color:#ef5050;">%.2f</span>\n"</span>, gpa);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    Name : Alice<br>
    Age  : 20<br>
    GPA  : 8.75
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><span class="mono">printf</span> <strong>returns</strong> the number of characters written — a negative return value signals an output error.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>No automatic newline:</strong> Unlike Python's <span class="mono">print()</span>, <span class="mono">printf</span> does <strong>not</strong> add <span class="mono">\n</span> by default — you must include it explicitly.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
