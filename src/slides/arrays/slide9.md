---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — PASSING ARRAYS TO FUNCTIONS: 1D
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pointers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Passing Arrays to Functions — <span class="highlight">1D</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      When passed to a function, an array <strong style="color:var(--red);">decays to a pointer</strong> — the function receives the <strong style="color:var(--green);">address</strong>, not a copy of the whole array.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> printArr(<span style="color:#0e6ead;">int</span> arr[], <span style="color:#0e6ead;">int</span> size) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">0</span>; i &lt; size; i++)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d "</span>, arr[i]);<br>
    }<br>
    <br>
    <span style="color:#0e6ead;">int</span> nums[] = {<span style="color:#b45309;">1</span>,<span style="color:#b45309;">2</span>,<span style="color:#b45309;">3</span>};<br>
    printArr(nums, <span style="color:#b45309;">3</span>);
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Size is always lost:</strong> <span class="mono">sizeof(arr)</span> inside the function gives the <strong>pointer's</strong> size, not the array's — you must pass the size as a separate parameter.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Three Equivalent Parameter Forms</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">void</span> f(<span style="color:#0e6ead;">int</span> arr[], <span style="color:#0e6ead;">int</span> n);<br>
    <span style="color:#0e6ead;">void</span> f(<span style="color:#0e6ead;">int</span> arr[<span style="color:#b45309;">10</span>], <span style="color:#0e6ead;">int</span> n);<br>
    <span style="color:#0e6ead;">void</span> f(<span style="color:#0e6ead;">int</span> <span style="color:#ef5050;">*</span>arr, <span style="color:#0e6ead;">int</span> n);
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>All three signatures are <strong>identical to the compiler</strong> — any size written inside <span class="mono">[ ]</span> in a parameter list is ignored.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:4px;">
    <div><strong>Efficiency win:</strong> Since only the address is passed, large arrays don't get copied — making array parameters fast regardless of size.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Side effect:</strong> Because the function gets the real address, changes made to <span class="mono">arr[i]</span> inside the function affect the <strong>original</strong> array.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
