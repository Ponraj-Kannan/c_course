---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — GETS & PUTS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">gets</span> &amp; <span class="highlight">puts</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">puts — Print a String</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">puts</span>(<span class="syn-varname">str</span>);
  </div>

  <div v-click class="body-text" style="font-size:.74rem;margin-top:4px;">Prints a null-terminated string to <span class="mono">stdout</span> and <strong>automatically appends a newline</strong> — simpler than <span class="mono">printf("%s\n", str)</span>.</div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:6px;">
    <span style="color:#0e6ead;">char</span> msg[] = <span style="color:#2d7a00;">"Hello, World!"</span>;<br>
    <span style="color:#2d7a00;">puts</span>(msg);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">Hello, World!</div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><span class="mono">puts</span> always adds <span class="mono">\n</span> at the end — use <span class="mono">printf</span> instead if you don't want a newline after the string.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">gets — Read a String (Dangerous!)</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">gets</span>(<span class="syn-varname">str</span>); <span style="color:#6b7280;">// ⚠ removed in C11</span>
  </div>

  <div v-click class="body-text" style="font-size:.74rem;margin-top:4px;">Reads a line from <span class="mono">stdin</span> into a buffer until it hits <span class="mono">\n</span>, storing a <span class="mono">\0</span> in its place. Unlike <span class="mono">scanf("%s")</span>, it <strong>accepts spaces</strong> — but has no buffer size limit.</div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Why gets is dangerous:</strong> It reads without checking the buffer size — typing more characters than the buffer holds <strong>overwrites adjacent memory</strong> (buffer overflow). It was <strong>removed from C11</strong> entirely.</div>
  </div>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:6px;">Use fgets Instead</div>
    <div style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
      <span style="color:#6b7280;">// Safe replacement for gets</span><br>
      <span style="color:#0e6ead;">char</span> name[<span style="color:#b45309;">50</span>];<br>
      <span style="color:#2d7a00;">fgets</span>(name, <span style="color:#b45309;">50</span>, stdin);
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div><span class="mono">fgets(buf, size, stdin)</span> is the safe alternative — it always limits reading to <span class="mono">size - 1</span> characters, preventing overflow.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
