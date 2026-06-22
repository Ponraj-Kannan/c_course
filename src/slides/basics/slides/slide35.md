<Slide2 topic="Coding Q4: Read and Display Name">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q4</span>
  <span class="badge-easy">EASY</span>
  <span class="pill pill-blue">String Input</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Read and Display User Name</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Ask the user for their name (single word) and greet them.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Sample Input</div>
    <div class="output-box" style="margin-top:6px;color:var(--blue);background:#ebf8ff;border-color:var(--blue);">Anu</div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">Hello, Anu!</div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Use <span class="mono">%s</span> for the string. With <span class="mono">scanf("%s", name)</span>, no <span class="mono">&amp;</span> is needed.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">name</span>[<span style="color:#b45309;">50</span>];</span>
    <br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Enter your name: "</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%s"</span>, <span style="color:#0e6ead;">name</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hello, %s!"</span>, <span style="color:#0e6ead;">name</span>);</span>
    <br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div><span class="mono">scanf("%s")</span> stops at whitespace. For full names, use <span class="mono">fgets</span> (covered later).</div>
  </div>
</div>

</div>

  </template>
</Slide2>
