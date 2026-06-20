---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — THE IF STATEMENT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">if</span> Statement</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.85rem;line-height:2.2;">
    <span class="syn-keyword">if</span> (<span class="syn-varname">condition</span>) {<br>
    &nbsp;&nbsp;<span class="syn-value">// statements</span><br>
    }
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">if</span>
      <span class="body-text">Keyword that starts the conditional block</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">condition</span>
      <span class="body-text">Any expression evaluating to true (non-zero) or false (zero)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">{ }</span>
      <span class="body-text">Block of code that runs only if condition is true</span>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Note:</strong> If the block has only <strong>one statement</strong>, the braces <span class="mono">{ }</span> are optional — but omitting them is a common source of bugs.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> marks = <span style="color:#b45309;">75</span>;<br>
    <span style="color:#ef5050;">if</span> (marks &gt;= <span style="color:#b45309;">40</span>) {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Passed"</span>);<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">Passed</div>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:6px;">Flow Diagram</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <div class="flow-node flow-start" style="width:140px;">Start</div>
      <div class="flow-arrow">↓</div>
      <div class="flow-node flow-cond" style="width:160px;">condition true?</div>
      <div style="display:flex;gap:30px;font-size:.65rem;color:var(--muted);width:200px;justify-content:space-between;">
        <span>Yes ↓</span><span>No ↓</span>
      </div>
      <div style="display:flex;gap:16px;">
        <div class="flow-node flow-body" style="width:90px;">Run block</div>
        <div class="flow-node flow-end" style="width:90px;">Skip block</div>
      </div>
      <div class="flow-arrow">↓</div>
      <div class="flow-node flow-end" style="width:140px;">Continue program</div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
