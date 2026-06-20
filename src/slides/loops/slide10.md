---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — FOR LOOP: STEP VARIATIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="For Loop">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">for</span> Loop — Step Variations</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Different Step Values</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#6b7280;">/* Step = 1 (default) */</span><br>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">1</span>; <span style="color:#0e6ead;">i</span> &lt;= <span style="color:#b45309;">5</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d "</span>, <span style="color:#0e6ead;">i</span>);</span>
    <span style="color:#6b7280;">/* 1 2 3 4 5 */</span><br><br>
    <span style="color:#6b7280;">/* Step = 2 (skip every other) */</span><br>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt;= <span style="color:#b45309;">10</span>; <span style="color:#0e6ead;">i</span> += <span style="color:#b45309;">2</span>)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d "</span>, <span style="color:#0e6ead;">i</span>);</span>
    <span style="color:#6b7280;">/* 0 2 4 6 8 10 */</span><br><br>
    <span style="color:#6b7280;">/* Countdown (negative step) */</span><br>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">5</span>; <span style="color:#0e6ead;">i</span> &gt;= <span style="color:#b45309;">1</span>; <span style="color:#0e6ead;">i</span>--)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d "</span>, <span style="color:#0e6ead;">i</span>);</span>
    <span style="color:#6b7280;">/* 5 4 3 2 1 */</span>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>Step can be <strong>positive</strong> (count up), <strong>negative</strong> (count down), or any increment like <code>+=5</code>, <code>*=2</code>, etc.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Step=2 Visualization: 0 to 10 by 2</div>

  <div v-after style="background:#f7f8fc;border-radius:8px;padding:8px 12px;border:1px solid var(--border);display:flex;gap:4px;flex-wrap:wrap;align-items:center;">
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:6px;padding:4px 8px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--red-dark);">0</div>
    <div style="color:var(--muted);font-size:.7rem;font-weight:700;">+2</div>
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:6px;padding:4px 8px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--red-dark);">2</div>
    <div style="color:var(--muted);font-size:.7rem;font-weight:700;">+2</div>
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:6px;padding:4px 8px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--red-dark);">4</div>
    <div style="color:var(--muted);font-size:.7rem;font-weight:700;">+2</div>
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:6px;padding:4px 8px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--red-dark);">6</div>
    <div style="color:var(--muted);font-size:.7rem;font-weight:700;">+2</div>
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:6px;padding:4px 8px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--red-dark);">8</div>
    <div style="color:var(--muted);font-size:.7rem;font-weight:700;">+2</div>
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:6px;padding:4px 8px;font-family:'Fira Code',monospace;font-size:.8rem;font-weight:700;color:var(--red-dark);">10</div>
    <div style="color:var(--muted);font-size:.7rem;font-weight:700;">+2</div>
    <div style="background:#e2e8f0;border-radius:8px;padding:6px 12px;font-size:.7rem;font-weight:700;color:var(--muted)">12 &gt; 10 = stop</div>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">for Loop Execution Flowchart</div>
  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div class="flow-node flow-start" style="width:120px;">START</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node" style="background:#ebf8ff;border:2px solid #3182ce;color:#2b6cb0;width:160px;font-size:.68rem;">init: int i = 0</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-cond" style="width:160px;font-size:.68rem;">i &lt;= 10 ?</div>
    <div style="display:flex;gap:20px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
        <div style="font-size:.6rem;color:var(--green);font-weight:700;">TRUE</div>
        <div class="flow-arrow">&#x25BC;</div>
        <div class="flow-node flow-body" style="width:100px;font-size:.65rem;">printf(i)</div>
        <div class="flow-arrow">&#x25BC;</div>
        <div class="flow-node" style="background:#ebf8ff;border:1px solid var(--blue);color:var(--blue);width:100px;font-size:.65rem;">i += 2</div>
        <div class="flow-arrow">&#x21B1;</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;padding-top:18px;">
        <div style="font-size:.6rem;color:var(--red);font-weight:700;">FALSE</div>
        <div class="flow-arrow">&#x25BC;</div>
        <div class="flow-node flow-end" style="width:70px;">END</div>
      </div>
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
