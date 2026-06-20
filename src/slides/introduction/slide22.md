<Slide2 topic="printf() — Output Function">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">printf()</span> Function</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono"><strong style="color:var(--red);">printf()</strong></span> sends formatted text to the screen. It lives in <span class="mono">stdio.h</span>.
    </div>
  </div>

  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block" style="font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"format string"</span>, <span style="color:#c49a00;">arguments</span>);
  </div>

  <div v-click class="section-label">Printing Plain Text</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Welcome"</span>);<br>
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"\nHello, C!"</span>);
  </div>

  <div v-click class="output-box">Welcome<br>Hello, C!</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Printing Variables</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">19</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">cgpa</span> = <span style="color:#b45309;">8.5</span>;<br>
    <br>
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Age = %d\n"</span>, <span style="color:#0e6ead;">age</span>);<br>
    <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"CGPA = %.2f"</span>, <span style="color:#0e6ead;">cgpa</span>);
  </div>

  <div v-click class="output-box">
    Age = 19<br>
    CGPA = 8.50
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div><span class="mono">%d</span>, <span class="mono">%f</span>, <span class="mono">%c</span>, <span class="mono">%s</span> are <strong>format specifiers</strong> — placeholders for values.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
