---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — KEYWORDS VS IDENTIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Keywords</span> vs <span class="highlight">Identifiers</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--red);">Keywords</strong> are words <strong style="color:var(--green);">pre-defined by the C language</strong> with a fixed meaning — they cannot be redefined or used as identifiers.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Side-by-Side Comparison</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Feature</th><th>Keywords</th><th>Identifiers</th></tr>
    </thead>
    <tbody>
      <tr v-click><td>Defined by</td><td>C language</td><td>Programmer</td></tr>
      <tr v-click><td>Meaning fixed?</td><td class="yes">✔ Yes</td><td class="no">✘ No</td></tr>
      <tr v-click><td>Can be redefined?</td><td class="no">✘ Never</td><td class="yes">✔ Yes</td></tr>
      <tr v-click><td>Always lowercase?</td><td class="yes">✔ Yes</td><td class="no">✘ Your choice</td></tr>
      <tr v-click><td>Example</td><td class="mono">int, for, return</td><td class="mono">age, totalScore</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Using a keyword as identifier:</strong> <span class="mono">int for = 5;</span> — this causes an immediate compile error since <span class="mono">for</span> is reserved.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">All 32 C Keywords (ANSI C)</div>
  <div v-click class="small-text" style="margin-bottom:6px;">None of these can be used as identifier names</div>

  <div style="display:flex;gap:4px;flex-wrap:wrap;">
    <span v-click style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">auto</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">break</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">case</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">char</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">const</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">continue</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">default</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">do</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">double</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">else</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">enum</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">extern</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">float</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">for</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">goto</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">if</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">int</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">long</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">register</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">return</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">short</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">signed</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">sizeof</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">static</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">struct</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">switch</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">typedef</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">union</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">unsigned</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">void</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">volatile</span>
    <span v-after style="background:var(--red-soft);color:var(--red-dark);border:1px solid var(--red);border-radius:6px;padding:3px 9px;font-family:'Fira Code',monospace;font-size:.67rem;font-weight:700;">while</span>
  </div>

</div>

</div>

  </template>
</Slide2>
