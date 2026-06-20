<Slide2 topic="Low-Level vs High-Level — Comparison">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Comparison &amp; <span class="highlight">Architecture</span></div>

<table class="cmp-table">
  <thead>
    <tr><th>Feature</th><th>Low-Level Language</th><th>High-Level Language</th></tr>
  </thead>
  <tbody>
    <tr v-click><td><strong>Speed</strong></td><td class="yes">Very fast</td><td>Fast (but slightly slower)</td></tr>
    <tr v-click><td><strong>Readability</strong></td><td class="no">Very difficult</td><td class="yes">Easy &amp; human-friendly</td></tr>
    <tr v-click><td><strong>Portability</strong></td><td class="no">Hardware-specific</td><td class="yes">Portable across systems</td></tr>
    <tr v-click><td><strong>Development Time</strong></td><td class="no">Very long</td><td class="yes">Short — high productivity</td></tr>
    <tr v-click><td><strong>Memory Control</strong></td><td class="yes">Direct hardware access</td><td>Abstracted away</td></tr>
    <tr v-click><td><strong>Used For</strong></td><td>Drivers, embedded chips</td><td>Apps, websites, AI</td></tr>
  </tbody>
</table>

<div v-click style="margin-top:10px;">
  <div class="section-label" style="margin-bottom:6px;">Layered Computer Architecture</div>
  <div class="g5" style="gap:6px;">
    <div class="card card-green" style="text-align:center;padding:8px;">
      <div class="small-text" style="color:var(--green);font-weight:800;">LAYER 5</div>
      <div class="slide-h3">User Apps</div>
    </div>
    <div class="card card-blue" style="text-align:center;padding:8px;">
      <div class="small-text" style="color:var(--blue);font-weight:800;">LAYER 4</div>
      <div class="slide-h3">High-Level</div>
    </div>
    <div class="card card-orange" style="text-align:center;padding:8px;">
      <div class="small-text" style="color:var(--orange);font-weight:800;">LAYER 3</div>
      <div class="slide-h3">Assembly</div>
    </div>
    <div class="card card-red" style="text-align:center;padding:8px;">
      <div class="small-text" style="color:var(--red-dark);font-weight:800;">LAYER 2</div>
      <div class="slide-h3">Machine</div>
    </div>
    <div class="card card-navy" style="text-align:center;padding:8px;">
      <div class="small-text" style="color:var(--navy-mid);font-weight:800;">LAYER 1</div>
      <div class="slide-h3">Hardware</div>
    </div>
  </div>
</div>

<div v-click class="callout callout-info" style="margin-top:8px;">
  <div><strong>Analogy:</strong> Speaking to a CPU in machine code is like ordering food in raw chemistry symbols. High-level code is like ordering in plain English.</div>
</div>

  </template>
</Slide2>
