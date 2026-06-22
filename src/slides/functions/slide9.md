---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — RETURN VALUES & THE return KEYWORD
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Return Values</span> &amp; the <span class="highlight">return</span> Keyword</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      The <strong style="color:var(--red);">return</strong> statement does two things: it <strong style="color:var(--green);">sends a value back</strong> to the caller and <strong style="color:var(--blue);">stops execution</strong> of the function immediately.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:4px;">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.8rem;line-height:2.2;">
    <span style="color:#ef5050;">return</span> <span style="color:#b45309;">expression</span>;
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2.1;margin-top:2px;">
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">square</span>(<span style="color:#b45309;">int</span> n) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> n * n; <span style="color:#6b7280;">// sends n² back</span><br>
    }<br><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b45309;">int</span> val = <span style="color:#0e6ead;">square</span>(<span style="color:#b45309;">5</span>); <span style="color:#6b7280;">// val = 25</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, val);<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">25</div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Important Rules</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--red);color:#fff;border-radius:6px;padding:3px 8px;font-size:.62rem;font-weight:800;flex-shrink:0;">R1</div>
      <div class="body-text">The return type in the function signature <strong>must match</strong> the type of the returned value.</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:6px;padding:3px 8px;font-size:.62rem;font-weight:800;flex-shrink:0;">R2</div>
      <div class="body-text">A <span class="mono" style="color:var(--red-dark);">void</span> function must <strong>not</strong> return a value — use plain <span class="mono">return;</span> if you need early exit.</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 8px;font-size:.62rem;font-weight:800;flex-shrink:0;">R3</div>
      <div class="body-text">Execution stops at <span class="mono" style="color:var(--red-dark);">return</span> — any code after it in the same function is <strong>unreachable</strong>.</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--orange);color:#fff;border-radius:6px;padding:3px 8px;font-size:.62rem;font-weight:800;flex-shrink:0;">R4</div>
      <div class="body-text">A function can have <strong>multiple return statements</strong> (e.g. in if-else branches).</div>
    </div>
  </div>
  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#6b7280;">/* Multiple return example */</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">absVal</span>(<span style="color:#b45309;">int</span> n) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">if</span> (n &gt;= <span style="color:#b45309;">0</span>) <span style="color:#ef5050;">return</span> n;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">else</span> <span style="color:#ef5050;">return</span> -n;<br>
    }
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div>Forgetting <span class="mono">return</span> in a non-void function causes <strong>undefined behaviour</strong> — the compiler may warn but won't always stop you!</div>
  </div>

</div>

</div>

  </template>
</Slide2>
