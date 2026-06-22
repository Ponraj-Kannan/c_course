<Slide2 topic="Operator Precedence">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Operator <span class="highlight">Precedence</span> &amp; Evaluation</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Order of Operations</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Priority</th><th>Operators</th><th>Direction</th></tr>
    </thead>
    <tbody>
      <tr><td>1 (highest)</td><td class="mono">() []</td><td>Left to right</td></tr>
      <tr><td>2</td><td class="mono">! ++ -- +x -x</td><td>Right to left</td></tr>
      <tr><td>3</td><td class="mono">* / %</td><td>Left to right</td></tr>
      <tr><td>4</td><td class="mono">+ -</td><td>Left to right</td></tr>
      <tr><td>5</td><td class="mono">&lt; &lt;= &gt; &gt;=</td><td>Left to right</td></tr>
      <tr><td>6</td><td class="mono">== !=</td><td>Left to right</td></tr>
      <tr><td>7</td><td class="mono">&amp;&amp;</td><td>Left to right</td></tr>
      <tr><td>8</td><td class="mono">||</td><td>Left to right</td></tr>
      <tr><td>9 (lowest)</td><td class="mono">= += -= *= /=</td><td>Right to left</td></tr>
    </tbody>
  </table>
</div>

<div class="flex-col">
  <div v-click class="section-label">Step-by-Step Evaluation</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">r</span> = <span style="color:#b45309;">10</span> + <span style="color:#b45309;">2</span> * <span style="color:#b45309;">3</span>;<br>
    <span style="color:#6b7280;">// step 1: 2 * 3 = 6</span><br>
    <span style="color:#6b7280;">// step 2: 10 + 6 = 16</span><br>
    <span style="color:#6b7280;">// r = 16</span>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">r</span> = (<span style="color:#b45309;">10</span> + <span style="color:#b45309;">2</span>) * <span style="color:#b45309;">3</span>;<br>
    <span style="color:#6b7280;">// step 1: 10 + 2 = 12</span><br>
    <span style="color:#6b7280;">// step 2: 12 * 3 = 36</span><br>
    <span style="color:#6b7280;">// r = 36</span>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>When unsure — <strong>add parentheses</strong>. They make intent obvious and code easier to read.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
