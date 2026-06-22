---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — WHAT ARE FORMAT SPECIFIERS?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Format Specifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What are <span class="highlight">Format Specifiers?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">format specifier</strong> is a placeholder inside a format string that tells <span class="mono">printf</span> or <span class="mono">scanf</span> <strong style="color:var(--green);">what type of data</strong> to print or read, and <strong style="color:var(--green);">how to format it</strong>.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A format specifier is like a blank in a form — <span class="mono">"Age: __"</span> — the blank tells you what kind of answer goes there (a number, not a name).</div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">int</span> age = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Age: <span style="color:#ef5050;">%d</span>"</span>, age);<br>
    <span style="color:#6b7280;">// Output: Age: 20</span>
  </div>

  <div v-click class="card card-green">
    <div class="small-text"><strong>Key idea:</strong> Without format specifiers, C has no way to know whether the bits at a memory address represent an integer, a decimal, or a character.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Anatomy of a Format Specifier</div>

  <div v-after style="background:#f0f4ff;border:2px solid var(--navy-mid);border-radius:10px;padding:14px;font-family:'Fira Code',monospace;font-size:.88rem;text-align:center;letter-spacing:2px;">
    <span style="color:var(--muted);">%</span><span style="color:var(--blue);">[flags]</span><span style="color:var(--green);">[width]</span><span style="color:var(--orange);">[.precision]</span><span style="color:var(--purple);">[length]</span><span style="color:var(--red);">type</span>
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:5px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span style="color:var(--muted);font-family:'Fira Code',monospace;font-weight:800;">%</span>
      <span class="body-text">Always starts the specifier</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span style="color:var(--blue);font-family:'Fira Code',monospace;font-weight:700;">flags</span>
      <span class="body-text">Alignment, sign, padding (optional)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span style="color:var(--green);font-family:'Fira Code',monospace;font-weight:700;">width</span>
      <span class="body-text">Minimum field width (optional)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span style="color:var(--orange);font-family:'Fira Code',monospace;font-weight:700;">.prec</span>
      <span class="body-text">Decimal places or string length (optional)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span style="color:var(--purple);font-family:'Fira Code',monospace;font-weight:700;">length</span>
      <span class="body-text">Size modifier: l, ll, h (optional)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span style="color:var(--red);font-family:'Fira Code',monospace;font-weight:700;">type</span>
      <span class="body-text">d, f, c, s, x… (required)</span>
    </div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>Only <span class="mono" style="color:var(--red);">%</span> and the <strong>type character</strong> are required — everything else is optional formatting control.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
