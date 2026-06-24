---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — OTHER USEFUL STRING FUNCTIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Other Useful <span class="highlight">String Functions</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Search Functions</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="pill pill-blue" style="flex-shrink:0;">strchr</span>
        <div>
          <div class="body-text">Finds first occurrence of a character in a string</div>
          <div style="font-family:'Fira Code',monospace;font-size:.68rem;color:var(--blue);margin-top:2px;">strchr("Hello", 'l') → pointer to first 'l'</div>
        </div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="pill pill-navy" style="flex-shrink:0;">strstr</span>
        <div>
          <div class="body-text">Finds first occurrence of a substring</div>
          <div style="font-family:'Fira Code',monospace;font-size:.68rem;color:var(--navy-mid);margin-top:2px;">strstr("Hello World", "World") → pointer to "World"</div>
        </div>
      </div>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:8px;">Case Conversion (non-standard)</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="pill pill-orange" style="flex-shrink:0;">strlwr</span>
        <div>
          <div class="body-text">Converts string to lowercase (MSVC / older compilers)</div>
          <div style="font-family:'Fira Code',monospace;font-size:.68rem;color:var(--orange);margin-top:2px;">strlwr("HELLO") → "hello"</div>
        </div>
      </div>
    </div>
    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:10px;align-items:flex-start;">
        <span class="pill pill-red" style="flex-shrink:0;">strupr</span>
        <div>
          <div class="body-text">Converts string to uppercase (MSVC / older compilers)</div>
          <div style="font-family:'Fira Code',monospace;font-size:.68rem;color:var(--red-dark);margin-top:2px;">strupr("hello") → "HELLO"</div>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">All String Functions — Quick Reference</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Function</th><th>What it does</th><th>Header</th></tr>
    </thead>
    <tbody>
      <tr v-click><td class="mono">strlen(s)</td><td>Length (excl. \0)</td><td class="mono">string.h</td></tr>
      <tr v-click><td class="mono">strcpy(d,s)</td><td>Copy s → d</td><td class="mono">string.h</td></tr>
      <tr v-click><td class="mono">strcat(d,s)</td><td>Append s to d</td><td class="mono">string.h</td></tr>
      <tr v-click><td class="mono">strcmp(s1,s2)</td><td>Compare lexicographically</td><td class="mono">string.h</td></tr>
      <tr v-click><td class="mono">strchr(s,c)</td><td>Find char in string</td><td class="mono">string.h</td></tr>
      <tr v-click><td class="mono">strstr(s,sub)</td><td>Find substring</td><td class="mono">string.h</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-info" style="margin-top:8px;">
    <div>All standard string functions require <span class="mono">#include &lt;string.h&gt;</span> — <span class="mono">strlwr</span> and <span class="mono">strupr</span> are non-standard and may not be available on all compilers.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
