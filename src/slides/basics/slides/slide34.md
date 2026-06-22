<Slide2 topic="Coding Q3: Area of a Rectangle">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q3</span>
  <span class="badge-easy">EASY</span>
  <span class="pill pill-blue">Multiplication</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Find Area of a Rectangle</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Read length and width of a rectangle, then print its area.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Sample Input</div>
    <div class="output-box" style="margin-top:6px;color:var(--blue);background:#ebf8ff;border-color:var(--blue);">5 3</div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">Area = 15</div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Area = length &times; width.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">length</span>, <span style="color:#0e6ead;">width</span>, <span style="color:#0e6ead;">area</span>;</span>
    <br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%d %d"</span>, &amp;<span style="color:#0e6ead;">length</span>, &amp;<span style="color:#0e6ead;">width</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">area</span> = <span style="color:#0e6ead;">length</span> * <span style="color:#0e6ead;">width</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Area = %d"</span>, <span style="color:#0e6ead;">area</span>);</span>
    <br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Try changing types to <span class="mono">float</span> for decimal dimensions.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
