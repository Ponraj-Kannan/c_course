<Slide2 topic="Operators — Arithmetic">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Operators</span> — Arithmetic</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An <strong style="color:var(--red);">operator</strong> performs a specific action on one or more operands — like calculating, comparing, or assigning.
    </div>
  </div>

  <div v-click class="section-label">Arithmetic Operators</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">+</td><td>Addition</td><td class="mono">7 + 3</td><td class="mono">10</td></tr>
      <tr><td class="mono">-</td><td>Subtraction</td><td class="mono">7 - 3</td><td class="mono">4</td></tr>
      <tr><td class="mono">*</td><td>Multiplication</td><td class="mono">7 * 3</td><td class="mono">21</td></tr>
      <tr><td class="mono">/</td><td>Division</td><td class="mono">7 / 3</td><td class="mono">2</td></tr>
      <tr><td class="mono">%</td><td>Modulo (remainder)</td><td class="mono">7 % 3</td><td class="mono">1</td></tr>
    </tbody>
  </table>
</div>

<div class="flex-col">
  <div v-click class="section-label">In Code</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">10</span>, <span style="color:#0e6ead;">b</span> = <span style="color:#b45309;">3</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#0e6ead;">a</span> + <span style="color:#0e6ead;">b</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#0e6ead;">a</span> - <span style="color:#0e6ead;">b</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#0e6ead;">a</span> * <span style="color:#0e6ead;">b</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#0e6ead;">a</span> / <span style="color:#0e6ead;">b</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>,  <span style="color:#0e6ead;">a</span> % <span style="color:#0e6ead;">b</span>);
  </div>

  <div v-click class="output-box">13 7 30 3 1</div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div><strong>Integer division:</strong> <span class="mono">7/3</span> gives <strong>2</strong>, not 2.33. Cast to float for decimals.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
