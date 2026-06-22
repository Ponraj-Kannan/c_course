<Slide2 topic="scanf() — Input Function">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">scanf()</span> — Reading Input</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block" style="font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">scanf</span>(<span style="color:#2d7a00;">"format"</span>, &amp;<span style="color:#0e6ead;">variable</span>);
  </div>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div><strong>Important:</strong> Use the <span class="mono">&amp;</span> (address-of) operator before the variable. It tells <span class="mono">scanf</span> WHERE to store the input.</div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Reading Different Types</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">cgpa</span>;<br>
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">grade</span>;<br>
    <br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%d"</span>, &amp;<span style="color:#0e6ead;">age</span>);<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"%f"</span>, &amp;<span style="color:#0e6ead;">cgpa</span>);<br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">" %c"</span>, &amp;<span style="color:#0e6ead;">grade</span>);
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Input Flow</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:240px;">scanf("%d", &amp;age)</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:240px;">Program waits for keystrokes</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-cond" style="width:240px;">User types 25 + Enter</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:240px;">Convert to int</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:240px;">Store 25 at address of age</div>
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div><strong>Forgetting &amp;</strong> is the #1 scanf bug. The program may crash silently.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
