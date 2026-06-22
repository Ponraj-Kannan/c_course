<Slide2 topic="Token Breakdown — int age = 18 ;">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Token <span class="highlight">Breakdown</span> of a Real Statement</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">The Statement</div>

  <div v-after class="code-block" style="font-size:.95rem;">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">age</span> <span style="color:#dd6b20;">=</span> <span style="color:#2d7a00;">18</span><span style="color:#805ad5;">;</span>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Compiler sees 5 tokens</div>

  <div v-after style="display:flex;gap:6px;flex-wrap:wrap;padding:10px;background:#f7f8fc;border:1px solid var(--border);border-radius:10px;">
    <div class="tok kw"><div class="tok-text">int</div><div class="tok-tag">Keyword</div></div>
    <div class="tok id"><div class="tok-text">age</div><div class="tok-tag">Identifier</div></div>
    <div class="tok op"><div class="tok-text">=</div><div class="tok-tag">Operator</div></div>
    <div class="tok con"><div class="tok-text">18</div><div class="tok-tag">Constant</div></div>
    <div class="tok sym"><div class="tok-text">;</div><div class="tok-tag">Symbol</div></div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Another Example</div>

  <div v-after class="code-block">
    <span style="color:#ef5050;">printf</span>(<span style="color:#319795;">"Hi, %s"</span>, <span style="color:#0e6ead;">name</span>)<span style="color:#805ad5;">;</span>
  </div>

  <div v-click style="display:flex;gap:6px;flex-wrap:wrap;padding:10px;background:#f7f8fc;border:1px solid var(--border);border-radius:10px;">
    <div class="tok id"><div class="tok-text">printf</div><div class="tok-tag">Identifier</div></div>
    <div class="tok sym"><div class="tok-text">(</div><div class="tok-tag">Symbol</div></div>
    <div class="tok str"><div class="tok-text">"Hi, %s"</div><div class="tok-tag">String</div></div>
    <div class="tok sym"><div class="tok-text">,</div><div class="tok-tag">Symbol</div></div>
    <div class="tok id"><div class="tok-text">name</div><div class="tok-tag">Identifier</div></div>
    <div class="tok sym"><div class="tok-text">)</div><div class="tok-tag">Symbol</div></div>
    <div class="tok sym"><div class="tok-text">;</div><div class="tok-tag">Symbol</div></div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;margin-top:4px;">
    <div>Reading code as tokens is the first skill of a compiler engineer — and a great debugging habit.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
