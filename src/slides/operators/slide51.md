---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 24 — LOGICAL OPERATORS (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Logical <span class="highlight">Operators</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Logical operators</strong> combine or invert conditions. They return <span class="mono" style="color:var(--green);">1 (true)</span> or <span class="mono" style="color:var(--red-dark);">0 (false)</span> and are used with relational expressions in <strong>decision-making</strong>.
    </div>
  </div>

  <div>
    <table class="cmp-table" style="font-size:.72rem;margin-top:6px;">
      <thead v-click><tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&&</td><td>Logical AND</td><td class="mono">1 && 0</td><td class="no">0 (false)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">||</td><td>Logical OR</td><td class="mono">1 || 0</td><td class="yes">1 (true)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">!</td><td>Logical NOT</td><td class="mono">!1</td><td class="no">0 (false)</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Truth Table</div>
  <div v-after>
    <table class="cmp-table" style="font-size:.7rem;margin-top:4px;">
      <thead><tr><th>A</th><th>B</th><th>A && B</th><th>A || B</th><th>!A</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono yes">1</td><td class="mono yes">1</td><td class="mono yes">1</td><td class="mono yes">1</td><td class="mono no">0</td></tr>
        <tr v-click><td class="mono yes">1</td><td class="mono no">0</td><td class="mono no">0</td><td class="mono yes">1</td><td class="mono no">0</td></tr>
        <tr v-click><td class="mono no">0</td><td class="mono yes">1</td><td class="mono no">0</td><td class="mono yes">1</td><td class="mono yes">1</td></tr>
        <tr v-click><td class="mono no">0</td><td class="mono no">0</td><td class="mono no">0</td><td class="mono no">0</td><td class="mono yes">1</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Code Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">hasID</span> = <span style="color:#b45309;">1</span>;<br>
    <br>
    <span style="color:#6b7280;">// AND: both must be true</span><br>
    <span style="color:#ef5050;">if</span> (<span style="color:#0e6ead;">age</span> >= <span style="color:#b45309;">18</span> && <span style="color:#0e6ead;">hasID</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Entry allowed\n"</span>);</span>
    }<br>
    <br>
    <span style="color:#6b7280;">// OR: at least one must be true</span><br>
    <span style="color:#ef5050;">if</span> (<span style="color:#0e6ead;">age</span> < <span style="color:#b45309;">13</span> || <span style="color:#0e6ead;">age</span> > <span style="color:#b45309;">60</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Discount!\n"</span>);</span>
    }<br>
    <br>
    <span style="color:#6b7280;">// NOT: inverts the condition</span><br>
    <span style="color:#ef5050;">if</span> (!<span style="color:#0e6ead;">hasID</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"No ID, no entry\n"</span>);</span>
    }
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Short-circuit evaluation:</strong> In <span class="mono">&&</span>, if the first operand is <span class="mono">0</span>, C skips the second. In <span class="mono">||</span>, if the first is <span class="mono">1</span>, the second is skipped. This improves performance and prevents errors.</div>
  </div>

  <div v-click class="card card-green" style="margin-top:6px;">
    <div class="small-text"><strong>Real-world use:</strong> Login checks, range validation (<span class="mono">x > 0 && x < 100</span>), access control, complex conditions in loops</div>
  </div>

</div>

</div>

  </template>
</Slide2>
