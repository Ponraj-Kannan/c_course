---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — ELSE IF LADDER: SYNTAX
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">else if</span> Ladder — Syntax</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      The <strong style="color:var(--red);">else if ladder</strong> chains multiple conditions together, checking each one <strong style="color:var(--green);">in order</strong> until one is true.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Syntax</div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span class="syn-keyword">if</span> (<span class="syn-varname">cond1</span>) {<br>
    &nbsp;&nbsp;<span class="syn-value">// block 1</span><br>
    } <span class="syn-keyword">else if</span> (<span class="syn-varname">cond2</span>) {<br>
    &nbsp;&nbsp;<span class="syn-value">// block 2</span><br>
    } <span class="syn-keyword">else if</span> (<span class="syn-varname">cond3</span>) {<br>
    &nbsp;&nbsp;<span class="syn-value">// block 3</span><br>
    } <span class="syn-keyword">else</span> {<br>
    &nbsp;&nbsp;<span class="syn-value">// default block</span><br>
    }
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Order matters:</strong> Conditions are checked <strong>top to bottom</strong>. As soon as one is true, its block runs and the rest are <strong>skipped entirely</strong>.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Key Points</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔</div>
      <div class="body-text">Only <strong>one block</strong> ever executes, even if multiple conditions would be true</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔</div>
      <div class="body-text">The final <span class="mono">else</span> is <strong>optional</strong> — without it, nothing runs if all conditions are false</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <div style="background:var(--green);color:#fff;border-radius:6px;padding:3px 10px;font-size:.65rem;font-weight:800;flex-shrink:0;">✔</div>
      <div class="body-text">You can chain as <strong>many</strong> <span class="mono">else if</span> blocks as needed</div>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:8px;">
    <div><strong>Performance tip:</strong> Put the <strong>most likely</strong> condition first — since checks happen sequentially, this avoids unnecessary comparisons.</div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div>An <span class="mono">else if</span> ladder is really just nested <span class="mono">if-else</span> statements written in a flatter, more readable style.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
