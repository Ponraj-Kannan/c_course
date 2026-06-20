---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — TRAVERSING AN ARRAY
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Traversing</span> an Array</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Traversal</strong> means visiting each element in order — almost always done with a <strong style="color:var(--green);">for loop</strong> that runs from index 0 to size - 1.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Printing All Elements</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.95;">
    <span style="color:#0e6ead;">int</span> marks[<span style="color:#b45309;">5</span>] = {<span style="color:#b45309;">90</span>,<span style="color:#b45309;">85</span>,<span style="color:#b45309;">78</span>,<span style="color:#b45309;">92</span>,<span style="color:#b45309;">88</span>};<br>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">0</span>; i &lt; <span style="color:#b45309;">5</span>; i++) {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, marks[i]);<br>
    }
  </div>
  <div v-click class="output-box" style="font-size:.72rem;">90 &nbsp; 85 &nbsp; 78 &nbsp; 92 &nbsp; 88</div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Use <span class="mono">sizeof(marks) / sizeof(marks[0])</span> to compute array length automatically instead of hardcoding it.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Sum & Average Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> sum = <span style="color:#b45309;">0</span>;<br>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">0</span>; i &lt; <span style="color:#b45309;">5</span>; i++) {<br>
    &nbsp;&nbsp;sum += marks[i];<br>
    }<br>
    <span style="color:#0e6ead;">float</span> avg = sum / <span style="color:#b45309;">5.0</span>;
  </div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Loop Trace</div>
    <table class="trace-table">
      <thead v-click>
        <tr><th>i</th><th>marks[i]</th><th>sum</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>0</td><td>90</td><td>90</td></tr>
        <tr v-click><td>1</td><td>85</td><td>175</td></tr>
        <tr v-click><td>2</td><td>78</td><td>253</td></tr>
        <tr v-click><td>3</td><td>92</td><td>345</td></tr>
        <tr v-click class="hl"><td>4</td><td>88</td><td>433</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div>Traversal is the foundation for nearly every array operation: searching, summing, finding max/min, and printing.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
