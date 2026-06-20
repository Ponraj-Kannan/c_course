---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — ARRAYS AND POINTERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Arrays</span> and <span class="highlight">Pointers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An array name <strong style="color:var(--red);">decays into a pointer</strong> to its first element in most expressions — <span class="mono">arr</span> behaves like <span class="mono">&amp;arr[0]</span>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> arr[] = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>p = arr; <span style="color:#6b7280;">// same as &amp;arr[0]</span>
  </div>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:6px;">Equivalent Notations</div>
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Array Notation</th><th>Pointer Notation</th></tr>
      </thead>
      <tbody>
        <tr v-click><td class="mono">arr[i]</td><td class="mono">*(p + i)</td></tr>
        <tr v-click><td class="mono">&amp;arr[i]</td><td class="mono">p + i</td></tr>
        <tr v-click><td class="mono">arr[0]</td><td class="mono">*p</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Key Difference: arr vs p</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th class="mono">arr</th><th class="mono">p</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Can be reassigned</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
      <tr v-click><td>sizeof gives</td><td>whole array size</td><td>pointer size</td></tr>
      <tr v-click><td>Supports arr++</td><td class="no">✘ Compile error</td><td class="yes">✔ Valid</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><span class="mono">arr</span> is a <strong>constant address</strong>, not a variable pointer — you cannot do <span class="mono">arr = arr + 1</span> or <span class="mono">arr++</span>.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>This array-pointer relationship is exactly why pointer arithmetic (covered in the Pointers deck) works seamlessly with array indexing.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
