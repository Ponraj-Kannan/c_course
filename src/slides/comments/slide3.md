---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — MULTI-LINE COMMENTS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Comments in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Multi-Line</span> Comments</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Syntax</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.85rem;line-height:2.2;">
    <span class="syn-operator">/*</span> <span style="color:#2d7a00;">comment text<br>can span<br>multiple lines</span> <span class="syn-operator">*/</span>
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">/*</span>
      <span class="body-text">Opens the comment block</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">text</span>
      <span class="body-text">Can span any number of lines</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">*/</span>
      <span class="body-text">Closes the comment block — required!</span>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:4px;">
    <div><strong>Beginner Trap:</strong> Forgetting the closing <span class="mono">*/</span> causes everything after it — including real code — to be swallowed as a comment, leading to confusing compile errors.</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>No nesting allowed:</strong> <span class="mono">/* outer /* inner */ */</span> is invalid in C — the first <span class="mono">*/</span> closes the whole comment.</div>
  </div>

</div>

<div class="flex-col">
  <div v-click class="section-label">Examples</div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:1.9;">
    <span style="color:#6b7280;">/* This program calculates<br>&nbsp;&nbsp;the area of a circle */</span><br>
    <span style="color:#0e6ead;">float</span> radius = <span style="color:#b45309;">5.0</span>;<br>
    <br>
    <span style="color:#6b7280;">/* TODO: validate that<br>&nbsp;&nbsp;radius is positive */</span><br>
    <span style="color:#0e6ead;">float</span> area = <span style="color:#b45309;">3.14</span> * radius * radius;
  </div>

  <div style="margin-top:6px;">
    <div v-click class="section-label" style="margin-bottom:6px;">Single-Line vs Multi-Line</div>
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Feature</th><th>// single</th><th>/* */ multi</th></tr>
      </thead>
      <tbody>
        <tr v-click><td>Spans lines</td><td class="no">✘ One only</td><td class="yes">✔ Many</td></tr>
        <tr v-click><td>Needs closing tag</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
        <tr v-click><td>Can nest</td><td class="no">✘ N/A</td><td class="no">✘ No</td></tr>
      </tbody>
    </table>
  </div>

</div>

</div>

  </template>
</Slide2>
