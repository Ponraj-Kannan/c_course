<Slide2 topic="Module 1 — Summary">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What You've <span class="highlight">Learned</span> Today</div>

<div class="g2" style="gap:12px;">

<div class="flex-col" style="gap:8px;">

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--red);">
    <div class="icon-circle ic-red">P</div>
    <div>
      <div class="slide-h3">Programming Basics</div>
      <div class="small-text">From problem to logic to code to output.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--blue);">
    <div class="icon-circle ic-blue">L</div>
    <div>
      <div class="slide-h3">Languages &amp; Translators</div>
      <div class="small-text">Low/high level, compiler, interpreter, assembler.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--green);">
    <div class="icon-circle ic-green">C</div>
    <div>
      <div class="slide-h3">Introduction to C</div>
      <div class="small-text">History, features, applications, and influence.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--orange);">
    <div class="icon-circle ic-orange">S</div>
    <div>
      <div class="slide-h3">Structure &amp; Setup</div>
      <div class="small-text">main(), printf, GCC, IDEs, compilation pipeline.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;border:1px solid var(--purple);">
    <div class="icon-circle ic-purple">F</div>
    <div>
      <div class="slide-h3">First Programs</div>
      <div class="small-text">Hello World, formatting, escape sequences, debugging.</div>
    </div>
  </div>

</div>

<div class="flex-col" style="gap:10px;">

  <div v-click class="card-navy" style="border-radius:10px;padding:14px 18px;">
    <div style="font-size:.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px;">Quick Reference Cheat Sheet</div>
    <div style="font-family:'Fira Code',monospace;font-size:.68rem;line-height:1.9;color:var(--navy);">
      <div v-after><span style="color:#ef5050;">#include</span> &lt;stdio.h&gt; <span style="color:#6b7280;"># header</span></div>
      <div v-after><span style="color:#0e6ead;">int</span> main() { ... } <span style="color:#6b7280;"># entry point</span></div>
      <div v-after>printf("text"); <span style="color:#6b7280;"># print to screen</span></div>
      <div v-after>printf("%d", x); <span style="color:#6b7280;"># int</span></div>
      <div v-after>printf("%f", y); <span style="color:#6b7280;"># float</span></div>
      <div v-after>\n \t \\ \" <span style="color:#6b7280;"># escape seq</span></div>
      <div v-after>gcc hello.c -o hello <span style="color:#6b7280;"># compile</span></div>
      <div v-after>./hello <span style="color:#6b7280;"># run</span></div>
      <div v-after><span style="color:#ef5050;">return</span> 0; <span style="color:#6b7280;"># success</span></div>
    </div>
  </div>

  <div v-click class="callout callout-success">
    <div><strong>Next module:</strong> Variables, data types, operators, and your first real input/output programs.</div>
  </div>

  <div v-click class="card card-orange">
    <div class="small-text"><strong>Tip:</strong> Practice every concept by writing small programs. Reading code is not enough — typing it makes it stick.</div>
  </div>

</div>
</div>
  </template>
</Slide2>
