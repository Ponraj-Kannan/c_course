---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 12 — COMMON MISTAKES
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common <span class="highlight">Mistakes</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-red">Mistake: = instead of ==</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> x = <span style="color:#b45309;">5</span>;<br>
    <span style="color:#ef5050;">if</span> (x <span style="color:#ef5050;font-weight:700;">=</span> <span style="color:#b45309;">10</span>) {  <span style="color:#6b7280;">// assigns, doesn't compare!</span><br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Runs every time"</span>);<br>
    }
  </div>
  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div><span class="mono">x = 10</span> assigns 10 to x and evaluates to 10 (true) — the block <strong>always</strong> runs. Use <span class="mono">==</span> for comparison.</div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:10px;margin-bottom:4px;">
    <span class="pill pill-orange">Mistake: Dangling Else</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.85;">
    <span style="color:#ef5050;">if</span> (a) <span style="color:#ef5050;">if</span> (b) <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"x"</span>);<br>
    <span style="color:#ef5050;">else</span> <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"y"</span>); <span style="color:#6b7280;">// binds to inner if!</span>
  </div>
  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>The <span class="mono">else</span> attaches to the <strong>nearest</strong> <span class="mono">if (b)</span>, not <span class="mono">if (a)</span> — use braces to avoid ambiguity.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">Mistake: Missing break</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.85;">
    <span style="color:#ef5050;">switch</span> (grade) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#2d7a00;">'A'</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Great"</span>);<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#2d7a00;">'B'</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Good"</span>); <span style="color:#6b7280;">// falls through!</span><br>
    }
  </div>
  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div>Missing <span class="mono">break</span> after case 'A' causes <strong>fall-through</strong> into case 'B' unintentionally.</div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:10px;margin-bottom:4px;">
    <span class="pill pill-green">Mistake: Empty Block After ;</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.85;">
    <span style="color:#ef5050;">if</span> (x &gt; <span style="color:#b45309;">0</span>)<span style="color:#ef5050;font-weight:700;">;</span> <span style="color:#6b7280;">// empty statement!</span><br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Always prints"</span>);
  </div>
  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>A stray semicolon right after the condition creates an <strong>empty if-block</strong> — the printf below runs unconditionally.</div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Best defense:</strong> Always use braces <span class="mono">{ }</span>, double-check <span class="mono">==</span> vs <span class="mono">=</span>, and add <span class="mono">break</span> to every switch case unless fall-through is intentional.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
