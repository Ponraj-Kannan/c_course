<Slide2 topic="Format Specifiers &amp; Escape Sequences">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Format Specifiers &amp; <span class="highlight">Escape Sequences</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Format Specifiers</div>

  <table v-after class="cmp-table" style="font-size:.72rem;">
    <thead>
      <tr><th>Specifier</th><th>Data Type</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">%d</td><td>int</td><td>printf("%d", 10)</td></tr>
      <tr><td class="mono">%f</td><td>float</td><td>printf("%f", 3.14)</td></tr>
      <tr><td class="mono">%c</td><td>char</td><td>printf("%c", 'A')</td></tr>
      <tr><td class="mono">%s</td><td>string</td><td>printf("%s", "Hi")</td></tr>
      <tr><td class="mono">%lf</td><td>double</td><td>printf("%lf", x)</td></tr>
      <tr><td class="mono">%x</td><td>hex</td><td>printf("%x", 255)</td></tr>
    </tbody>
  </table>
</div>

<div class="flex-col">
  <div v-click class="section-label">Escape Sequences</div>

  <table v-after class="cmp-table" style="font-size:.72rem;">
    <thead>
      <tr><th>Sequence</th><th>Meaning</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">\n</td><td>New line</td></tr>
      <tr><td class="mono">\t</td><td>Horizontal tab</td></tr>
      <tr><td class="mono">\\</td><td>Backslash</td></tr>
      <tr><td class="mono">\"</td><td>Double quote</td></tr>
      <tr><td class="mono">\'</td><td>Single quote</td></tr>
      <tr><td class="mono">\0</td><td>Null character</td></tr>
    </tbody>
  </table>

  <div v-click class="code-block" style="margin-top:6px;">
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Name:\tAnu\nAge:\t19"</span>);
  </div>

  <div v-click class="output-box">Name:&nbsp;&nbsp;&nbsp;Anu<br>Age:&nbsp;&nbsp;&nbsp;19</div>
</div>

</div>

  </template>
</Slide2>
