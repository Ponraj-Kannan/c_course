---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — COMPARING ALL I/O FUNCTIONS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Input & Output in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Comparing All <span class="highlight">I/O Functions</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Output Functions</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Function</th><th>What it prints</th><th>Auto \n?</th></tr>
    </thead>
    <tbody>
      <tr v-click>
        <td class="mono">printf("...", ...)</td>
        <td>Formatted text — any type</td>
        <td class="no">✘ No</td>
      </tr>
      <tr v-click>
        <td class="mono">putchar(ch)</td>
        <td>Single character</td>
        <td class="no">✘ No</td>
      </tr>
      <tr v-click>
        <td class="mono">puts(str)</td>
        <td>String</td>
        <td class="yes">✔ Yes</td>
      </tr>
    </tbody>
  </table>

  <div v-click class="section-label" style="margin-top:10px;">Input Functions</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Function</th><th>What it reads</th><th>Spaces?</th><th>Safe?</th></tr>
    </thead>
    <tbody>
      <tr v-click>
        <td class="mono">scanf("...", &amp;...)</td>
        <td>Formatted — any type</td>
        <td class="no">✘ Stops</td>
        <td class="yes">✔ With width</td>
      </tr>
      <tr v-click>
        <td class="mono">getchar()</td>
        <td>One character</td>
        <td class="yes">✔ Yes</td>
        <td class="yes">✔ Yes</td>
      </tr>
      <tr v-click>
        <td class="mono">gets(str)</td>
        <td>Full line</td>
        <td class="yes">✔ Yes</td>
        <td class="no">✘ Removed C11</td>
      </tr>
      <tr v-click>
        <td class="mono">fgets(str,n,stdin)</td>
        <td>Full line (bounded)</td>
        <td class="yes">✔ Yes</td>
        <td class="yes">✔ Yes</td>
      </tr>
    </tbody>
  </table>

</div>

<div class="flex-col">

  <div v-click class="section-label">When to Use Which</div>

  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-blue" style="flex-shrink:0;">printf</span>
      <div class="body-text">General purpose — numbers, strings, formatted output</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-green" style="flex-shrink:0;">putchar</span>
      <div class="body-text">Printing one character at a time, or simple text without formatting</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-orange" style="flex-shrink:0;">puts</span>
      <div class="body-text">Quick string print when you always want a trailing newline</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-blue" style="flex-shrink:0;">scanf</span>
      <div class="body-text">Reading numbers or single words from the user</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-navy" style="flex-shrink:0;">getchar</span>
      <div class="body-text">Reading one character, or flushing the input buffer</div>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;" v-click>
      <span class="pill pill-green" style="flex-shrink:0;">fgets</span>
      <div class="body-text">Reading full lines including spaces — always prefer over <span class="mono">gets</span></div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>
