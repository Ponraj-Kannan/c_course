---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — STRLEN & STRCMP
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">strlen</span> &amp; <span class="highlight">strcmp</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">strlen — String Length</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">size_t</span> <span class="syn-keyword">strlen</span>(<span class="syn-keyword">const char</span>* <span class="syn-varname">str</span>);
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">char</span> name[] = <span style="color:#2d7a00;">"Alice"</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%lu</span>"</span>, <span style="color:#2d7a00;">strlen</span>(name)); <span style="color:#6b7280;">// 5</span>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>strlen ≠ sizeof:</strong> <span class="mono">strlen("Alice")</span> returns <strong>5</strong> (characters), but <span class="mono">sizeof(name)</span> returns <strong>6</strong> (includes <span class="mono">\0</span>).</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div>Never call <span class="mono">strlen</span> in a loop condition like <span class="mono">i &lt; strlen(s)</span> — it recomputes the length on every iteration. Store it in a variable first.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">strcmp — String Comparison</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">int</span> <span class="syn-keyword">strcmp</span>(<span class="syn-keyword">const char</span>* <span class="syn-varname">s1</span>, <span class="syn-keyword">const char</span>* <span class="syn-varname">s2</span>);
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#2d7a00;">strcmp</span>(<span style="color:#2d7a00;">"Apple"</span>, <span style="color:#2d7a00;">"Apple"</span>); <span style="color:#6b7280;">// 0</span><br>
    <span style="color:#2d7a00;">strcmp</span>(<span style="color:#2d7a00;">"Apple"</span>, <span style="color:#2d7a00;">"Banana"</span>);<span style="color:#6b7280;">// negative</span><br>
    <span style="color:#2d7a00;">strcmp</span>(<span style="color:#2d7a00;">"Banana"</span>, <span style="color:#2d7a00;">"Apple"</span>);<span style="color:#6b7280;">// positive</span>
  </div>

  <div style="margin-top:6px;">
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Return Value</th><th>Meaning</th></tr>
      </thead>
      <tbody>
        <tr v-click><td class="mono">0</td><td>Strings are equal</td></tr>
        <tr v-click><td>&lt; 0</td><td>s1 comes before s2 (alphabetically)</td></tr>
        <tr v-click><td>&gt; 0</td><td>s1 comes after s2 (alphabetically)</td></tr>
      </tbody>
    </table>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Never use == to compare strings:</strong> <span class="mono">s1 == s2</span> compares <strong>addresses</strong>, not contents — always use <span class="mono">strcmp()</span>.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
