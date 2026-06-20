---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — POINTERS AND ARRAYS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Pointers</span> and <span class="highlight">Arrays</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An array name is essentially a <strong style="color:var(--red);">constant pointer</strong> to its first element. <span class="mono">arr</span> and <span class="mono">&amp;arr[0]</span> hold the <strong style="color:var(--green);">same address</strong>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> arr[] = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p = arr; <span style="color:#6b7280;">// same as &amp;arr[0]</span>
  </div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Two Equivalent Notations</div>
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Array Notation</th><th>Pointer Notation</th></tr>
      </thead>
      <tbody>
        <tr v-click><td class="mono">arr[0]</td><td class="mono">*p</td></tr>
        <tr v-click><td class="mono">arr[1]</td><td class="mono">*(p + 1)</td></tr>
        <tr v-click><td class="mono">arr[i]</td><td class="mono">*(p + i)</td></tr>
        <tr v-click><td class="mono">&amp;arr[i]</td><td class="mono">p + i</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Walking the Array via Pointer</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">0</span>; i &lt; <span style="color:#b45309;">3</span>; i++)<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, <span style="color:#ef5050;">*</span>(p + i));
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">10 &nbsp; 20 &nbsp; 30</div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Key difference:</strong> Unlike a real pointer, the array name <span class="mono">arr</span> itself <strong>cannot be reassigned</strong> — <span class="mono">arr++</span> is a compile error.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><span class="mono">sizeof(arr)</span> gives the <strong>whole array's size</strong>, but <span class="mono">sizeof(p)</span> gives just the <strong>pointer's size</strong> — a common confusion point.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
