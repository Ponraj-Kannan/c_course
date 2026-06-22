---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — WIDTH & PRECISION FORMATTING
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Width</span> &amp; <span class="highlight">Precision</span> Formatting</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Width</strong> sets the <strong style="color:var(--green);">minimum field size</strong> — the output is padded if shorter. <strong style="color:var(--red);">Precision</strong> controls <strong style="color:var(--green);">decimal places</strong> for floats or <strong style="color:var(--green);">max characters</strong> for strings.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Width Examples</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%10d</span>|"</span>, <span style="color:#b45309;">42</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%-10d</span>|"</span>, <span style="color:#b45309;">42</span>);
  </div>
  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42|<br>
    |42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Precision Examples</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%.2f</span>"</span>, <span style="color:#b45309;">3.14159</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%.4s</span>"</span>, <span style="color:#2d7a00;">"Hello"</span>);
  </div>
  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    3.14<br>
    Hell
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Combined Width + Precision</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%10.2f</span>|"</span>, <span style="color:#b45309;">3.14159</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%-10.2f</span>|"</span>, <span style="color:#b45309;">3.14159</span>);
  </div>
  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.14|<br>
    |3.14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Quick Reference</div>
  <table class="cmp-table">
    <thead v-click>
      <tr><th>Format</th><th>Meaning</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">%10d</td><td>Right-align in width 10</td></tr>
      <tr v-click><td class="mono">%-10d</td><td>Left-align in width 10</td></tr>
      <tr v-click><td class="mono">%.2f</td><td>2 decimal places</td></tr>
      <tr v-click><td class="mono">%10.2f</td><td>Width 10, 2 decimal places</td></tr>
      <tr v-click><td class="mono">%.5s</td><td>Max 5 chars from string</td></tr>
    </tbody>
  </table>

</div>

</div>

  </template>
</Slide2>
