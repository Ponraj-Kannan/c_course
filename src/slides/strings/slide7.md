---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — STRINGS & POINTERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Strings</span> &amp; <span class="highlight">Pointers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A string in C is just a <strong style="color:var(--red);">pointer to its first character</strong> — when you pass a string to a function, you're passing the address of <span class="mono">str[0]</span>.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;margin-top:6px;">
    <span style="color:#0e6ead;">char</span> arr[] = <span style="color:#2d7a00;">"Hi"</span>;   <span style="color:#6b7280;">// array — modifiable</span><br>
    <span style="color:#0e6ead;">char</span> *ptr = <span style="color:#2d7a00;">"Hi"</span>;   <span style="color:#6b7280;">// pointer — read-only!</span><br>
    <br>
    arr[<span style="color:#b45309;">0</span>] = <span style="color:#2d7a00;">'h'</span>; <span style="color:#6b7280;">// ✔ OK — arr is on stack</span><br>
    ptr[<span style="color:#b45309;">0</span>] = <span style="color:#2d7a00;">'h'</span>; <span style="color:#6b7280;">// ⚠ undefined behaviour!</span>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>String literals are read-only:</strong> <span class="mono">char *ptr = "Hi"</span> stores the address of a literal in the read-only text segment — attempting to modify it causes undefined behaviour or a segfault.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">char[] vs char* Comparison</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th class="mono">char arr[]</th><th class="mono">char *ptr</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Stored in</td><td>Stack</td><td>Points to text segment</td></tr>
      <tr v-click><td>Modifiable?</td><td class="yes">✔ Yes</td><td class="no">✘ No (UB)</td></tr>
      <tr v-click><td>sizeof gives</td><td>Full array size</td><td>Pointer size (8 B)</td></tr>
      <tr v-click><td>Can reassign?</td><td class="no">✘ No</td><td class="yes">✔ Yes</td></tr>
    </tbody>
  </table>

  <div v-click class="section-label" style="margin-top:8px;">Walking a String via Pointer</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;">
    <span style="color:#0e6ead;">char</span> *p = <span style="color:#2d7a00;">"Hello"</span>;<br>
    <span style="color:#ef5050;">while</span> (*p != <span style="color:#2d7a00;">'\0'</span>)<br>
    &nbsp;&nbsp;<span style="color:#2d7a00;">putchar</span>(*p++); <span style="color:#6b7280;">// prints H e l l o</span>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div>Pointer traversal is the foundation of how all standard string functions like <span class="mono">strlen</span> and <span class="mono">strcpy</span> work internally.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
