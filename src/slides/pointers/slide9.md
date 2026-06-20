---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — POINTERS AND FUNCTION PARAMETERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Pointers &amp; Function Parameters <span class="highlight">(Pass by Reference)</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">Pass by Value (doesn't work)</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> incr(<span style="color:#0e6ead;">int</span> n) {<br>
    &nbsp;&nbsp;n = n + <span style="color:#b45309;">1</span>;  <span style="color:#6b7280;">// only changes the copy</span><br>
    }<br>
    <span style="color:#0e6ead;">int</span> x = <span style="color:#b45309;">5</span>;<br>
    incr(x);  <span style="color:#6b7280;">// x is still 5!</span>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:10px;margin-bottom:4px;">
    <span class="pill pill-green">Pass by Reference (via pointer)</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> incr(<span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>n) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">*</span>n = <span style="color:#ef5050;">*</span>n + <span style="color:#b45309;">1</span>; <span style="color:#6b7280;">// changes original</span><br>
    }<br>
    <span style="color:#0e6ead;">int</span> x = <span style="color:#b45309;">5</span>;<br>
    incr(<span style="color:#ef5050;">&amp;</span>x);  <span style="color:#6b7280;">// x is now 6!</span>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Classic Example: Swap Function</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> swap(<span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>a, <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>b) {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> temp = <span style="color:#ef5050;">*</span>a;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">*</span>a = <span style="color:#ef5050;">*</span>b;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">*</span>b = temp;<br>
    }<br>
    swap(<span style="color:#ef5050;">&amp;</span>x, <span style="color:#ef5050;">&amp;</span>y);
  </div>

  <div style="margin-top:6px;">
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Approach</th><th>Can Modify Caller's Data?</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>Pass by value</td><td class="no">✘ No — works on a copy</td></tr>
        <tr v-click><td>Pass by pointer</td><td class="yes">✔ Yes — works on the original</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div>This is how functions like <span class="mono">scanf(&amp;x)</span> write values back into your variables.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Passing a pointer also avoids <strong>copying large structures</strong> — only the address is copied, not the whole data.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
