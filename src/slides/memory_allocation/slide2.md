---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — C MEMORY LAYOUT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Memory Allocation in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">C <span class="highlight">Memory Layout</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A running C program's memory is divided into <strong style="color:var(--red);">four segments</strong> — each serving a distinct purpose. Dynamic allocation lives in the <strong style="color:var(--green);">heap</strong>.
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:4px;margin-top:8px;">
    <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:8px 14px;display:flex;justify-content:space-between;align-items:center;" v-click>
      <div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--red-dark);font-size:.8rem;">Stack</div>
        <div class="small-text">Local variables, function call frames — grows downward</div>
      </div>
      <span class="pill pill-red" style="flex-shrink:0;">↓ grows</span>
    </div>
    <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:8px 14px;display:flex;justify-content:space-between;align-items:center;" v-click>
      <div>
        <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--green);font-size:.8rem;">Heap</div>
        <div class="small-text">Dynamic memory (malloc/calloc/realloc) — grows upward</div>
      </div>
      <span class="pill pill-green" style="flex-shrink:0;">↑ grows</span>
    </div>
    <div style="background:#f6f8fa;border:2px solid var(--muted);border-radius:8px;padding:8px 14px;" v-click>
      <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--muted);font-size:.8rem;">BSS Segment</div>
      <div class="small-text">Uninitialized global & static variables (zeroed at startup)</div>
    </div>
    <div style="background:#f6f8fa;border:2px solid var(--muted);border-radius:8px;padding:8px 14px;" v-click>
      <div style="font-family:'Fira Code',monospace;font-weight:800;color:var(--muted);font-size:.8rem;">Data Segment</div>
      <div class="small-text">Initialized global & static variables</div>
    </div>
    <div style="background:#ebf8ff;border:2px solid var(--blue);border-radius:8px;padding:8px 14px;" v-click>
      <div style="font-family:'Fira Code',monospace;font-weight:800;color:#2b6cb0;font-size:.8rem;">Text (Code) Segment</div>
      <div class="small-text">Compiled program instructions — read-only</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Where Each Variable Lives</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> global = <span style="color:#b45309;">10</span>; <span style="color:#6b7280;">// Data segment</span><br>
    <span style="color:#0e6ead;">int</span> uninit;      <span style="color:#6b7280;">// BSS segment</span><br>
    <br>
    <span style="color:#0e6ead;">int</span> main() {<br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> local = <span style="color:#b45309;">5</span>; <span style="color:#6b7280;">// Stack</span><br>
    &nbsp;&nbsp;<span style="color:#0e6ead;">int</span> *p = <span style="color:#2d7a00;">malloc</span>(<span style="color:#b45309;">4</span>); <span style="color:#6b7280;">// Heap</span><br>
    }
  </div>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Stack vs Heap lifetime:</strong> A local variable is destroyed when its function returns — but heap memory stays allocated until you explicitly call <span class="mono">free()</span>.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>Stack and heap grow toward each other — if they collide, the program crashes with a <strong>stack overflow</strong> or <strong>out-of-memory</strong> error.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
