---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 20 — NUMBER PATTERN PROGRAMS IN C
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Pattern Programs">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Number Pattern</span> Programs</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Right Triangle — Numbers</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.8;">
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">1</span>; i &lt;= <span style="color:#b45309;">5</span>; i++) {<br>
    <span style="padding-left:16px;display:block;"><span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> j = <span style="color:#b45309;">1</span>; j &lt;= i; j++)</span>
    <span style="padding-left:32px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d "</span>, j);</span>
    <span style="padding-left:16px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"\n"</span>);</span>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">
    1<br>
    1 2<br>
    1 2 3<br>
    1 2 3 4<br>
    1 2 3 4 5
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Inverted Triangle — Stars</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.8;">
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">4</span>; i &gt;= <span style="color:#b45309;">1</span>; i--) {<br>
    <span style="padding-left:16px;display:block;"><span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> j = <span style="color:#b45309;">1</span>; j &lt;= i; j++)</span>
    <span style="padding-left:32px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"* "</span>);</span>
    <span style="padding-left:16px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"\n"</span>);</span>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">
    * * * *<br>
    * * *<br>
    * *<br>
    *
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Square Pattern — Stars</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.8;">
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">1</span>; i &lt;= <span style="color:#b45309;">4</span>; i++) {<br>
    <span style="padding-left:16px;display:block;"><span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> j = <span style="color:#b45309;">1</span>; j &lt;= <span style="color:#b45309;">4</span>; j++)</span>
    <span style="padding-left:32px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"* "</span>);</span>
    <span style="padding-left:16px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"\n"</span>);</span>
    }
  </div>

  <div v-click class="output-box" style="font-size:.72rem;">
    * * * *<br>
    * * * *<br>
    * * * *<br>
    * * * *
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div><strong>Key Rule:</strong> The outer loop controls <strong>rows</strong> and the inner loop controls <strong>columns</strong>. Adjust the inner loop's range to shape the pattern.</div>
  </div>

  <div v-click class="card card-green" style="margin-top:4px;">
    <div class="small-text"><strong>Strategy:</strong> Draw the pattern on paper first. Count rows and columns. Then write loops to match.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
