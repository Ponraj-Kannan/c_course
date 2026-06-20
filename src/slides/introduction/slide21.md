<Slide2 topic="Hello World — Execution Walkthrough">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Execution <span class="highlight">Walkthrough</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Step-by-Step</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:240px;">Source code: hello.c</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:240px;">gcc preprocesses + compiles</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:240px;">Executable file: hello</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-return" style="width:240px;">OS loads hello into memory</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:240px;">main() runs -> prints output</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">Common Mistakes</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Forgetting the semicolon <span class="mono">;</span></li>
      <li>Misspelling <span class="mono">printf</span> as <span class="mono">print</span></li>
      <li>Missing <span class="mono">#include &lt;stdio.h&gt;</span></li>
      <li>Mismatched braces <span class="mono">{ }</span></li>
    </ul>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Debugging Tip</div>
    <div class="body-text">Read the compiler error from the <strong>first line</strong>. Often the rest are caused by it.</div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><strong>Try this:</strong> Change the text inside <span class="mono">printf</span> and recompile to see your output change!</div>
  </div>
</div>

</div>

  </template>
</Slide2>
