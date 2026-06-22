---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — SCANF: FORMATTED INPUT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">scanf</span> — Formatted Input</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">scanf</span>(<span class="syn-value">"format string"</span>, <span class="syn-operator">&amp;</span><span class="syn-varname">var1</span>, <span class="syn-operator">&amp;</span><span class="syn-varname">var2</span>, ...);
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>The &amp; is mandatory:</strong> <span class="mono">scanf</span> needs the <strong>address</strong> of the variable to write into — passing the value instead is a segfault waiting to happen.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">int</span> age;<br>
    <span style="color:#0e6ead;">float</span> gpa;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Enter age and GPA: "</span>);<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%d %f</span>"</span>, <span style="color:#ef5050;">&amp;</span>age, <span style="color:#ef5050;">&amp;</span>gpa);
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><span class="mono">scanf</span> <strong>returns</strong> the number of items successfully read — use this to detect bad input (e.g. user types letters when a number is expected).</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">How scanf Reads Input</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">1</div>
      <div class="body-text">Skips leading <strong>whitespace</strong> (spaces, tabs, newlines) automatically</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">2</div>
      <div class="body-text">Reads characters matching the specifier until it hits whitespace or a mismatch</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">3</div>
      <div class="body-text"><strong>Leaves the newline</strong> (<span class="mono">\n</span>) in the buffer — this can trip up a following <span class="mono">getchar</span> or <span class="mono">scanf("%c")</span></div>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Reading strings with spaces:</strong> <span class="mono">scanf("%s")</span> stops at the first space — use <span class="mono">fgets()</span> to read a full line with spaces.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;margin-top:4px;">
    <span style="color:#6b7280;">// Read multiple values at once</span><br>
    <span style="color:#0e6ead;">int</span> a, b;<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%d %d</span>"</span>, <span style="color:#ef5050;">&amp;</span>a, <span style="color:#ef5050;">&amp;</span>b);<br>
    <span style="color:#6b7280;">// User can type: 10 20 (space-separated)</span>
  </div>

</div>

</div>

  </template>
</Slide2>
