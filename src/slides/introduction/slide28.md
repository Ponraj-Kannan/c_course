<Slide2 topic="Coding Q2: Print College Name">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q2</span>
  <span class="badge-easy">EASY</span>
  <span class="pill pill-blue">printf with text</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Print College Name</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Write a C program that prints your college name in capital letters.
    </div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">FACEPREP INSTITUTE OF TECHNOLOGY</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Pass the college name as a string to <span class="mono">printf</span>. Capital letters are part of the string.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"FACEPREP INSTITUTE OF TECHNOLOGY"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Strings keep the exact case you type — including spaces.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
