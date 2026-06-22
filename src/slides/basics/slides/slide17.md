<Slide2 topic="void — No Value Type">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">void</span> — The Empty Type</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">void</strong> means <strong style="color:var(--green);">no value</strong>. It's used when a function does not return anything, or when a pointer can point to any type.
    </div>
  </div>

  <div v-click class="section-label">Use 1 — void Function</div>

  <div v-after class="code-block">
    <span style="color:#ef5050;">void</span> <span style="color:#0e6ead;">display</span>()<br>
    {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hello!"</span>);</span>
    }<br>
    <br>
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">display</span>();</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="output-box">Hello!</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Use 2 — Empty Argument List</div>

  <div v-after class="code-block">
    <span style="color:#ef5050;">int</span> <span style="color:#0e6ead;">main</span>(<span style="color:#ef5050;">void</span>)<br>
    {<br>
    <span style="padding-left:20px;display:block;color:#6b7280;">// takes no arguments</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">return</span> <span style="color:#b45309;">0</span>;</span>
    }
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Use 3 — void Pointer (preview)</div>

  <div v-after class="code-block">
    <span style="color:#ef5050;">void</span> *<span style="color:#0e6ead;">ptr</span>;  <span style="color:#6b7280;">// generic pointer</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">10</span>;<br>
    <span style="color:#0e6ead;">ptr</span> = &amp;<span style="color:#0e6ead;">x</span>;
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>You can't declare a <strong>variable</strong> of type <span class="mono">void</span> — it only works for return types and pointers.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
