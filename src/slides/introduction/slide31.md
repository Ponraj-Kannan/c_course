<Slide2 topic="Coding Q5: Welcome Message Program">
  <template #content>

<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
  <span class="pill pill-navy">Q5</span>
  <span class="badge-medium">MEDIUM</span>
  <span class="pill pill-blue">Multi-line formatting</span>
</div>

<div class="slide-h1" style="margin-bottom:10px;">Create a Welcome Message Program</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div class="section-label" style="margin-bottom:4px;">Problem Statement</div>
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Print a multi-line welcome message with a banner of equal signs above and below.
    </div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Sample Output</div>
    <div class="output-box" style="margin-top:6px;font-family:'Fira Code',monospace;">
      ============================<br>
      &nbsp; Welcome to C Programming<br>
      &nbsp; First-Year CSE Module 1<br>
      ============================
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Hint</div>
    <div class="body-text">Print four separate lines using <span class="mono">printf</span> with <span class="mono">\n</span> at the end of each string.</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"============================\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"  Welcome to C Programming\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"  First-Year CSE Module 1\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"============================\n"</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>
</div>

</div>

  </template>
</Slide2>
