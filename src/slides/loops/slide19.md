---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 19 — INFINITE LOOPS IN C
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Infinite Loops">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Infinite</span> Loops in C</div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An <strong style="color:var(--red);">infinite loop</strong> runs <strong style="color:var(--green);">forever</strong> because its exit condition never becomes false. Sometimes this is intentional — for servers, menus, or event-driven programs. Usually it's a bug.
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Common Infinite Loop Patterns</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#6b7280;">/* Pattern 1: while(1) — intentional */</span><br>
    <span style="color:#ef5050;">while</span> (<span style="color:#b45309;">1</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#6b7280;">/* runs forever until break */</span></span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">break</span>; <span style="color:#6b7280;">/* exit with break */</span></span>
    }<br><br>
    <span style="color:#6b7280;">/* Pattern 2: for(;;) — intentional */</span><br>
    <span style="color:#ef5050;">for</span> (;;) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#6b7280;">/* all 3 parts empty = infinite */</span></span>
    }<br><br>
    <span style="color:#6b7280;">/* Pattern 3: Bug — missing update! */</span><br>
    <span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">1</span>;<br>
    <span style="color:#ef5050;">while</span> (i &lt;= <span style="color:#b45309;">5</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d\n"</span>, i);</span>
    <span style="padding-left:20px;display:block;color:#ef5050;">/* i++ missing → runs forever! */</span>
    }
  </div>

</div>

<div class="flex-col">

  <div v-click class="callout callout-danger">
    <div><strong>Danger Zone:</strong> A loop without a proper exit condition will freeze your program and consume all CPU. Always ensure your loop variable changes!</div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">When Infinite Loops Are Intentional</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
    <span style="color:#6b7280;">/* Intentional: keep prompting user */</span><br>
    <span style="color:#0e6ead;">char</span> ch;<br>
    <span style="color:#ef5050;">while</span> (<span style="color:#b45309;">1</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"Enter q to quit: "</span>);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">scanf</span>(<span style="color:#b45309;">" %c"</span>, &amp;ch);</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">if</span> (ch == <span style="color:#b45309;">'q'</span>) <span style="color:#ef5050;">break</span>;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"You pressed: %c\n"</span>, ch);</span>
    }
  </div>

  <div v-click class="card card-green" style="margin-top:6px;">
    <div class="small-text"><strong>Tip:</strong> Use <span class="mono">Ctrl + C</span> in the terminal to force-stop an accidental infinite loop while testing your C program.</div>
  </div>

  <div v-click class="card card-red">
    <div class="small-text"><strong>Common Bugs that cause infinite loops:</strong> forgetting <code>i++</code>, wrong condition like <code>i != 10</code> when i jumps past 10, or accidentally resetting the counter inside the loop.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
