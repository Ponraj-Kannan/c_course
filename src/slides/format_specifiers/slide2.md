---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — INTEGER SPECIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Integer</span> Specifiers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">All Integer Specifiers</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Specifier</th><th>Meaning</th><th>Example Output</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">%d</td><td>Signed decimal integer</td><td class="mono">-42</td></tr>
      <tr v-click><td class="mono">%i</td><td>Signed integer (same as %d in printf)</td><td class="mono">-42</td></tr>
      <tr v-click><td class="mono">%u</td><td>Unsigned decimal integer</td><td class="mono">42</td></tr>
      <tr v-click><td class="mono">%o</td><td>Unsigned octal</td><td class="mono">52</td></tr>
      <tr v-click><td class="mono">%x</td><td>Unsigned hexadecimal (lowercase)</td><td class="mono">2a</td></tr>
      <tr v-click><td class="mono">%X</td><td>Unsigned hexadecimal (uppercase)</td><td class="mono">2A</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div><span class="mono">%d</span> and <span class="mono">%i</span> are identical in <span class="mono">printf</span> — but differ in <span class="mono">scanf</span>: <span class="mono">%i</span> auto-detects base (hex if <span class="mono">0x</span> prefix, octal if <span class="mono">0</span>).</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Code Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> n = <span style="color:#b45309;">42</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"dec : <span style="color:#ef5050;">%d</span>\n"</span>, n);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"oct : <span style="color:#ef5050;">%o</span>\n"</span>, n);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"hex : <span style="color:#ef5050;">%x</span>\n"</span>, n);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"HEX : <span style="color:#ef5050;">%X</span>\n"</span>, n);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.8;">
    dec : 42<br>
    oct : 52<br>
    hex : 2a<br>
    HEX : 2A
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Type mismatch crash:</strong> Using <span class="mono">%d</span> for a <span class="mono">float</span> variable (or vice versa) causes <strong>undefined behavior</strong> — the bit pattern is misread entirely.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
