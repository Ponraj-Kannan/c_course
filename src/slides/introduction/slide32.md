<Slide2 topic="Common Mistakes &amp; Debug Tips">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common <span class="highlight">Mistakes</span> &amp; Debug Tips</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">Missing semicolon</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Hi"</span>)<br>
      <span style="color:#c0392b;font-weight:700;">// error: expected ';'</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Add <span class="mono">;</span> at the end of every statement.</div>
  </div>

  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">Missing header file</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#6b7280;">// no #include &lt;stdio.h&gt;</span><br>
      <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Hi"</span>);<br>
      <span style="color:#c0392b;font-weight:700;">// warning: implicit declaration</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Include <span class="mono">&lt;stdio.h&gt;</span> at the top.</div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Mismatched braces</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">main</span>() {<br>
      <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"Hi"</span>);</span>
      <span style="color:#c0392b;font-weight:700;">// missing }</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Every <span class="mono">{</span> needs a matching <span class="mono">}</span>.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Wrong format specifier</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> = <span style="color:#b45309;">10</span>;<br>
      <span style="color:#0e6ead;">printf</span>(<span style="color:#2d7a00;">"%f"</span>, <span style="color:#0e6ead;">x</span>);<br>
      <span style="color:#c0392b;font-weight:700;">// undefined behaviour</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Use <span class="mono">%d</span> for <span class="mono">int</span>, <span class="mono">%f</span> for <span class="mono">float</span>.</div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Forgot to recompile</div>
    <div class="body-text" style="margin-top:4px;">Editing the <span class="mono">.c</span> file does <strong>not</strong> auto-update the executable. Compile again after every change.</div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><strong>Debug tip:</strong> Read errors from <strong>top to bottom</strong>. Fix the first one — many later errors will vanish.</div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div><strong>Use <span class="mono">-Wall</span>:</strong> Compile with <span class="mono">gcc -Wall</span> to get more helpful warnings.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
