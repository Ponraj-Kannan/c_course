---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 29 — OPERATOR PRECEDENCE (C Language)
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Operators">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Operator <span class="highlight">Precedence</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Operator precedence</strong> determines the <strong>order in which operators are evaluated</strong> in an expression. Higher precedence operators are evaluated first — just like BODMAS/PEMDAS in mathematics!
    </div>
  </div>

  <div>
    <table class="cmp-table" style="font-size:.69rem;margin-top:6px;">
      <thead v-click><tr><th>Priority</th><th>Operators</th><th>Description</th></tr></thead>
      <tbody>
        <tr v-click><td class="mono yes" style="font-weight:700;">1 (High)</td><td class="mono">()  []  .  -></td><td>Grouping, subscript, member</td></tr>
        <tr v-click><td class="mono yes">2</td><td class="mono">++  --  !  ~  sizeof  &  *</td><td>Unary operators</td></tr>
        <tr v-click><td class="mono yes">3</td><td class="mono">*  /  %</td><td>Multiplicative</td></tr>
        <tr v-click><td class="mono yes">4</td><td class="mono">+  -</td><td>Additive</td></tr>
        <tr v-click><td class="mono yes">5</td><td class="mono">&lt;&lt;  >></td><td>Bitwise shift</td></tr>
        <tr v-click><td class="mono yes">6</td><td class="mono">&lt;  &lt;=  >  >=</td><td>Relational</td></tr>
        <tr v-click><td class="mono yes">7</td><td class="mono">==  !=</td><td>Equality</td></tr>
        <tr v-click><td class="mono yes">8</td><td class="mono">&  |  ^</td><td>Bitwise AND/OR/XOR</td></tr>
        <tr v-click><td class="mono yes">9</td><td class="mono">&&  ||</td><td>Logical AND, OR</td></tr>
        <tr v-click><td class="mono yes">10</td><td class="mono">?:</td><td>Conditional (ternary)</td></tr>
        <tr v-click><td class="mono no" style="font-weight:700;">11 (Low)</td><td class="mono">=  +=  -=  …</td><td>Assignment</td></tr>
      </tbody>
    </table>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Code Examples</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#6b7280;">// * has higher precedence than +</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">a</span> = <span style="color:#b45309;">2</span> + <span style="color:#b45309;">3</span> * <span style="color:#b45309;">4</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">a</span>);  <span style="color:#6b7280;">// 14, not 20</span><br>
    <br>
    <span style="color:#6b7280;">// Parentheses override precedence</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">b</span> = (<span style="color:#b45309;">2</span> + <span style="color:#b45309;">3</span>) * <span style="color:#b45309;">4</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">b</span>);  <span style="color:#6b7280;">// 20</span><br>
    <br>
    <span style="color:#6b7280;">// Mixed operators</span><br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">c</span> = <span style="color:#b45309;">10</span> > <span style="color:#b45309;">5</span> && <span style="color:#b45309;">3</span> != <span style="color:#b45309;">3</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d\n"</span>, <span style="color:#0e6ead;">c</span>);  <span style="color:#6b7280;">// 0 (false)</span><br>
    <span style="color:#6b7280;">// >, != evaluated first (rel.)</span><br>
    <span style="color:#6b7280;">// then && evaluated (logical)</span>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:6px;">
    <div><strong>Golden rule:</strong> When in doubt, use <span class="mono">( )</span> parentheses to make the order explicit. It also makes your code easier to read!</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><strong>Associativity:</strong> When operators share the same precedence, <strong>left-to-right</strong> associativity applies for most (e.g. <span class="mono">a - b - c</span> = <span class="mono">(a - b) - c</span>). Assignment is right-to-left: <span class="mono">a = b = 5</span> → <span class="mono">b=5</span> then <span class="mono">a=5</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
