---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — STRING INPUT & OUTPUT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">String <span class="highlight">Input</span> &amp; <span class="highlight">Output</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">Output Functions</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">char</span> name[] = <span style="color:#2d7a00;">"Alice"</span>;<br>
    <br>
    <span style="color:#6b7280;">// printf with %s specifier</span><br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hello, <span style="color:#ef5050;">%s</span>!\n"</span>, name);<br>
    <br>
    <span style="color:#6b7280;">// puts — prints string + auto \n</span><br>
    <span style="color:#2d7a00;">puts</span>(name);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.8;font-family:'Fira Code',monospace;">
    Hello, Alice!<br>
    Alice
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><span class="mono">puts()</span> always appends <span class="mono">\n</span> — use <span class="mono">printf("%s", name)</span> when you want to control the newline yourself.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">Input Functions</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#0e6ead;">char</span> name[<span style="color:#b45309;">50</span>];<br>
    <br>
    <span style="color:#6b7280;">// scanf — stops at whitespace</span><br>
    <span style="color:#2d7a00;">scanf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%49s</span>"</span>, name);<br>
    <br>
    <span style="color:#6b7280;">// fgets — reads full line safely</span><br>
    <span style="color:#2d7a00;">fgets</span>(name, <span style="color:#b45309;">50</span>, stdin);
  </div>

  <div style="margin-top:6px;">
    <table class="cmp-table">
      <thead v-click>
        <tr><th>Function</th><th>Reads spaces?</th><th>Buffer safe?</th></tr>
      </thead>
      <tbody>
        <tr v-click><td class="mono">scanf("%s")</td><td class="no">✘ Stops at space</td><td class="no">✘ No (add width)</td></tr>
        <tr v-click><td class="mono">fgets(s,n,stdin)</td><td class="yes">✔ Yes</td><td class="yes">✔ Yes</td></tr>
        <tr v-click><td class="mono">gets(s)</td><td class="yes">✔ Yes</td><td class="no">✘ Removed C11</td></tr>
      </tbody>
    </table>
  </div>

</div>

</div>

  </template>
</Slide2>
