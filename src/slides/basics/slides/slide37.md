<Slide2 topic="Coding Q7: Simple Calculator">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q7</span>
  <span class="badge-medium">MEDIUM</span>
  <span class="pill pill-blue">Operators</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Simple Calculator</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Read two numbers. Print their sum, difference, product, quotient, and remainder.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Sample Input</div>
    <div class="output-box" style="margin-top:6px;color:var(--blue);background:#ebf8ff;border-color:var(--blue);">10 3</div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">
      Sum = 13<br>
      Diff = 7<br>
      Prod = 30<br>
      Quot = 3<br>
      Rem  = 1
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">a</span>, <span style="color:#0e6ead;">b</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%d %d"</span>, &amp;<span style="color:#0e6ead;">a</span>, &amp;<span style="color:#0e6ead;">b</span>);</span>
    <br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Sum = %d\n"</span>,  <span style="color:#0e6ead;">a</span> + <span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Diff = %d\n"</span>, <span style="color:#0e6ead;">a</span> - <span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Prod = %d\n"</span>, <span style="color:#0e6ead;">a</span> * <span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Quot = %d\n"</span>, <span style="color:#0e6ead;">a</span> / <span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Rem  = %d"</span>,   <span style="color:#0e6ead;">a</span> % <span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>
</div>

</div>

  </template>
</Slide2>
