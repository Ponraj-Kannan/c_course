---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 15 — RECURSION: CALL STACK & TRACE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Recursion — <span class="highlight">Call Stack</span> &amp; Trace</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">What is the Call Stack?</div>

  <div v-after class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      Every function call pushes a <strong style="color:var(--red);">stack frame</strong> (local variables + return address) onto the <strong style="color:var(--blue);">call stack</strong>. When a function returns, its frame is <strong>popped</strong> off.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Call Stack for factorial(3)</div>

  <div v-after style="display:flex;flex-direction:column;gap:4px;margin-top:2px;">
    <div style="font-size:.62rem;color:var(--muted);text-align:center;margin-bottom:2px;">← grows downward (LIFO)</div>
    <div class="stack-frame top">factorial(0) — returns 1 &nbsp;<span style="font-size:.62rem;">(top / most recent)</span></div>
    <div class="stack-frame middle">factorial(1) — waiting for factorial(0)</div>
    <div class="stack-frame middle">factorial(2) — waiting for factorial(1)</div>
    <div class="stack-frame">factorial(3) — waiting for factorial(2)</div>
    <div class="stack-frame done">main() — waiting for factorial(3)</div>
    <div style="font-size:.62rem;color:var(--muted);text-align:center;margin-top:2px;">← bottom of stack</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>When <span class="mono">factorial(0)</span> returns <span class="mono">1</span>, frames are <strong>popped one by one</strong>, each passing its result up until <span class="mono">factorial(3)</span> returns <span class="mono">6</span> to <span class="mono">main()</span>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Execution Trace Table</div>

  <div v-after>
    <table class="trace-table">
      <thead>
        <tr><th>Call</th><th>n</th><th>Returns</th><th>Result</th></tr>
      </thead>
      <tbody>
        <tr><td>factorial(3)</td><td>3</td><td>3 × factorial(2)</td><td class="hl">6</td></tr>
        <tr><td>factorial(2)</td><td>2</td><td>2 × factorial(1)</td><td>2</td></tr>
        <tr><td>factorial(1)</td><td>1</td><td>1 × factorial(0)</td><td>1</td></tr>
        <tr><td>factorial(0)</td><td>0</td><td>1 (base case)</td><td class="hl">1</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Recursion vs Iteration</div>

  <div v-after>
    <table class="cmp-table">
      <thead>
        <tr><th>Aspect</th><th>Recursion</th><th>Iteration (Loop)</th></tr>
      </thead>
      <tbody>
        <tr><td>Code style</td><td>Elegant, shorter</td><td>More explicit</td></tr>
        <tr><td>Memory</td><td class="no">Uses call stack</td><td class="yes">Constant memory</td></tr>
        <tr><td>Speed</td><td class="no">Function call overhead</td><td class="yes">Generally faster</td></tr>
        <tr><td>Best for</td><td>Trees, divide-and-conquer</td><td>Simple repetition</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Stack Overflow:</strong> If recursion goes too deep (no base case or very large n), the call stack runs out of memory and the program crashes.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
