<Slide2 topic="Coding Q10 &amp; Q11: Type Conversion">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Type Conversion <span class="highlight">Programs</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-navy">Q10</span>
    <span class="badge-easy">EASY</span>
    <span class="pill pill-blue">int -&gt; float</span>
  </div>

  <div v-click class="slide-h3">Convert Integer to Float</div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">n</span> = <span style="color:#b45309;">25</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">f</span> = (<span style="color:#0e6ead;">float</span>)<span style="color:#0e6ead;">n</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d -&gt; %.2f"</span>, <span style="color:#0e6ead;">n</span>, <span style="color:#0e6ead;">f</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="output-box">25 -&gt; 25.00</div>
</div>

<div class="flex-col">
  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-navy">Q11</span>
    <span class="badge-medium">MEDIUM</span>
    <span class="pill pill-blue">Casting</span>
  </div>

  <div v-click class="slide-h3">Calculate Average Using Casting</div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">90</span>, <span style="color:#0e6ead;">b</span> = <span style="color:#b45309;">85</span>, <span style="color:#0e6ead;">c</span> = <span style="color:#b45309;">78</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">avg</span> = (<span style="color:#0e6ead;">float</span>)(<span style="color:#0e6ead;">a</span>+<span style="color:#0e6ead;">b</span>+<span style="color:#0e6ead;">c</span>) / <span style="color:#b45309;">3</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Avg = %.2f"</span>, <span style="color:#0e6ead;">avg</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="output-box">Avg = 84.33</div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>Without the cast, the sum (253) divided by 3 would give integer 84, not 84.33.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
