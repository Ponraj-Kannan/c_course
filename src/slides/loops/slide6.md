---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — DO-WHILE LOOP: SYNTAX + FLOWCHART
═══════════════════════════════════════════════════════ -->

<Slide2 topic="do-while Loop">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">do-while</span> Loop — Syntax &amp; Flow</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="section-label">Syntax Diagram</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px 18px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">counter</span> = <span style="color:#b45309;">1</span>;<br>
    <span style="color:#ef5050;">do</span> {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d\n"</span>, <span style="color:#0e6ead;">counter</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">counter</span><span style="color:#c49a00;">++</span>;</span>
    } <span style="color:#ef5050;">while</span> (<span style="color:#0e6ead;">counter</span> <span style="color:#c49a00;">&lt;=</span> <span style="color:#b45309;">5</span>);
  </div>

  <div v-click style="margin-top:8px;">
    <div class="section-label" style="margin-bottom:6px;">Key Difference from while</div>
    <div class="card card-blue">
      <div class="body-text">In a <strong>do-while</strong> loop, the body executes <strong style="color:var(--green);">at least once</strong> — the condition is checked <strong>after</strong> the body runs, not before.</div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div><strong>Use do-while when:</strong> You always need the code to run once — like showing a menu before asking if the user wants to continue.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Execution Flowchart</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div class="flow-node flow-start" style="width:140px;">START</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node" style="background:#ebf8ff;border:2px solid #3182ce;color:#2b6cb0;width:180px;font-size:.7rem;">Initialize: counter = 1</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:160px;font-size:.65rem;">Execute body:<br>printf(counter); counter++</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-cond" style="width:180px;">counter &lt;= 5 ?</div>
    <div style="display:flex;align-items:flex-start;gap:16px;width:260px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-left:10px;">
        <div style="font-size:.6rem;color:var(--green);font-weight:700;">TRUE</div>
        <div class="flow-arrow">&#x21B1;</div>
        <div style="font-size:.6rem;color:var(--muted);font-weight:700;text-align:center;">Back to<br>body</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding-top:8px;">
        <div style="font-size:.6rem;color:var(--red);font-weight:700;">FALSE</div>
        <div class="flow-arrow">&#x25BC;</div>
        <div class="flow-node flow-end" style="width:80px;">END</div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div>Notice: the body runs <strong>before</strong> the condition is checked — this is the unique feature of <span class="mono">do-while</span>!</div>
  </div>
</div>

</div>

  </template>
</Slide2>
