<Slide2 topic="Common C Keywords">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common C <span class="highlight">Keywords</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="section-label">Data Types</div>

  <div v-after style="display:flex;gap:6px;flex-wrap:wrap;padding:10px;background:#f7f8fc;border:1px solid var(--border);border-radius:10px;">
    <span class="syn-keyword syn-kw-blue">int</span>
    <span class="syn-keyword syn-kw-blue">float</span>
    <span class="syn-keyword syn-kw-blue">double</span>
    <span class="syn-keyword syn-kw-blue">char</span>
    <span class="syn-keyword syn-kw-blue">void</span>
    <span class="syn-keyword syn-kw-blue">long</span>
    <span class="syn-keyword syn-kw-blue">short</span>
    <span class="syn-keyword syn-kw-blue">signed</span>
    <span class="syn-keyword syn-kw-blue">unsigned</span>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Control Flow</div>

  <div v-after style="display:flex;gap:6px;flex-wrap:wrap;padding:10px;background:#f7f8fc;border:1px solid var(--border);border-radius:10px;">
    <span class="syn-keyword syn-kw-green">if</span>
    <span class="syn-keyword syn-kw-green">else</span>
    <span class="syn-keyword syn-kw-green">for</span>
    <span class="syn-keyword syn-kw-green">while</span>
    <span class="syn-keyword syn-kw-green">do</span>
    <span class="syn-keyword syn-kw-green">switch</span>
    <span class="syn-keyword syn-kw-green">case</span>
    <span class="syn-keyword syn-kw-green">break</span>
    <span class="syn-keyword syn-kw-green">continue</span>
    <span class="syn-keyword syn-kw-green">return</span>
    <span class="syn-keyword syn-kw-green">goto</span>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Storage &amp; Structure</div>

  <div v-after style="display:flex;gap:6px;flex-wrap:wrap;padding:10px;background:#f7f8fc;border:1px solid var(--border);border-radius:10px;">
    <span class="syn-keyword syn-kw-purple">const</span>
    <span class="syn-keyword syn-kw-purple">static</span>
    <span class="syn-keyword syn-kw-purple">extern</span>
    <span class="syn-keyword syn-kw-purple">auto</span>
    <span class="syn-keyword syn-kw-purple">register</span>
    <span class="syn-keyword syn-kw-purple">struct</span>
    <span class="syn-keyword syn-kw-purple">union</span>
    <span class="syn-keyword syn-kw-purple">enum</span>
    <span class="syn-keyword syn-kw-purple">typedef</span>
    <span class="syn-keyword syn-kw-purple">sizeof</span>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Where You'll Use Them</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Keyword</th><th>Used For</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono" style="color:var(--blue);">int</td><td>Declare integers</td></tr>
      <tr><td class="mono" style="color:var(--blue);">float</td><td>Declare floats</td></tr>
      <tr><td class="mono" style="color:var(--blue);">char</td><td>Declare characters</td></tr>
      <tr><td class="mono" style="color:var(--green);">if / else</td><td>Take decisions</td></tr>
      <tr><td class="mono" style="color:var(--green);">for / while</td><td>Loop / repeat</td></tr>
      <tr><td class="mono" style="color:var(--green);">break</td><td>Exit a loop / case</td></tr>
      <tr><td class="mono" style="color:var(--green);">continue</td><td>Skip to next iteration</td></tr>
      <tr><td class="mono" style="color:var(--green);">return</td><td>Send a value back</td></tr>
      <tr><td class="mono" style="color:var(--purple);">void</td><td>No type / no value</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Standard C90 has <strong>32</strong> keywords. C99/C11 added a few more like <span class="mono">_Bool</span> and <span class="mono">inline</span>.</div>
  </div>
</div>

</div>

  </template>
</Slide2>