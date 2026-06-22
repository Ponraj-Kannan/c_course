<Slide2 topic="char — Character Data Type">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">char</span> — Single Characters</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Purpose</div>
    <div class="body-text">Stores a <strong>single character</strong> in <strong>1 byte</strong> of memory.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">grade</span> = <span style="color:#2d7a00;">'A'</span>;<br>
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">digit</span> = <span style="color:#2d7a00;">'9'</span>;<br>
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">nl</span>    = <span style="color:#2d7a00;">'\n'</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%c"</span>, <span style="color:#0e6ead;">grade</span>);
  </div>

  <div v-click class="output-box">A</div>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div><strong>Use single quotes</strong> for char: <span class="mono">'A'</span>. Double quotes <span class="mono">"A"</span> is a string!</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">ASCII Storage</div>

  <div v-after class="card card-blue">
    <div class="body-text">A <span class="mono">char</span> actually stores an <strong>ASCII number</strong>. <span class="mono">'A'</span> is stored as <strong>65</strong>.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">c</span> = <span style="color:#2d7a00;">'A'</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%c %d"</span>, <span style="color:#0e6ead;">c</span>, <span style="color:#0e6ead;">c</span>);
  </div>

  <div v-click class="output-box">A 65</div>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:4px;">ASCII Mini Reference</div>
    <table class="cmp-table" style="font-size:.7rem;">
      <thead><tr><th>Char</th><th>ASCII</th></tr></thead>
      <tbody>
        <tr><td class="mono">'A' - 'Z'</td><td>65 - 90</td></tr>
        <tr><td class="mono">'a' - 'z'</td><td>97 - 122</td></tr>
        <tr><td class="mono">'0' - '9'</td><td>48 - 57</td></tr>
        <tr><td class="mono">' '</td><td>32</td></tr>
      </tbody>
    </table>
  </div>
</div>

</div>

  </template>
</Slide2>
