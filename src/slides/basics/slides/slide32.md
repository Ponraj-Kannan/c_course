<Slide2 topic="Coding Q1: Student Information">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q1</span>
  <span class="badge-easy">EASY</span>
  <span class="pill pill-blue">Variables &amp; Data Types</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Store and Display Student Information</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Declare variables for a student's name, age, and CGPA, then display them.
    </div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;">
      Name: Anu<br>
      Age : 19<br>
      CGPA: 8.50
    </div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Use a string (char array), an int, and a float.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">name</span>[] = <span style="color:#2d7a00;">"Anu"</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">19</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">cgpa</span> = <span style="color:#b45309;">8.5</span>;</span>
    <br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Name: %s\n"</span>, <span style="color:#0e6ead;">name</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Age : %d\n"</span>, <span style="color:#0e6ead;">age</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"CGPA: %.2f\n"</span>, <span style="color:#0e6ead;">cgpa</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Strings in C are arrays of chars — we'll explore them in a later module.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
