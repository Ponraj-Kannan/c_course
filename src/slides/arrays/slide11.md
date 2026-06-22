---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 11 — ARRAYS VS POINTERS: KEY DIFFERENCES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Arrays</span> vs <span class="highlight">Pointers</span> — Key Differences</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Arrays and pointers are <strong style="color:var(--red);">closely related</strong> but not identical. An array <em>is</em> a block of memory; a pointer just <strong style="color:var(--green);">stores an address</strong>.
    </div>
  </div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th>Array</th><th>Pointer</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Memory allocated</td><td>Fixed at declaration</td><td>Only for the pointer itself</td></tr>
      <tr v-click><td>sizeof()</td><td>Total array size</td><td>Pointer size (e.g. 8 bytes)</td></tr>
      <tr v-click><td>Reassignable</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
      <tr v-click><td>Can be NULL</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
      <tr v-click><td>Supports ++/--</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
    </tbody>
  </table>

</div>

<div class="flex-col">

  <div v-click class="section-label">Demonstrating the Difference</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> arr[<span style="color:#b45309;">5</span>];<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p = arr;<br>
    <br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%lu"</span>, <span style="color:#0e6ead;">sizeof</span>(arr)); <span style="color:#6b7280;">// 20 (5×4 bytes)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%lu"</span>, <span style="color:#0e6ead;">sizeof</span>(p));   <span style="color:#6b7280;">// 8 (pointer size)</span><br>
    <br>
    p<span style="color:#ef5050;">++</span>;       <span style="color:#6b7280;">// valid — p now points to arr[1]</span><br>
    <span style="color:#ef5050;">// arr++;</span>  <span style="color:#6b7280;">// invalid — compile error</span>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div><strong>Beginner Trap:</strong> Confusing array decay (a temporary pointer view) with the array <em>actually being</em> a pointer — they behave the same in expressions, but they are not the same kind of variable.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div>Think of it this way: a pointer is a <strong>movable label</strong>; an array name is a <strong>fixed label glued</strong> to its block of memory.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
