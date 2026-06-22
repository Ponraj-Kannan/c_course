<Slide2 topic="Variables — Memory Representation">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Memory <span class="highlight">Representation</span> of Variables</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">The Code</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">18</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">salary</span> = <span style="color:#b45309;">25000.5</span>;<br>
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">grade</span> = <span style="color:#2d7a00;">'A'</span>;
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Assignment Flow</div>

  <div v-after style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px 0;">
    <div class="flow-node flow-start" style="width:220px;">Declare: int age</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-call" style="width:220px;">Allocate 4 bytes</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-body" style="width:220px;">Store: 18</div>
    <div class="flow-arrow">&#x25BC;</div>
    <div class="flow-node flow-end" style="width:220px;">age now holds 18</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Memory View</div>

  <div v-after style="display:flex;flex-direction:column;gap:8px;background:#f7f8fc;padding:14px;border-radius:10px;border:1px solid var(--border);">
    <div style="display:flex;gap:10px;align-items:center;">
      <div class="mem-cell m-int" style="min-width:90px;">
        <div class="mem-name">age</div>
        <div>18</div>
      </div>
      <div class="small-text mono">4 bytes · int</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;">
      <div class="mem-cell m-float" style="min-width:90px;">
        <div class="mem-name">salary</div>
        <div>25000.5</div>
      </div>
      <div class="small-text mono">4 bytes · float</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;">
      <div class="mem-cell m-char" style="min-width:90px;">
        <div class="mem-name">grade</div>
        <div>'A'</div>
      </div>
      <div class="small-text mono">1 byte · char</div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Each variable's type tells the compiler <strong>how many bytes</strong> to set aside and <strong>how to interpret</strong> those bytes.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
