<Slide2 topic="Variables — Introduction &amp; Declaration">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Variables</span> — Named Memory Boxes</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">variable</strong> is a <strong style="color:var(--green);">name</strong> attached to a memory location that holds a value of a certain type.
    </div>
  </div>

  <div v-click class="section-label">Declaration</div>

  <div v-after class="code-block">
    <span style="color:#6b7280;">// type variable_name;</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">salary</span>;<br>
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">grade</span>;
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Initialization</div>

  <div v-after class="code-block">
    <span style="color:#6b7280;">// declare + assign at once</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">age</span> = <span style="color:#b45309;">18</span>;<br>
    <span style="color:#0e6ead;">float</span> <span style="color:#0e6ead;">salary</span> = <span style="color:#b45309;">25000.50</span>;<br>
    <span style="color:#0e6ead;">char</span> <span style="color:#0e6ead;">grade</span> = <span style="color:#2d7a00;">'A'</span>;
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Multiple Declaration</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">a</span>, <span style="color:#0e6ead;">b</span>, <span style="color:#0e6ead;">c</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">1</span>, <span style="color:#0e6ead;">y</span> = <span style="color:#b45309;">2</span>, <span style="color:#0e6ead;">z</span> = <span style="color:#b45309;">3</span>;
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Assignment &amp; Update</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">20</span>;        <span style="color:#6b7280;">// overwrite</span><br>
    <span style="color:#0e6ead;">x</span> = <span style="color:#0e6ead;">x</span> + <span style="color:#b45309;">5</span>;    <span style="color:#6b7280;">// update</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, <span style="color:#0e6ead;">x</span>);  <span style="color:#6b7280;">// prints 25</span>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>A variable can be re-assigned any number of times — only its <strong>type</strong> stays fixed.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
