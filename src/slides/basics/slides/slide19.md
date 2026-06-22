<Slide2 topic="Operators — Relational &amp; Logical">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Relational</span> &amp; <span class="highlight">Logical</span> Operators</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-blue" style="text-align:center;">
    <div class="slide-h2" style="color:var(--blue);">Relational</div>
    <div class="small-text" style="margin-top:4px;">Compare two values. Result is <span class="mono">1</span> (true) or <span class="mono">0</span> (false).</div>
  </div>

  <table v-click class="cmp-table">
    <thead>
      <tr><th>Op</th><th>Meaning</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">==</td><td>Equal to</td><td class="mono">a == b</td></tr>
      <tr><td class="mono">!=</td><td>Not equal</td><td class="mono">a != b</td></tr>
      <tr><td class="mono">&gt;</td><td>Greater than</td><td class="mono">a &gt; b</td></tr>
      <tr><td class="mono">&lt;</td><td>Less than</td><td class="mono">a &lt; b</td></tr>
      <tr><td class="mono">&gt;=</td><td>Greater or equal</td><td class="mono">a &gt;= b</td></tr>
      <tr><td class="mono">&lt;=</td><td>Less or equal</td><td class="mono">a &lt;= b</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div><strong>Don't confuse</strong> <span class="mono">=</span> (assignment) with <span class="mono">==</span> (comparison).</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-green" style="text-align:center;">
    <div class="slide-h2" style="color:var(--green);">Logical</div>
    <div class="small-text" style="margin-top:4px;">Combine multiple conditions into one.</div>
  </div>

  <table v-click class="cmp-table">
    <thead>
      <tr><th>Op</th><th>Meaning</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">&amp;&amp;</td><td>AND (both true)</td><td class="mono">a&gt;0 &amp;&amp; b&gt;0</td></tr>
      <tr><td class="mono">||</td><td>OR (at least one true)</td><td class="mono">a==0 || b==0</td></tr>
      <tr><td class="mono">!</td><td>NOT (invert)</td><td class="mono">!flag</td></tr>
    </tbody>
  </table>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">19</span>;<br>
    <span style="color:#ef5050;">if</span> (<span style="color:#0e6ead;">age</span> &gt;= <span style="color:#b45309;">18</span> &amp;&amp; <span style="color:#0e6ead;">age</span> &lt;= <span style="color:#b45309;">60</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Eligible"</span>);</span>
    }
  </div>
</div>

</div>

  </template>
</Slide2>
