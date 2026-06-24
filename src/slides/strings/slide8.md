---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — COMMON MISTAKES & BEST PRACTICES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common Mistakes &amp; <span class="highlight">Best Practices</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Frequent Mistakes</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">== on strings</span>
        <div class="body-text"><span class="mono">if (s1 == s2)</span> compares <strong>addresses</strong> — always use <span class="mono">strcmp(s1, s2) == 0</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Missing \0</span>
        <div class="body-text">Building a char array manually without a null terminator causes <span class="mono">printf</span> and all string functions to read past the end</div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-hard" style="flex-shrink:0;">Buffer overflow</span>
        <div class="body-text">Using <span class="mono">strcpy</span> or <span class="mono">strcat</span> without checking that dest is large enough — use <span class="mono">strncpy</span> / <span class="mono">strncat</span></div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="badge-medium" style="flex-shrink:0;">Using gets</span>
        <div class="body-text">Removed from C11 — replace with <span class="mono">fgets(buf, size, stdin)</span> always</div>
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
      <tr v-click><td class="mono" style="color:var(--red-dark);">s1 == s2</td><td class="mono" style="color:var(--green);">strcmp(s1, s2) == 0</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">strcpy(d, s)</td><td class="mono" style="color:var(--green);">strncpy(d, s, sizeof(d)-1)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">strcat(d, s)</td><td class="mono" style="color:var(--green);">strncat(d, s, n)</td></tr>
      <tr v-click><td class="mono" style="color:var(--red-dark);">gets(buf)</td><td class="mono" style="color:var(--green);">fgets(buf, SIZE, stdin)</td></tr>
      <tr v-click><td style="color:var(--red-dark);">i &lt; strlen(s) in loop</td><td style="color:var(--green);">Store strlen once before loop</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Golden Rule:</strong> Always size your char array as <strong>max_length + 1</strong> to accommodate the null terminator — and always null-terminate manually if you're building a string character by character.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
