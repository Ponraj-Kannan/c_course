---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — FLAGS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Format Specifier <span class="highlight">Flags</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Available Flags</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Flag</th><th>Meaning</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">-</td><td>Left-align output within the field width</td></tr>
      <tr v-click><td class="mono">+</td><td>Always print sign (+ or −) for numbers</td></tr>
      <tr v-click><td class="mono">0</td><td>Pad with zeros instead of spaces</td></tr>
      <tr v-click><td class="mono">&nbsp;</td><td>Print a space before positive numbers</td></tr>
      <tr v-click><td class="mono">#</td><td>Prefix: <span class="mono">0</span> for octal, <span class="mono">0x</span> for hex, force decimal point for floats</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>Flags go immediately after the <span class="mono">%</span> and <strong>before</strong> width/precision — you can combine multiple flags: <span class="mono">%-+10d</span>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Side-by-Side Output</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%10d</span>|"</span>,  <span style="color:#b45309;">42</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%-10d</span>|"</span>, <span style="color:#b45309;">42</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%+10d</span>|"</span>, <span style="color:#b45309;">42</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%010d</span>|"</span>, <span style="color:#b45309;">42</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%#x</span>  |"</span>,   <span style="color:#b45309;">42</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"|<span style="color:#ef5050;">%#o</span>  |"</span>,   <span style="color:#b45309;">42</span>);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42|<br>
    |42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
    |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+42|<br>
    |0000000042|<br>
    |0x2a&nbsp;&nbsp;|<br>
    |052&nbsp;&nbsp;&nbsp;|
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div><strong>Practical uses:</strong> <span class="mono">%0Nd</span> for zero-padded IDs, <span class="mono">%-Ns</span> for aligned table columns, <span class="mono">%#x</span> for explicit hex output with prefix.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
