<Slide2 topic="Constants — Introduction &amp; Types">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Constants</span> — Values That Don't Change</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">constant</strong> is a fixed value that <strong style="color:var(--green);">cannot change</strong> during the program's run.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Why Use Constants?</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Make code more readable</li>
      <li>Prevent accidental modification</li>
      <li>Single place to change the value</li>
    </ul>
  </div>

  <div v-click class="code-block">
    <span style="color:#6b7280;">// real-world fixed values</span><br>
    <span style="color:#ef5050;">const</span> <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">PI</span> = <span style="color:#b45309;">3.14</span>;<br>
    <span style="color:#ef5050;">const</span> <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">MAX</span> = <span style="color:#b45309;">100</span>;
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Four Types of Constants</div>

  <div v-after class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">I</div>
    <div>
      <div class="slide-h3">Integer Constant</div>
      <div class="small-text mono">10, -5, 0, 1000</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">F</div>
    <div>
      <div class="slide-h3">Float Constant</div>
      <div class="small-text mono">3.14, -0.5, 2.0e3</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--green);">
    <div class="icon-circle ic-green">C</div>
    <div>
      <div class="slide-h3">Character Constant</div>
      <div class="small-text mono">'A', 'b', '9', '\n'</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--teal);">
    <div class="icon-circle ic-teal">S</div>
    <div>
      <div class="slide-h3">String Constant</div>
      <div class="small-text mono">"Hello", "C lang"</div>
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
