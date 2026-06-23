---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — DANGLING POINTERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Dangling Pointers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">dangling pointer</strong> is one that still holds the address of memory that has been <strong style="color:var(--green);">freed or gone out of scope</strong> — using it is undefined behaviour.
    </div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:6px;margin-bottom:4px;">
    <span class="pill pill-red">Use-After-Free</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> *p = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(<span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    *p = <span style="color:#b45309;">42</span>;<br>
    <span style="color:#2d7a00;">free</span>(p);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%d</span>"</span>, *p); <span style="color:#6b7280;">// ⚠ undefined behaviour!</span>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:6px;margin-bottom:4px;">
    <span class="pill pill-orange">Double-Free</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> *p = (<span style="color:#0e6ead;">int</span>*) <span style="color:#2d7a00;">malloc</span>(<span style="color:#0e6ead;">sizeof</span>(<span style="color:#0e6ead;">int</span>));<br>
    <span style="color:#2d7a00;">free</span>(p);<br>
    <span style="color:#2d7a00;">free</span>(p); <span style="color:#6b7280;">// ⚠ heap corruption!</span>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Prevention — The NULL Pattern</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#2d7a00;">free</span>(p);<br>
    p = <span style="color:#ef5050;">NULL</span>;  <span style="color:#6b7280;">// nullify immediately after free</span><br>
    <br>
    <span style="color:#6b7280;">// Safe to call free again — no-op on NULL</span><br>
    <span style="color:#2d7a00;">free</span>(p); <span style="color:#6b7280;">// safe — free(NULL) does nothing</span><br>
    <br>
    <span style="color:#6b7280;">// Safe to check before use</span><br>
    <span style="color:#ef5050;">if</span> (p != <span style="color:#ef5050;">NULL</span>) *p = <span style="color:#b45309;">10</span>; <span style="color:#6b7280;">// never reached</span>
  </div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>The golden rule:</strong> Every pointer should always be in one of three states — <strong>NULL</strong>, pointing to a <strong>valid object</strong>, or <strong>about to be set</strong> to one of those two.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div>Dangling pointer bugs are especially dangerous because they may appear to work on one run and crash on another — the freed memory might be reallocated to something else before you access it.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
