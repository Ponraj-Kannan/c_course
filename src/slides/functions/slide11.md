---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 11 — PASS BY VALUE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Pass by Value</span> — How C Passes Arguments</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      In C, all function arguments are passed by <strong style="color:var(--red);">value</strong> — a <strong style="color:var(--green);">copy</strong> of the argument is made. The function works on the copy; the original variable in the caller is <strong>never changed</strong>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2.1;">
    <span style="color:#b45309;">void</span> <span style="color:#0e6ead;">doubleIt</span>(<span style="color:#b45309;">int</span> n) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;n = n * <span style="color:#b45309;">2</span>; <span style="color:#6b7280;">// modifies the copy</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Inside: %d\n"</span>, n);<br>
    }<br><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b45309;">int</span> x = <span style="color:#b45309;">10</span>;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0e6ead;">doubleIt</span>(x);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Outside: %d\n"</span>, x); <span style="color:#6b7280;">// still 10!</span><br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">
    Inside: 20<br>Outside: 10
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Memory Diagram — Pass by Value</div>

  <div v-after style="display:flex;gap:12px;align-items:flex-start;margin-top:4px;">

    <div style="flex:1;">
      <div style="font-size:.62rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;text-align:center;margin-bottom:6px;">main()'s memory</div>
      <div class="mem-box mem-global">
        <div class="mem-label">Global Stack Frame</div>
        <div style="display:flex;align-items:center;gap:8px;padding:4px 0;">
          <span style="color:var(--blue);font-weight:700;">x</span>
          <span style="color:var(--muted);">→</span>
          <span style="color:var(--green);font-weight:700;">10</span>
          <span style="font-size:.6rem;color:var(--muted);">(unchanged)</span>
        </div>
      </div>
    </div>

    <div style="font-size:1.2rem;color:var(--muted);padding-top:40px;">→</div>

    <div style="flex:1;">
      <div style="font-size:.62rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;text-align:center;margin-bottom:6px;">doubleIt()'s memory</div>
      <div class="mem-box mem-local">
        <div class="mem-label">Local Stack Frame</div>
        <div style="display:flex;align-items:center;gap:8px;padding:4px 0;">
          <span style="color:var(--blue);font-weight:700;">n</span>
          <span style="color:var(--muted);">→</span>
          <span style="color:var(--orange);font-weight:700;">20</span>
          <span style="font-size:.6rem;color:var(--muted);">(copy × 2)</span>
        </div>
      </div>
    </div>

  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Key takeaway:</strong> The function receives a <em>copy</em>. Changes inside the function do NOT affect the original variable in the caller.</div>
  </div>

  <div v-click class="card card-blue" style="margin-top:4px;">
    <div class="small-text"><strong>Want to modify the original?</strong> Use <strong>pointers</strong> (pass by reference) — that's a more advanced concept covered in the Pointers chapter.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
