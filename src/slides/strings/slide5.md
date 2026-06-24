---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — STRCPY & STRCAT
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">strcpy</span> &amp; <span class="highlight">strcat</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-blue">strcpy — Copy a String</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">char</span>* <span class="syn-keyword">strcpy</span>(<span class="syn-keyword">char</span>* <span class="syn-varname">dest</span>, <span class="syn-keyword">const char</span>* <span class="syn-varname">src</span>);
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">char</span> src[] = <span style="color:#2d7a00;">"Hello"</span>;<br>
    <span style="color:#0e6ead;">char</span> dest[<span style="color:#b45309;">10</span>];<br>
    <span style="color:#2d7a00;">strcpy</span>(dest, src);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%s</span>"</span>, dest); <span style="color:#6b7280;">// Hello</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Buffer overflow risk:</strong> <span class="mono">strcpy</span> doesn't check if <span class="mono">dest</span> is large enough — use <span class="mono">strncpy(dest, src, n)</span> to copy at most <span class="mono">n</span> characters safely.</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;margin-top:4px;">
    <span style="color:#6b7280;">// Safer alternative</span><br>
    <span style="color:#2d7a00;">strncpy</span>(dest, src, <span style="color:#0e6ead;">sizeof</span>(dest) - <span style="color:#b45309;">1</span>);<br>
    dest[<span style="color:#0e6ead;">sizeof</span>(dest) - <span style="color:#b45309;">1</span>] = <span style="color:#2d7a00;">'\0'</span>;
  </div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">strcat — Concatenate Strings</span>
  </div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.82rem;line-height:2.2;">
    <span class="syn-keyword">char</span>* <span class="syn-keyword">strcat</span>(<span class="syn-keyword">char</span>* <span class="syn-varname">dest</span>, <span class="syn-keyword">const char</span>* <span class="syn-varname">src</span>);
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:4px;">
    <span style="color:#0e6ead;">char</span> greeting[<span style="color:#b45309;">20</span>] = <span style="color:#2d7a00;">"Hello"</span>;<br>
    <span style="color:#2d7a00;">strcat</span>(greeting, <span style="color:#2d7a00;">" World"</span>);<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"<span style="color:#ef5050;">%s</span>"</span>, greeting); <span style="color:#6b7280;">// Hello World</span>
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">Hello World</div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>dest must be large enough:</strong> <span class="mono">strcat</span> appends at the <span class="mono">\0</span> position — if <span class="mono">dest</span> doesn't have room for the result, it overflows. Use <span class="mono">strncat(dest, src, n)</span> for safety.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
