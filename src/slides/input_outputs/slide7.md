---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — COMMON MISTAKES & BEST PRACTICES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common Mistakes &amp; <span class="highlight">Best Practices</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Frequent Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Missing &amp;</span>
        <div class="body-text"><span class="mono">scanf("%d", n)</span> — passes the value, not the address; causes segfault</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">\n in buffer</span>
        <div class="body-text">After <span class="mono">scanf</span>, a leftover <span class="mono">\n</span> causes the next <span class="mono">getchar()</span> or <span class="mono">scanf("%c")</span> to read the newline instead of real input</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Using gets</span>
        <div class="body-text">No bounds checking — buffer overflow, security vulnerability, removed in C11</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">No \n in printf</span>
        <div class="body-text">Forgetting <span class="mono">\n</span> leaves cursor on same line — output appears joined or garbled</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">%s with spaces</span>
        <div class="body-text"><span class="mono">scanf("%s", name)</span> stops at first space — use <span class="mono">fgets</span> to read a full name</div>
      </div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Best Practices</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>❌ Avoid</th><th>✔ Do Instead</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono" style="color:var(--red-dark);">scanf("%d", n)</td><td class="mono" style="color:var(--green);">scanf("%d", &amp;n)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">gets(buf)</td><td class="mono" style="color:var(--green);">fgets(buf, SIZE, stdin)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">scanf("%s", name)</td><td class="mono" style="color:var(--green);">fgets(name, 50, stdin)</td></tr>
      <tr v-click><td style="color:var(--red-dark);">Ignoring scanf return</td><td style="color:var(--green);">Check return value for input errors</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Buffer flush tip:</strong> To clear leftover <span class="mono">\n</span> after <span class="mono">scanf</span>, add <span class="mono">getchar()</span> before reading the next character input.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><strong>Golden rule:</strong> Always know <em>what type</em> you're reading (<span class="mono">%d</span>, <span class="mono">%f</span>...) and <em>where</em> it's going (<span class="mono">&amp;var</span>) — these two are the most common sources of I/O bugs in C.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
