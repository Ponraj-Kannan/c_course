<Slide2 topic="Module 2 — Summary">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What You've <span class="highlight">Learned</span> Today</div>

<div class="g2" style="gap:12px;">

<div class="flex-col" style="gap:8px;">

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">T</div>
    <div>
      <div class="slide-h3">Tokens</div>
      <div class="small-text">Keywords, identifiers, constants, operators, symbols, strings.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">V</div>
    <div>
      <div class="slide-h3">Variables &amp; Constants</div>
      <div class="small-text">Declare, initialize, update — and lock with <span class="mono">const</span>.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--green);">
    <div class="icon-circle ic-green">D</div>
    <div>
      <div class="slide-h3">Data Types</div>
      <div class="small-text">int, float, double, char, void — choose the right type.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--orange);">
    <div class="icon-circle ic-orange">O</div>
    <div>
      <div class="slide-h3">Operators</div>
      <div class="small-text">Arithmetic, relational, logical, assignment, ++ / --.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--purple);">
    <div class="icon-circle ic-purple">I</div>
    <div>
      <div class="slide-h3">I/O &amp; Casting</div>
      <div class="small-text">printf, scanf, format specifiers, implicit + explicit conversion.</div>
    </div>
  </div>

</div>

<div class="flex-col" style="gap:10px;">

  <div v-click class="card-navy" style="border-radius:10px;padding:14px 18px;">
    <div style="font-size:.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px;">Quick Reference Cheat Sheet</div>
    <div style="font-family:'Fira Code',monospace;font-size:.68rem;line-height:1.9;color:var(--navy);">
      <div v-after><span style="color:#0e6ead;">int</span> n = 10; <span style="color:#6b7280;"># integer</span></div>
      <div v-after><span style="color:#0e6ead;">float</span> x = 3.14; <span style="color:#6b7280;"># decimal</span></div>
      <div v-after><span style="color:#0e6ead;">double</span> y = 1.234; <span style="color:#6b7280;"># precise</span></div>
      <div v-after><span style="color:#0e6ead;">char</span> g = 'A'; <span style="color:#6b7280;"># single char</span></div>
      <div v-after><span style="color:#ef5050;">const</span> int MAX = 100; <span style="color:#6b7280;"># constant</span></div>
      <div v-after>printf("%d", n); <span style="color:#6b7280;"># output</span></div>
      <div v-after>scanf("%d", &amp;n); <span style="color:#6b7280;"># input</span></div>
      <div v-after>(float)10 / 3 <span style="color:#6b7280;"># cast</span></div>
      <div v-after>== != &lt; &gt; &amp;&amp; || ! <span style="color:#6b7280;"># conditions</span></div>
    </div>
  </div>

  <div v-click class="callout callout-success">
    <div><strong>Next module:</strong> Decision making and loops — <span class="mono">if</span>, <span class="mono">else</span>, <span class="mono">switch</span>, <span class="mono">for</span>, <span class="mono">while</span>.</div>
  </div>

  <div v-click class="card card-orange">
    <div class="small-text"><strong>Tip:</strong> Type every example you've seen today by hand. Reading is good; typing builds muscle memory.</div>
  </div>

</div>
</div>
  </template>
</Slide2>
