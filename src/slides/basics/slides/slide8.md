<Slide2 topic="const Keyword &amp; Memory">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">const</span> Keyword</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Syntax &amp; Behaviour</div>

  <div v-after class="code-block">
    <span style="color:#ef5050;">const</span> <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">PI</span> = <span style="color:#b45309;">3.14</span>;<br>
    <br>
    <span style="color:#0e6ead;">PI</span> = <span style="color:#b45309;">3.15</span>;  <span style="color:#6b7280;">// error</span><br>
    <span style="color:#c0392b;font-weight:700;">// assignment of read-only variable</span>
  </div>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div>Any attempt to modify a <span class="mono">const</span> is caught at <strong>compile time</strong>.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#6b7280;">// area of a circle</span><br>
    <span style="color:#ef5050;">const</span> <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">PI</span> = <span style="color:#b45309;">3.14159</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">r</span> = <span style="color:#b45309;">5</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">area</span> = <span style="color:#0e6ead;">PI</span> * <span style="color:#0e6ead;">r</span> * <span style="color:#0e6ead;">r</span>;
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Memory View</div>

  <div v-after style="background:#f7f8fc;border:1px solid var(--border);border-radius:10px;padding:14px;">
    <div style="display:flex;gap:10px;align-items:center;">
      <div class="mem-cell m-float" style="min-width:90px;">
        <div class="mem-name">PI</div>
        <div>3.14159</div>
      </div>
      <div style="color:var(--muted);font-size:1rem;">&#x2190;</div>
      <div class="card card-red" style="padding:8px;flex:1;">
        <div class="small-text"><strong>Read-only:</strong> the compiler marks this memory location as protected.</div>
      </div>
    </div>
  </div>

  <div v-click class="card card-blue" style="margin-top:6px;">
    <div class="slide-h3" style="color:var(--blue);">Real-World Examples</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Mathematical constants (PI, E)</li>
      <li>Physical constants (speed of light)</li>
      <li>Game settings (MAX_PLAYERS = 4)</li>
      <li>Tax rate inside a billing app</li>
    </ul>
  </div>
</div>

</div>

  </template>
</Slide2>
