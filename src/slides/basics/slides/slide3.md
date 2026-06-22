<Slide2 topic="Keywords — What &amp; Why">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Keywords</span> — Reserved Words in C</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">keyword</strong> is a <strong style="color:var(--green);">reserved word</strong> with a fixed meaning in C. The compiler already knows what it does — you cannot use it as a variable name.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Why Reserved?</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Each keyword has a defined behaviour</li>
      <li>Allowing reuse would make code ambiguous</li>
      <li>Keeps the language grammar predictable</li>
    </ul>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Rules for Using Keywords</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Always lowercase: <span class="mono">int</span>, not <span class="mono">Int</span></li>
      <li>Cannot be a variable, function, or label name</li>
      <li>Standard C has only 32 keywords (more in newer C)</li>
    </ul>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Valid vs Invalid Usage</div>

  <div v-after class="g2" style="gap:10px;">
    <div class="code-block">
      <span style="color:#6b7280;">// Valid</span><br>
      <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">19</span>;<br>
      <span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;
    </div>
    <div class="code-block" style="border-color:var(--red);">
      <span style="color:#6b7280;">// Invalid</span><br>
      <span style="color:#ef5050;">int</span> <span style="color:#ef5050;">int</span> = <span style="color:#b45309;">5</span>;<br>
      <span style="color:#c0392b;font-weight:700;">// error: 'int' is a keyword</span>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div><strong>Common mistake:</strong> Using <span class="mono">float</span>, <span class="mono">if</span>, or <span class="mono">while</span> as variable names — the compiler will reject it.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
