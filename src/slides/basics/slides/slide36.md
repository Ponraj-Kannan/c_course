<Slide2 topic="Coding Q5 &amp; Q6: Read Numeric Input">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Read Numeric <span class="highlight">Input</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-navy">Q5</span>
    <span class="badge-easy">EASY</span>
    <span class="pill pill-blue">Integer scan</span>
  </div>

  <div v-click class="slide-h3">Read and Display Age</div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Age: "</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%d"</span>, &amp;<span style="color:#0e6ead;">age</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"You are %d"</span>, <span style="color:#0e6ead;">age</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="output-box">
    <span class="prompt">Age: </span>19<br>
    You are 19
  </div>
</div>

<div class="flex-col">
  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-navy">Q6</span>
    <span class="badge-easy">EASY</span>
    <span class="pill pill-blue">Mixed types</span>
  </div>

  <div v-click class="slide-h3">Read Integer and Float</div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">a</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">b</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%d %f"</span>, &amp;<span style="color:#0e6ead;">a</span>, &amp;<span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"int=%d float=%.2f"</span>, <span style="color:#0e6ead;">a</span>, <span style="color:#0e6ead;">b</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="output-box">
    7 3.14<br>
    int=7 float=3.14
  </div>
</div>

</div>

  </template>
</Slide2>
