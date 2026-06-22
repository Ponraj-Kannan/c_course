---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — TYPE CONVERSION
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Type Conversion</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">Implicit Conversion (Automatic)</span>
  </div>

  <div v-after class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      C automatically converts a <strong style="color:var(--green);">smaller type to a larger type</strong> when mixing types in an expression — called <strong style="color:var(--red);">type promotion</strong>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">int</span>   i = <span style="color:#b45309;">5</span>;<br>
    <span style="color:#0e6ead;">float</span> f = <span style="color:#b45309;">2.5</span>;<br>
    <span style="color:#0e6ead;">float</span> r = i + f; <span style="color:#6b7280;">// i promoted to float → 7.5</span>
  </div>

  <div v-click style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:8px;">
    <div class="step-box active">char</div>
    <div class="step-arrow">→</div>
    <div class="step-box active">int</div>
    <div class="step-arrow">→</div>
    <div class="step-box active">long</div>
    <div class="step-arrow">→</div>
    <div class="step-box active">float</div>
    <div class="step-arrow">→</div>
    <div class="step-box" style="border-color:var(--green);background:#f0fff4;color:var(--green);">double</div>
  </div>
  <div class="small-text" style="margin-top:4px;">Widening order — smaller types auto-promote to larger ones</div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Narrowing risk:</strong> Assigning a <span class="mono">float</span> to an <span class="mono">int</span> implicitly <strong>truncates</strong> the decimal — <span class="mono">int x = 3.9</span> stores <span class="mono">3</span>, not <span class="mono">4</span>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">Explicit Conversion (Casting)</span>
  </div>

  <div v-after class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      You can <strong style="color:var(--green);">manually convert</strong> between types using a cast — place the target type in parentheses before the value.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">int</span> a = <span style="color:#b45309;">7</span>, b = <span style="color:#b45309;">2</span>;<br>
    <span style="color:#6b7280;">// Without cast — integer division</span><br>
    <span style="color:#0e6ead;">float</span> r1 = a / b;             <span style="color:#6b7280;">// 3.0</span><br>
    <span style="color:#6b7280;">// With cast — float division</span><br>
    <span style="color:#0e6ead;">float</span> r2 = (<span style="color:#0e6ead;">float</span>)a / b;      <span style="color:#6b7280;">// 3.5</span>
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.8;font-family:'Fira Code',monospace;">
    r1 = 3.000000<br>
    r2 = 3.500000
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Casting doesn't change the variable</strong> — it only converts the value for that one expression. The original variable keeps its type and value unchanged.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
