---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — THE IF-ELSE STATEMENT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">if-else</span> Statement</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.1;">
    <span class="syn-keyword">if</span> (<span class="syn-varname">condition</span>) {<br>
    &nbsp;&nbsp;<span class="syn-value">// runs if true</span><br>
    } <span class="syn-keyword">else</span> {<br>
    &nbsp;&nbsp;<span class="syn-value">// runs if false</span><br>
    }
  </div>

  <div v-click class="card-navy" style="margin-top:6px;border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      Exactly <strong style="color:var(--red);">one</strong> of the two blocks always executes — never both, never neither.
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>The <span class="mono">else</span> block has <strong>no condition of its own</strong> — it's simply "everything not covered by the if."</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.9;">
    <span style="color:#0e6ead;">int</span> num = <span style="color:#b45309;">-5</span>;<br>
    <span style="color:#ef5050;">if</span> (num &gt;= <span style="color:#b45309;">0</span>) {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Positive"</span>);<br>
    } <span style="color:#ef5050;">else</span> {<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Negative"</span>);<br>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">Negative</div>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:6px;">Flow Diagram</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <div class="flow-node flow-cond" style="width:160px;">num &gt;= 0?</div>
      <div style="display:flex;gap:40px;font-size:.65rem;color:var(--muted);width:220px;justify-content:center;">
        <span>True ↓</span><span>False ↓</span>
      </div>
      <div style="display:flex;gap:16px;">
        <div class="flow-node flow-body" style="width:100px;">Print "Positive"</div>
        <div class="flow-node" style="width:100px;background:#f0fff4;color:var(--green);border-color:var(--green);">Print "Negative"</div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div>Use <span class="mono">if-else</span> whenever there are exactly <strong>two mutually exclusive</strong> outcomes.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
