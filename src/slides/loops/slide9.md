---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — FOR LOOP: SYNTAX + ARRAY ITERATION
═══════════════════════════════════════════════════════ -->

<Slide2 topic="For Loop">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">for</span> Loop — Syntax &amp; Iterating Arrays</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Syntax Structure</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:16px;font-family:'Fira Code',monospace;font-size:.8rem;line-height:2;">
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">init</span>; <span style="color:#c49a00;">condition</span>; <span style="color:#2d7a00;">update</span>) {<br>
    <span style="padding-left:20px;display:block;color:#6b7280;">/* body of loop */</span>
    }
  </div>

  <div v-click style="margin-top:6px;display:flex;flex-direction:column;gap:6px;border:1px solid #e1e4e8;padding:10px;border-radius:10px;">
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-keyword">init</span>
      <span class="body-text">Declare &amp; initialize loop variable</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-value">condition</span>
      <span class="body-text">Checked before each iteration</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-operator">update</span>
      <span class="body-text">Runs after each iteration (i++ etc.)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="syn-varname">body</span>
      <span class="body-text">Code block inside { } that repeats</span>
    </div>
  </div>

  <div v-click class="callout callout-success" style="margin-top:6px;">
    <div>All three parts — init, condition, update — are written <strong>in one line</strong>, making for loops compact and easy to read.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Iterating Through an Array</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.75rem;line-height:1.9;">
    <span style="color:#6b7280;">/* Print each element of array */</span><br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">marks</span>[] = {<span style="color:#b45309;">85</span>, <span style="color:#b45309;">90</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>};<br>
    <br>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#b45309;">4</span>; <span style="color:#0e6ead;">i</span>++) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"marks[%d] = %d\n"</span>, <span style="color:#0e6ead;">i</span>, <span style="color:#0e6ead;">marks</span>[<span style="color:#0e6ead;">i</span>]);</span>
    }
  </div>

  <div v-click style="margin-top:6px;">
    <div class="section-label" style="margin-bottom:6px;">Array Index Visualization</div>
    <div style="display:flex;gap:4px;flex-wrap:wrap;">
      <div style="background:var(--red-soft);border:2px solid var(--red);border-radius:8px;padding:8px 12px;text-align:center;min-width:44px;">
        <div class="mono" style="font-size:.85rem;font-weight:700;color:var(--red-dark);">85</div>
        <div style="font-size:.55rem;color:var(--muted);">i=0</div>
      </div>
      <div v-after style="background:#ebf8ff;border:2px solid #3182ce;border-radius:8px;padding:8px 12px;text-align:center;min-width:44px;">
        <div class="mono" style="font-size:.85rem;font-weight:700;color:#2b6cb0;">90</div>
        <div style="font-size:.55rem;color:var(--muted);">i=1</div>
      </div>
      <div v-after style="background:#f0fff4;border:2px solid #38a169;border-radius:8px;padding:8px 12px;text-align:center;min-width:44px;">
        <div class="mono" style="font-size:.85rem;font-weight:700;color:#276749;">78</div>
        <div style="font-size:.55rem;color:var(--muted);">i=2</div>
      </div>
      <div v-after style="background:#fffaf0;border:2px solid #dd6b20;border-radius:8px;padding:8px 12px;text-align:center;min-width:44px;">
        <div class="mono" style="font-size:.85rem;font-weight:700;color:#c05621;">92</div>
        <div style="font-size:.55rem;color:var(--muted);">i=3</div>
      </div>
    </div>
  </div>

  <div v-click class="output-box" style="margin-top:8px;font-size:.72rem;">
    marks[0] = 85<br>
    marks[1] = 90<br>
    marks[2] = 78<br>
    marks[3] = 92
  </div>
</div>

</div>

  </template>
</Slide2>
