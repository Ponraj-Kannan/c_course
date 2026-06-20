<Slide2 topic="Coding Q3: Print Multiple Lines">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q3</span>
  <span class="badge-easy">EASY</span>
  <span class="pill pill-blue">\n usage</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Print Multiple Lines</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Print Name, Course, and College — each on its own line.
    </div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">
      Name: Anu<br>
      Course: B.Tech CSE<br>
      College: FacePrep
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Insert <span class="mono">\n</span> between lines, or call <span class="mono">printf</span> three times.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Name: Anu\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Course: B.Tech CSE\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"College: FacePrep\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>
</div>

</div>

  </template>
</Slide2>
