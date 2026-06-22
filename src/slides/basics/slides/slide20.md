<Slide2 topic="Operators — Assignment &amp; Inc/Dec">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Assignment</span> &amp; <span class="highlight">Increment / Decrement</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-orange" style="text-align:center;">
    <div class="slide-h2" style="color:var(--orange);">Assignment Operators</div>
  </div>

  <table v-click class="cmp-table">
    <thead>
      <tr><th>Op</th><th>Meaning</th><th>Equivalent</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">=</td><td>Assign</td><td class="mono">a = 5</td></tr>
      <tr><td class="mono">+=</td><td>Add &amp; assign</td><td class="mono">a = a + 5</td></tr>
      <tr><td class="mono">-=</td><td>Subtract &amp; assign</td><td class="mono">a = a - 5</td></tr>
      <tr><td class="mono">*=</td><td>Multiply &amp; assign</td><td class="mono">a = a * 5</td></tr>
      <tr><td class="mono">/=</td><td>Divide &amp; assign</td><td class="mono">a = a / 5</td></tr>
      <tr><td class="mono">%=</td><td>Modulo &amp; assign</td><td class="mono">a = a % 5</td></tr>
    </tbody>
  </table>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">x</span> += <span style="color:#b45309;">5</span>;  <span style="color:#6b7280;">// x = 15</span><br>
    <span style="color:#0e6ead;">x</span> *= <span style="color:#b45309;">2</span>;  <span style="color:#6b7280;">// x = 30</span>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-purple" style="text-align:center;">
    <div class="slide-h2" style="color:var(--purple);">Increment &amp; Decrement</div>
  </div>

  <table v-click class="cmp-table">
    <thead>
      <tr><th>Op</th><th>Form</th><th>Effect</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">++x</td><td>Pre-increment</td><td>Increase, THEN use</td></tr>
      <tr><td class="mono">x++</td><td>Post-increment</td><td>Use, THEN increase</td></tr>
      <tr><td class="mono">--x</td><td>Pre-decrement</td><td>Decrease, THEN use</td></tr>
      <tr><td class="mono">x--</td><td>Post-decrement</td><td>Use, THEN decrease</td></tr>
    </tbody>
  </table>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">5</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, ++<span style="color:#0e6ead;">a</span>); <span style="color:#6b7280;">// 6</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#0e6ead;">a</span>++); <span style="color:#6b7280;">// 6, then a=7</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>,  <span style="color:#0e6ead;">a</span>);   <span style="color:#6b7280;">// 7</span>
  </div>

  <div v-click class="output-box">6 6 7</div>
</div>

</div>

  </template>
</Slide2>
