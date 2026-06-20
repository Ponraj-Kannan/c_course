---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — VOID POINTERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Void</span> Pointers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">void pointer</strong> (<span class="mono">void *</span>) is a <strong style="color:var(--green);">generic pointer</strong> that can point to <em>any</em> data type — but it has no type of its own.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> x = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">void</span> <span style="color:#ef5050;">*</span>vp = <span style="color:#ef5050;">&amp;</span>x;  <span style="color:#6b7280;">// can hold any address</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#ef5050;">*</span>(<span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>)vp); <span style="color:#6b7280;">// must cast first</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Cannot dereference directly:</strong> Since the compiler doesn't know the type, <span class="mono">*vp</span> alone is invalid — you must <strong>cast</strong> it to the correct type first.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div>No pointer arithmetic is allowed on <span class="mono">void *</span> either, since C doesn't know the size of what it points to.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Why Use void *?</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-blue" style="width:32px;height:32px;font-size:.85rem;">🧰</div>
      <div class="body-text"><strong>Generic functions</strong> — e.g. <span class="mono">malloc()</span> returns <span class="mono">void *</span> so it can be assigned to any pointer type</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-green" style="width:32px;height:32px;font-size:.85rem;">📦</div>
      <div class="body-text"><strong>Generic containers</strong> — useful when writing data structures that hold any type</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div class="icon-circle ic-orange" style="width:32px;height:32px;font-size:.85rem;">🔁</div>
      <div class="body-text"><strong>Callback parameters</strong> — passing arbitrary data into function pointers like <span class="mono">qsort()</span></div>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Implicit Conversions</div>
  <table class="cmp-table">
    <thead v-click>
      <tr><th>Conversion</th><th>Needs Cast?</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">int* → void*</td><td class="yes">✔ No (implicit)</td></tr>
      <tr v-click><td class="mono">void* → int*</td><td class="no">✘ Yes (explicit)</td></tr>
    </tbody>
  </table>

</div>

</div>

  </template>
</Slide2>
