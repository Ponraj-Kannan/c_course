<Slide2 topic="Coding Q4: Print Formatted Text">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q4</span>
  <span class="badge-medium">MEDIUM</span>
  <span class="pill pill-blue">Tabs &amp; alignment</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Print Formatted Text</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Print Name and Age on the same line, separated by a tab. Then print "Welcome to C!" on a new line.
    </div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">
      Anu&nbsp;&nbsp;&nbsp;19<br>
      Welcome to C!
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Use <span class="mono">\t</span> for the tab and <span class="mono">\n</span> for a new line.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Anu\t19\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Welcome to C!"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Mix escape sequences inside the same string to format the output exactly how you want.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
