---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — CHARACTER TYPE: CHAR
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Character Type — <span class="highlight">char</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono" style="color:var(--red);">char</span> stores a <strong style="color:var(--green);">single character</strong> — internally it holds a small integer representing the character's <strong>ASCII value</strong>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.9;margin-top:6px;">
    <span style="color:#0e6ead;">char</span> grade = <span style="color:#2d7a00;">'A'</span>;      <span style="color:#6b7280;">// single quotes!</span><br>
    <span style="color:#0e6ead;">char</span> ch    = <span style="color:#b45309;">65</span>;       <span style="color:#6b7280;">// same as 'A'</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%c</span> = <span style="color:#ef5050;">%d</span>"</span>, grade, grade);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">A = 65</div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>Because <span class="mono">char</span> is just a tiny integer, you can do arithmetic on it: <span class="mono">'A' + 1</span> gives <span class="mono">'B'</span> (ASCII 66).</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Single vs double quotes:</strong> <span class="mono">'A'</span> is a <span class="mono">char</span> (1 character). <span class="mono">"A"</span> is a string literal (char array with <span class="mono">\0</span>) — they are not the same type.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Key Properties</div>

  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">Size</span>
      <span class="body-text"><strong>1 byte</strong> (8 bits) — always, on all platforms</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">Range</span>
      <span class="body-text">−128 to 127 (signed) or 0 to 255 (unsigned)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;" v-click>
      <span class="syn-keyword">Format</span>
      <span class="body-text"><span class="mono">%c</span> for char, <span class="mono">%d</span> to see ASCII value</span>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Common ASCII Values</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Character</th><th>ASCII Value</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">'A' – 'Z'</td><td>65 – 90</td></tr>
      <tr v-click><td class="mono">'a' – 'z'</td><td>97 – 122</td></tr>
      <tr v-click><td class="mono">'0' – '9'</td><td>48 – 57</td></tr>
      <tr v-click><td class="mono">'\n'</td><td>10</td></tr>
      <tr v-click><td class="mono">' ' (space)</td><td>32</td></tr>
    </tbody>
  </table>

</div>

</div>

  </template>
</Slide2>
