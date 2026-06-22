---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — FLOAT, CHAR & STRING SPECIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Float</span>, <span class="highlight">Char</span> &amp; <span class="highlight">String</span> Specifiers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Float Specifiers</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Specifier</th><th>Meaning</th><th>Example Output</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">%f</td><td>Decimal float (default 6 decimals)</td><td class="mono">3.140000</td></tr>
      <tr v-click><td class="mono">%e</td><td>Scientific notation (lowercase)</td><td class="mono">3.140000e+00</td></tr>
      <tr v-click><td class="mono">%E</td><td>Scientific notation (uppercase)</td><td class="mono">3.140000E+00</td></tr>
      <tr v-click><td class="mono">%g</td><td>Shorter of %f or %e (no trailing zeros)</td><td class="mono">3.14</td></tr>
      <tr v-click><td class="mono">%lf</td><td>double (required in scanf, same as %f in printf)</td><td class="mono">3.140000</td></tr>
    </tbody>
  </table>

</div>

<div class="flex-col">

  <div v-click class="section-label">Char &amp; String Specifiers</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Specifier</th><th>Meaning</th><th>Example Output</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">%c</td><td>Single character</td><td class="mono">A</td></tr>
      <tr v-click><td class="mono">%s</td><td>Null-terminated string</td><td class="mono">Hello</td></tr>
      <tr v-click><td class="mono">%p</td><td>Pointer address (hex)</td><td class="mono">0x7ffd...</td></tr>
      <tr v-click><td class="mono">%%</td><td>Literal % character</td><td class="mono">%</td></tr>
    </tbody>
  </table>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:6px;">
    <span style="color:#0e6ead;">char</span> ch = <span style="color:#2d7a00;">'A'</span>;<br>
    <span style="color:#0e6ead;">char</span> name[] = <span style="color:#2d7a00;">"Alice"</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%c</span> scored <span style="color:#ef5050;">%d</span>%%"</span>, ch, <span style="color:#b45309;">95</span>);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">A scored 95%</div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>%lf vs %f:</strong> In <span class="mono">printf</span> both work for <span class="mono">double</span> — but in <span class="mono">scanf</span>, you <strong>must</strong> use <span class="mono">%lf</span> to read into a <span class="mono">double</span> variable.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
