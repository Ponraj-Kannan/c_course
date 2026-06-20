---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 14 — RECURSION: CONCEPT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Recursion</span> — A Function Calling Itself</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Recursion</strong> is when a function <strong style="color:var(--green);">calls itself</strong> to solve a smaller version of the same problem, until it reaches a <strong style="color:var(--blue);">base case</strong> that stops the recursion.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> Standing between two mirrors — you see a reflection of a reflection, getting smaller and smaller, until it fades (base case).</div>
  </div>

  <div v-click class="section-label" style="margin-top:4px;">Two Essential Parts</div>

  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-after>
      <div style="background:var(--green);color:#fff;border-radius:8px;padding:4px 12px;font-size:.68rem;font-weight:800;flex-shrink:0;white-space:nowrap;">BASE CASE</div>
      <div class="body-text">The condition that <strong>stops</strong> the recursion. Without it, you get infinite recursion and a <strong>stack overflow</strong> crash.</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--blue);color:#fff;border-radius:8px;padding:4px 12px;font-size:.68rem;font-weight:800;flex-shrink:0;white-space:nowrap;">RECURSIVE CASE</div>
      <div class="body-text">The function calls itself with a <strong>smaller/simpler</strong> input, moving closer to the base case each time.</div>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Warning:</strong> Every recursive function <strong>must</strong> have a base case, or the program will crash with a Stack Overflow error!</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Classic Example — Factorial</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2.1;">
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">factorial</span>(<span style="color:#b45309;">int</span> n) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6b7280;">// Base case</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">if</span> (n == <span style="color:#b45309;">0</span>) <span style="color:#ef5050;">return</span> <span style="color:#b45309;">1</span>;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6b7280;">// Recursive case</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> n * <span style="color:#0e6ead;">factorial</span>(n - <span style="color:#b45309;">1</span>);<br>
    }
  </div>

  <div v-click style="margin-top:4px;">
    <div class="section-label" style="margin-bottom:6px;">How factorial(3) Unfolds</div>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding-left:8px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-call">factorial(3)</div>
        <div style="font-size:.65rem;color:var(--muted);">→ 3 × factorial(2)</div>
      </div>
      <div style="margin-left:20px;display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-call">factorial(2)</div>
        <div style="font-size:.65rem;color:var(--muted);">→ 2 × factorial(1)</div>
      </div>
      <div style="margin-left:40px;display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-call">factorial(1)</div>
        <div style="font-size:.65rem;color:var(--muted);">→ 1 × factorial(0)</div>
      </div>
      <div style="margin-left:60px;display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-base">factorial(0)</div>
        <div style="font-size:.65rem;color:var(--green);font-weight:700;">→ returns 1 ✔ BASE</div>
      </div>
      <div style="margin-left:40px;display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-return">returns 1×1 = 1</div>
      </div>
      <div style="margin-left:20px;display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-return">returns 2×1 = 2</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="rec-node rec-node-return">returns 3×2 = 6</div>
        <div style="font-size:.65rem;color:var(--green);font-weight:700;">✔ Final answer</div>
      </div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
