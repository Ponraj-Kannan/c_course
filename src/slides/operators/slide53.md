---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 25 — INCREMENT & DECREMENT OPERATORS (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Increment & Decrement <span class="highlight">Operators</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      The <strong style="color:var(--red);">increment (<span class="mono">++</span>)</strong> and <strong style="color:var(--red);">decrement (<span class="mono">--</span>)</strong> operators add or subtract 1 from a variable. They are unique to C-style languages and do not exist in Python!
    </div>
  </div>

  <div>
    <table class="cmp-table" style="font-size:.72rem;margin-top:6px;">
      <thead v-click><tr><th>Operator</th><th>Name</th><th>Example</th><th>Effect</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">++x</td><td>Pre-increment</td><td class="mono">y = ++x;</td><td class="mono yes">x first, then use</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">x++</td><td>Post-increment</td><td class="mono">y = x++;</td><td class="mono yes">use first, then x</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">--x</td><td>Pre-decrement</td><td class="mono">y = --x;</td><td class="mono no">x first, then use</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">x--</td><td>Post-decrement</td><td class="mono">y = x--;</td><td class="mono no">use first, then x</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Pre vs Post:</strong> <span class="mono">++x</span> increments x <em>before</em> using its value. <span class="mono">x++</span> uses the current value <em>then</em> increments. The difference matters inside expressions!</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Code Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">5</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, ++<span style="color:#0e6ead;">x</span>);  <span style="color:#6b7280;">// 6 (pre: x becomes 6 first)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">x</span>++);  <span style="color:#6b7280;">// 6 (post: prints 6, then x→7)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">x</span>);    <span style="color:#6b7280;">// 7 (x is now 7)</span><br>
    <br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">b</span> = <span style="color:#0e6ead;">a</span>--;  <span style="color:#6b7280;">// b = 10, then a → 9</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"a=%d b=%d\n"</span>, <span style="color:#0e6ead;">a</span>, <span style="color:#0e6ead;">b</span>); <span style="color:#6b7280;">// a=9 b=10</span>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Common Use in Loops</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#6b7280;">// Count from 1 to 5</span><br>
    <span style="color:#ef5050;">for</span> (<span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">1</span>; <span style="color:#0e6ead;">i</span> <= <span style="color:#b45309;">5</span>; <span style="color:#0e6ead;">i</span>++) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#0e6ead;">i</span>);</span>
    }<br>
    <span style="color:#6b7280;">// 1 2 3 4 5</span>
  </div>

  <div v-click class="card card-orange" style="margin-top:6px;">
    <div class="small-text"><strong>Real-world use:</strong> Loop counters, array indexing, iterating through data structures, pointer arithmetic</div>
  </div>

</div>

</div>

  </template>
</Slide2>
