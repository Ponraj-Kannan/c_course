---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — POINTER TYPES & TYPE SAFETY
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Pointer <span class="highlight">Types</span> &amp; Type Safety</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Every pointer has a <strong style="color:var(--red);">type</strong> matching the data it points to. The type tells C <strong style="color:var(--green);">how many bytes to read</strong> and <strong style="color:var(--green);">how to interpret</strong> them when dereferenced.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>ip;  &nbsp;<span style="color:#6b7280;">// points to an int (4 bytes)</span><br>
    <span style="color:#0e6ead;">char</span> <span style="color:#ef5050;">*</span>cp;  <span style="color:#6b7280;">// points to a char (1 byte)</span><br>
    <span style="color:#0e6ead;">double</span> <span style="color:#ef5050;">*</span>dp; <span style="color:#6b7280;">// points to a double (8 bytes)</span>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Type mismatch error:</strong> Assigning <span class="mono">int*</span> to a <span class="mono">float*</span> without a cast triggers a compiler warning — the data would be misread.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>The pointer variable itself is always the <strong>same size</strong> (e.g. 8 bytes on 64-bit systems) — only the <em>data it points to</em> differs in size.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Type Determines Byte Width</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Pointer Type</th><th>Points to Size</th><th>Pointer Size*</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">char *</td><td>1 byte</td><td>8 bytes</td></tr>
      <tr v-click><td class="mono">int *</td><td>4 bytes</td><td>8 bytes</td></tr>
      <tr v-click><td class="mono">float *</td><td>4 bytes</td><td>8 bytes</td></tr>
      <tr v-click><td class="mono">double *</td><td>8 bytes</td><td>8 bytes</td></tr>
    </tbody>
  </table>
  <div v-click class="small-text" style="margin-top:4px;">*Typical on a 64-bit system; sizes vary by platform.</div>

  <div v-click class="card card-orange" style="margin-top:8px;">
    <div class="small-text">Use <span class="mono">sizeof(int*)</span> to check the actual pointer size on your system — don't assume it's always 8 bytes!</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div>Type safety prevents bugs: it stops you from accidentally reading a <span class="mono">double</span>'s bytes as if they were an <span class="mono">int</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
