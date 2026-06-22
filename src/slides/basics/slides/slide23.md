<Slide2 topic="printf() — Output Function">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">printf()</span> — Printing to Screen</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block" style="font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"format"</span>, <span style="color:#c49a00;">arg1</span>, <span style="color:#c49a00;">arg2</span>, ...);
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Printing Plain Text</div>

  <div v-after class="code-block">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hello World"</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"\nWelcome to C"</span>);
  </div>

  <div v-click class="output-box">Hello World<br>Welcome to C</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Printing Variables</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">19</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">cgpa</span> = <span style="color:#b45309;">8.5</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Age = %d\n"</span>, <span style="color:#0e6ead;">age</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"CGPA = %.2f"</span>, <span style="color:#0e6ead;">cgpa</span>);
  </div>

  <div v-click class="output-box">Age = 19<br>CGPA = 8.50</div>

  <div v-click class="section-label" style="margin-top:6px;">Multiple Values in One Call</div>

  <div v-after class="code-block">
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d %d %d"</span>, <span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>);
  </div>

  <div v-click class="output-box">1 2 3</div>
</div>

</div>

  </template>
</Slide2>
