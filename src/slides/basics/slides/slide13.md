<Slide2 topic="int — Integer Data Type">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">int</span> — Integer Data Type</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">Purpose</div>
    <div class="body-text">Stores <strong>whole numbers</strong> — positive, negative, or zero. No decimal point.</div>
  </div>

  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">variable_name</span> = <span style="color:#b45309;">value</span>;
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">marks</span> = <span style="color:#b45309;">95</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">temp</span> = -<span style="color:#b45309;">5</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">age</span>);
  </div>

  <div v-click class="output-box">20</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Memory &amp; Range</div>

  <table v-after class="cmp-table" style="font-size:.72rem;">
    <thead>
      <tr><th>Property</th><th>Value</th></tr>
    </thead>
    <tbody>
      <tr><td>Size</td><td class="mono">4 bytes (typical)</td></tr>
      <tr><td>Range</td><td class="mono">-2,147,483,648 to 2,147,483,647</td></tr>
      <tr><td>Format specifier</td><td class="mono">%d</td></tr>
      <tr><td>Default</td><td>Garbage if uninitialized</td></tr>
    </tbody>
  </table>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:4px;">Memory View</div>
    <div style="display:flex;gap:8px;align-items:center;background:#f7f8fc;padding:12px;border-radius:10px;border:1px solid var(--border);">
      <div class="mem-cell m-int" style="min-width:90px;">
        <div class="mem-name">age</div>
        <div>20</div>
      </div>
      <div class="small-text mono">4 bytes &middot; signed int</div>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div><strong>Overflow:</strong> Going past the max range wraps around silently — careful with very large numbers.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
