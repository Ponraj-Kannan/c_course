<Slide2 topic="main() — Entry Point">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">main()</span> — The Entry Point</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono"><strong style="color:var(--red);">main()</strong></span> is where every C program <strong style="color:var(--green);">begins and ends</strong>. The OS calls it for you.
    </div>
  </div>

  <div v-click class="callout callout-danger">
    <div><strong>Why mandatory:</strong> Without <span class="mono">main()</span>, the linker has nowhere to start. The program won't run.</div>
  </div>

  <div v-click class="section-label">Standard Syntax</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>()<br>
    {<br>
    <span style="padding-left:20px;display:block;color:#6b7280;">// statements</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="card card-blue">
    <div class="small-text"><strong>return 0;</strong> tells the operating system the program completed without errors. Non-zero values signal a failure.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Execution Flow</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">OS starts the program</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">main() begins</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">Statements run in order</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-return" style="width:220px;">return 0;</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">OS reports success</div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>You can have <strong>only one</strong> <span class="mono">main()</span> per executable program.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
