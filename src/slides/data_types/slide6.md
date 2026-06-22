---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — TYPE MODIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Type Modifiers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Type modifiers are keywords applied <strong style="color:var(--red);">before a base type</strong> to change its <strong style="color:var(--green);">size or range</strong> — without changing its fundamental nature.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">The Four Modifiers</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-blue">short</span>
      <div class="body-text">Reduces size — <span class="mono">short int</span> is 2 bytes (range: −32,768 to 32,767)</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-green">long</span>
      <div class="body-text">Increases size — <span class="mono">long int</span> is 4 or 8 bytes; <span class="mono">long long int</span> is 8 bytes</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-orange">signed</span>
      <div class="body-text">Allows negative values — half the range is negative (default for <span class="mono">int</span> and <span class="mono">char</span>)</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-red">unsigned</span>
      <div class="body-text">Non-negative only — doubles the positive range (e.g. <span class="mono">unsigned int</span>: 0 to 4,294,967,295)</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Modified Types — Size &amp; Range</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Type</th><th>Size</th><th>Range</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">short int</td><td>2 bytes</td><td>−32,768 to 32,767</td></tr>
      <tr v-click><td class="mono">unsigned short</td><td>2 bytes</td><td>0 to 65,535</td></tr>
      <tr v-click><td class="mono">int</td><td>4 bytes</td><td>−2.1B to 2.1B</td></tr>
      <tr v-click><td class="mono">unsigned int</td><td>4 bytes</td><td>0 to 4.2B</td></tr>
      <tr v-click><td class="mono">long long int</td><td>8 bytes</td><td>−9.2×10¹⁸ to 9.2×10¹⁸</td></tr>
      <tr v-click><td class="mono">unsigned char</td><td>1 byte</td><td>0 to 255</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div><span class="mono">signed</span> and <span class="mono">unsigned</span> apply to <span class="mono">int</span> and <span class="mono">char</span>. <span class="mono">short</span> and <span class="mono">long</span> apply only to <span class="mono">int</span> and <span class="mono">double</span> (<span class="mono">long double</span>).</div>
  </div>

</div>

</div>

  </template>
</Slide2>
