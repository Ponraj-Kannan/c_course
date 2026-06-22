<Slide2 topic="Data Types — Overview">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Data Types</span> in C</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">data type</strong> tells the compiler <strong style="color:var(--green);">what kind</strong> of value a variable will hold — and how much memory to reserve.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Why Data Types Matter</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Right memory size = no waste</li>
      <li>Correct interpretation of bits</li>
      <li>Prevents wrong operations (e.g. dividing a char)</li>
      <li>Improves performance</li>
    </ul>
  </div>

  <div v-click class="card card-orange">
    <div class="small-text"><strong>Rule:</strong> the type is fixed at <strong>declaration</strong> and cannot change.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Quick Snapshot</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Type</th><th>Holds</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">int</td><td>Whole numbers</td><td class="mono">18</td></tr>
      <tr><td class="mono">float</td><td>Decimals</td><td class="mono">3.14</td></tr>
      <tr><td class="mono">double</td><td>Precise decimals</td><td class="mono">3.14159265</td></tr>
      <tr><td class="mono">char</td><td>Single character</td><td class="mono">'A'</td></tr>
      <tr><td class="mono">void</td><td>No value</td><td class="mono">void show()</td></tr>
    </tbody>
  </table>
</div>

</div>

  </template>
</Slide2>
