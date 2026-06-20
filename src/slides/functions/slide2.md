---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — WHAT IS A FUNCTION?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is a <span class="highlight">Function?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">function</strong> is a <strong style="color:var(--green);">named, reusable block of code</strong> that performs a specific task. You define it once and can call it as many times as needed.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A function is like a <strong>vending machine</strong> — you put in input (coins + selection), it performs its task internally, and gives you an output (snack). You don't need to know how it works inside!</div>
  </div>

  <div v-click class="section-label" style="margin-top:4px;">Why Use Functions?</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:center;gap:10px;" v-after>
      <div class="icon-circle ic-green">♻️</div>
      <div class="body-text"><strong>Reusability</strong> — Write once, use many times anywhere in the program.</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;" v-click>
      <div class="icon-circle ic-blue">🧩</div>
      <div class="body-text"><strong>Modularity</strong> — Break a big problem into smaller, manageable pieces.</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;" v-click>
      <div class="icon-circle ic-orange">🐛</div>
      <div class="body-text"><strong>Easier Debugging</strong> — Isolate and fix problems in one place.</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;" v-click>
      <div class="icon-circle ic-red">📖</div>
      <div class="body-text"><strong>Readability</strong> — Named functions make code self-documenting.</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Without vs With Functions</div>

  <div v-after style="display:flex;flex-direction:column;gap:8px;">
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:10px;padding:12px 14px;">
      <div style="font-size:.65rem;font-weight:700;color:var(--red-dark);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">❌ Without Functions (repetitive)</div>
      <div style="font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;color:var(--slate);">
        <span style="color:#6b7280;">/* Add two numbers — first time */</span><br>
        <span style="color:#b45309;">int</span> s1 = <span style="color:#b45309;">5</span> + <span style="color:#b45309;">3</span>;<br>
        <span style="color:#6b7280;">/* Add two numbers — again */</span><br>
        <span style="color:#b45309;">int</span> s2 = <span style="color:#b45309;">10</span> + <span style="color:#b45309;">7</span>;<br>
        <span style="color:#6b7280;">/* ... repeated everywhere */</span>
      </div>
    </div>

    <div style="background:#f0fff4;border:1px solid var(--green);border-radius:10px;padding:12px 14px;">
      <div style="font-size:.65rem;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">✔ With Functions (clean &amp; reusable)</div>
      <div style="font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;color:var(--slate);">
        <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span> a, <span style="color:#b45309;">int</span> b) { <span style="color:#ef5050;">return</span> a+b; }<br>
        <span style="color:#6b7280;">/* Call it anywhere! */</span><br>
        <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">5</span>, <span style="color:#b45309;">3</span>);<br>
        <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">10</span>, <span style="color:#b45309;">7</span>);
      </div>
    </div>
  </div>

  <div v-click class="card card-blue" style="margin-top:4px;">
    <div class="small-text"><strong>Key idea:</strong> Every C program has at least one function — <span class="mono">main()</span>. It's where execution always begins.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
