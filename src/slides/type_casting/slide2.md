<Slide2 topic="Type Conversion">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Implicit</span> Conversion (Automatic Promotion)</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      The compiler <strong style="color:var(--green);">automatically</strong> promotes a smaller type into a larger compatible type — usually safely.
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>   <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">b</span> = <span style="color:#0e6ead;">a</span>;  <span style="color:#6b7280;">// int promoted to float</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%f"</span>, <span style="color:#0e6ead;">b</span>);
  </div>

  <div v-click class="output-box">10.000000</div>

  <div v-click class="section-label" style="margin-top:6px;">Promotion Order</div>

  <div v-after class="card" style="text-align:center;">
    <div class="mono" style="font-size:.78rem;color:var(--navy);">
      char -&gt; int -&gt; long -&gt; float -&gt; double
    </div>
    <div class="small-text" style="margin-top:4px;">Smaller types get promoted to the larger type in an expression.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Step-by-Step Example</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span>    <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">5</span>;<br>
    <span style="color:#0e6ead;">double</span> <span style="color:#0e6ead;">y</span> = <span style="color:#b45309;">2.5</span>;<br>
    <span style="color:#0e6ead;">double</span> <span style="color:#0e6ead;">r</span> = <span style="color:#0e6ead;">x</span> + <span style="color:#0e6ead;">y</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%.2lf"</span>, <span style="color:#0e6ead;">r</span>);
  </div>

  <div v-click class="output-box">7.50</div>

  <div v-click class="card card-blue">
    <div class="small-text"><strong>What happened:</strong></div>
    <ol class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li><span class="mono">x</span> (int) promoted to double</li>
      <li>Addition: 5.0 + 2.5 = 7.5</li>
      <li>Result stored in <span class="mono">r</span></li>
    </ol>
  </div>
</div>

</div>

  </template>
</Slide2>
