<Slide2 topic="Program Anatomy — Color Map">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Program <span class="highlight">Anatomy</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Layered View</div>

  <div v-after style="display:flex;flex-direction:column;gap:6px;padding:8px;background:#f7f8fc;border:1px solid var(--border);border-radius:10px;">
    <div class="card card-orange" style="padding:8px;text-align:center;">
      <div class="slide-h3" style="color:var(--orange);">Comments &amp; Docs</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="card card-blue" style="padding:8px;text-align:center;">
      <div class="slide-h3" style="color:var(--blue);">Header Files (#include)</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="card card-green" style="padding:8px;text-align:center;">
      <div class="slide-h3" style="color:var(--green);">Global Declarations</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="card card-red" style="padding:8px;text-align:center;">
      <div class="slide-h3" style="color:var(--red-dark);">main() Function</div>
    </div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="card card-purple" style="padding:8px;text-align:center;">
      <div class="slide-h3" style="color:var(--purple);">Statements &amp; return</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="callout callout-info">
    <div><strong>Rule:</strong> A C program <strong>must</strong> have a <span class="mono">main()</span> — execution begins and ends there.</div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Style:</strong> One statement per line, ending with a semicolon <span class="mono">;</span>. Indent inside braces.</div>
  </div>

  <div v-click class="card card-navy">
    <div class="slide-h3" style="margin-bottom:4px;">Naming &amp; Style Tips</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Use clear function and variable names.</li>
      <li>Always close braces in matching pairs.</li>
      <li>Add comments to explain "why", not just "what".</li>
    </ul>
  </div>

  <div v-click class="callout callout-success">
    <div>A clean structure today saves hours of debugging tomorrow.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
