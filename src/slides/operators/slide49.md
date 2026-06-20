---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 23 — RELATIONAL (COMPARISON) OPERATORS (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Relational <span class="highlight">Operators</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Relational operators</strong> compare two values and always return an <strong>integer</strong> result — either <span class="mono" style="color:var(--green);">1 (true)</span> or <span class="mono" style="color:var(--red-dark);">0 (false)</span>. C has no built-in Boolean type — it uses integers.
    </div>
  </div>

  <div>
    <table class="cmp-table" style="font-size:.72rem;margin-top:6px;">
      <thead v-click><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">==</td><td>Equal to</td><td class="mono">5 == 5</td><td class="yes">1 (true)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">!=</td><td>Not equal to</td><td class="mono">5 != 3</td><td class="yes">1 (true)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&gt;</td><td>Greater than</td><td class="mono">7 > 4</td><td class="yes">1 (true)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&lt;</td><td>Less than</td><td class="mono">3 < 9</td><td class="yes">1 (true)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&gt;=</td><td>Greater than or equal</td><td class="mono">5 >= 5</td><td class="yes">1 (true)</td></tr>
        <tr v-click><td class="mono" style="color:var(--red-dark);font-weight:700;">&lt;=</td><td>Less than or equal</td><td class="mono">4 <= 3</td><td class="no">0 (false)</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Common mistake:</strong> Don't confuse <span class="mono">==</span> (comparison) with <span class="mono">=</span> (assignment). Writing <span class="mono">if (x = 5)</span> assigns 5 to x — it doesn't compare!</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Code Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">10</span>, <span style="color:#0e6ead;">b</span> = <span style="color:#b45309;">7</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">a</span> == <span style="color:#0e6ead;">b</span>);  <span style="color:#6b7280;">// 0 (false)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">a</span> != <span style="color:#0e6ead;">b</span>);  <span style="color:#6b7280;">// 1 (true)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">a</span> > <span style="color:#0e6ead;">b</span>);   <span style="color:#6b7280;">// 1 (true)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">a</span> >= <span style="color:#b45309;">10</span>);  <span style="color:#6b7280;">// 1 (true)</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">b</span> < <span style="color:#b45309;">5</span>);   <span style="color:#6b7280;">// 0 (false)</span>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Used in Conditions</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#ef5050;">if</span> (<span style="color:#0e6ead;">age</span> >= <span style="color:#b45309;">18</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Adult\n"</span>);</span>
    } <span style="color:#ef5050;">else</span> {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Minor\n"</span>);</span>
    }<br>
    <span style="color:#6b7280;">// Adult</span>
  </div>

  <div v-click class="card card-blue" style="margin-top:6px; margin-bottom:40px">
    <div class="small-text"><strong>Real-world use:</strong> Login validation, grade checks, age verification, sorting, filtering data</div>
  </div>

</div>

</div>

  </template>
</Slide2>
