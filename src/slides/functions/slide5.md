---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — FUNCTION DECLARATION vs DEFINITION
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Function <span class="highlight">Declaration</span> vs <span class="highlight">Definition</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-navy">Declaration (Prototype)</span>
  </div>

  <div v-after class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--navy-mid);">declaration</strong> tells the compiler the function's <strong>name, return type, and parameters</strong> — without the body. It's placed <em>before</em> <span class="mono">main()</span>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.75rem;line-height:2.1;">
    <span style="color:#6b7280;">/* Prototype — ends with semicolon */</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span> a, <span style="color:#b45309;">int</span> b)<span style="color:#ef5050;">;</span>
  </div>

  <div v-click class="callout callout-warn">
    <div>The prototype lets you <strong>call a function before defining it</strong> in the file — the compiler trusts your promise!</div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:4px;">
    <span class="pill pill-red">Definition</span>
  </div>

  <div v-after class="card-red" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red-dark);">definition</strong> is the actual full implementation with the body — this is where the code runs.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.75rem;line-height:2.1;">
    <span style="color:#6b7280;">/* Definition — has a body */</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span> a, <span style="color:#b45309;">int</span> b) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> a + b;<br>
    }
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Complete Program Structure</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:2;">
    <span style="color:#6b7280;">// 1. Include headers</span><br>
    <span style="color:#ef5050;">#include</span> <span style="color:#2d7a00;">&lt;stdio.h&gt;</span><br><br>
    <span style="color:#6b7280;">// 2. Prototype (declaration)</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span>, <span style="color:#b45309;">int</span>);<br><br>
    <span style="color:#6b7280;">// 3. main() uses the function</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b45309;">int</span> s = <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, s);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;<br>
    }<br><br>
    <span style="color:#6b7280;">// 4. Definition (below main)</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span> a, <span style="color:#b45309;">int</span> b) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> a + b;<br>
    }
  </div>

  <div v-click>
    <table class="cmp-table">
      <thead>
        <tr><th>Aspect</th><th>Declaration</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td>Has body?</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
        <tr><td>Ends with?</td><td class="mono">;</td><td class="mono">{ }</td></tr>
        <tr><td>Purpose</td><td>Inform compiler</td><td>Actual code</td></tr>
      </tbody>
    </table>
  </div>

</div>

</div>

  </template>
</Slide2>
