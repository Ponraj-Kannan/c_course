---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — DO-WHILE LOOP TRACING
═══════════════════════════════════════════════════════ -->

<Slide2 topic="do-while Loop">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">do-while Loop — <span class="highlight">Tracing</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Code Example</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px 18px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">n</span> = <span style="color:#b45309;">10</span>;<br>
    <br>
    <span style="color:#ef5050;">do</span> {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d\n"</span>, <span style="color:#0e6ead;">n</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">n</span> <span style="color:#c49a00;">-=</span> <span style="color:#b45309;">2</span>;</span>
    } <span style="color:#ef5050;">while</span> (<span style="color:#0e6ead;">n</span> <span style="color:#c49a00;">&gt;</span> <span style="color:#b45309;">0</span>);
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>Even if <code>n</code> started as <code>0</code> or negative, the body would still execute <strong>once</strong> before the condition is checked.</div>
  </div>
</div>

<div class="flex-col">
  <div v-after class="section-label">Step-by-Step Trace: n = 10 counting down by 2</div>
  <div>
    <table class="trace-table">
      <thead v-after>
        <tr><th>Iteration</th><th>n (before print)</th><th>Output</th><th>n after -=2</th><th>Condition (n &gt; 0)</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>1</td><td>10</td><td>10</td><td>8</td><td class="yes">True</td></tr>
        <tr v-click><td>2</td><td>8</td><td>8</td><td>6</td><td class="yes">True</td></tr>
        <tr v-click><td>3</td><td>6</td><td>6</td><td>4</td><td class="yes">True</td></tr>
        <tr v-click><td>4</td><td>4</td><td>4</td><td>2</td><td class="yes">True</td></tr>
        <tr v-click><td>5</td><td>2</td><td>2</td><td>0</td><td class="no">False → Exit</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="output-box" style="margin-top:8px;font-size:.72rem;">
    <span class="comment">/* Output */</span><br>
    10 &nbsp;8 &nbsp;6 &nbsp;4 &nbsp;2
  </div>
</div>

</div>

  </template>
</Slide2>
