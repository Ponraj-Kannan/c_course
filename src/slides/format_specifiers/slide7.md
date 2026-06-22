---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — LENGTH MODIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Length Modifiers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Length modifiers tell <span class="mono">printf</span>/<span class="mono">scanf</span> the <strong style="color:var(--red);">exact size</strong> of the data type — because <span class="mono">%d</span> alone only handles a regular <span class="mono">int</span>, not <span class="mono">long</span> or <span class="mono">short</span>.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Length Modifier Table</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Modifier</th><th>Applies to</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">h</td><td><span class="mono">short int</span></td><td class="mono">%hd, %hu</td></tr>
      <tr v-click><td class="mono">hh</td><td><span class="mono">char</span> (as integer)</td><td class="mono">%hhd, %hhu</td></tr>
      <tr v-click><td class="mono">l</td><td><span class="mono">long int</span> / <span class="mono">double</span> in scanf</td><td class="mono">%ld, %lf</td></tr>
      <tr v-click><td class="mono">ll</td><td><span class="mono">long long int</span></td><td class="mono">%lld, %llu</td></tr>
      <tr v-click><td class="mono">L</td><td><span class="mono">long double</span></td><td class="mono">%Lf</td></tr>
    </tbody>
  </table>

</div>

<div class="flex-col">

  <div v-click class="section-label">Code Example</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">short</span>     s = <span style="color:#b45309;">100</span>;<br>
    <span style="color:#0e6ead;">long</span>      l = <span style="color:#b45309;">1000000L</span>;<br>
    <span style="color:#0e6ead;">long long</span> ll = <span style="color:#b45309;">9876543210LL</span>;<br>
    <span style="color:#0e6ead;">long double</span> ld = <span style="color:#b45309;">3.14L</span>;<br>
    <br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"short     : <span style="color:#ef5050;">%hd</span>\n"</span>,  s);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"long      : <span style="color:#ef5050;">%ld</span>\n"</span>,  l);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"long long : <span style="color:#ef5050;">%lld</span>\n"</span>, ll);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"long dbl  : <span style="color:#ef5050;">%Lf</span>\n"</span>,  ld);
  </div>

  <div v-click class="output-box" style="font-size:.72rem;line-height:1.9;font-family:'Fira Code',monospace;">
    short     : 100<br>
    long      : 1000000<br>
    long long : 9876543210<br>
    long dbl  : 3.140000
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Wrong modifier = garbage output:</strong> Printing a <span class="mono">long long</span> with just <span class="mono">%d</span> silently reads only half the bytes — you get unpredictable numbers.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
