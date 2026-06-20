---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — NESTED IF-ELSE: EXAMPLE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Nested if-else</span> — Example</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Eligibility Check Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.85;">
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">int</span> hasID = <span style="color:#b45309;">1</span>;<br>
    <br>
    <span style="color:#ef5050;">if</span> (age &gt;= <span style="color:#b45309;">18</span>) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">if</span> (hasID) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Entry allowed"</span>);<br>
    &nbsp;&nbsp;} <span style="color:#ef5050;">else</span> {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Bring your ID"</span>);<br>
    &nbsp;&nbsp;}<br>
    } <span style="color:#ef5050;">else</span> {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Too young"</span>);<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">Entry allowed</div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>The inner <span class="mono">if (hasID)</span> is only ever reached <strong>after</strong> the outer condition <span class="mono">age &gt;= 18</span> is confirmed true.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Flow Diagram</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:3px;">
    <div class="flow-node flow-cond" style="width:170px;">age &gt;= 18?</div>
    <div style="display:flex;gap:50px;font-size:.65rem;color:var(--muted);">
      <span>Yes ↓</span><span>No ↓</span>
    </div>
    <div style="display:flex;gap:14px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
        <div class="flow-node flow-cond" style="width:120px;">hasID?</div>
        <div style="display:flex;gap:18px;font-size:.62rem;color:var(--muted);">
          <span>Yes↓</span><span>No↓</span>
        </div>
        <div style="display:flex;gap:8px;">
          <div class="flow-node flow-body" style="width:80px;font-size:.62rem;">"Entry allowed"</div>
          <div class="flow-node" style="width:80px;font-size:.62rem;background:#fffaf0;color:var(--orange);border-color:var(--orange);">"Bring ID"</div>
        </div>
      </div>
      <div class="flow-node flow-end" style="width:100px;font-size:.65rem;">"Too young"</div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:10px;">
    <div>Notice how the diagram naturally <strong>branches into a sub-tree</strong> — this is the visual signature of nested conditionals.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>Readability tip:</strong> Indent each nested level consistently so the structure is clear at a glance, even without running the code.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
