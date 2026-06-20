---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — SWITCH FALL-THROUGH BEHAVIOR
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Decision Making in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">switch</span> — Fall-Through Behavior</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Without a <span class="mono" style="color:var(--red);">break</span>, execution <strong style="color:var(--green);">"falls through"</strong> into the next case — it keeps running every line below the matched case until it hits a <span class="mono">break</span> or the end of the switch.
    </div>
  </div>

  <div v-click style="display:flex;gap:8px;align-items:center;margin-top:6px;margin-bottom:4px;">
    <span class="pill pill-red">Without break — Bug!</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.8;">
    <span style="color:#0e6ead;">int</span> day = <span style="color:#b45309;">2</span>;<br>
    <span style="color:#ef5050;">switch</span> (day) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">1</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Mon "</span>);<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">2</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Tue "</span>);<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">3</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Wed "</span>);<br>
    }
  </div>
  <div v-click class="output-box" style="font-size:.72rem;">Tue &nbsp; Wed</div>

</div>

<div class="flex-col">

  <div v-click style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
    <span class="pill pill-green">With break — Correct</span>
  </div>
  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:12px 14px;font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.8;">
    <span style="color:#0e6ead;">int</span> day = <span style="color:#b45309;">2</span>;<br>
    <span style="color:#ef5050;">switch</span> (day) {<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">1</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Mon "</span>); <span style="color:#ef5050;">break</span>;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">2</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Tue "</span>); <span style="color:#ef5050;">break</span>;<br>
    &nbsp;&nbsp;<span style="color:#ef5050;">case</span> <span style="color:#b45309;">3</span>: <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Wed "</span>); <span style="color:#ef5050;">break</span>;<br>
    }
  </div>
  <div v-click class="output-box" style="font-size:.72rem;">Tue</div>

  <div v-click class="callout callout-success" style="margin-top:8px;">
    <div><strong>Intentional fall-through</strong> is sometimes useful — e.g. grouping multiple cases to share the same code, like treating Saturday and Sunday both as "Weekend."</div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:4px;">
    <div><strong>Beginner Trap:</strong> Forgetting <span class="mono">break</span> is one of the most common <span class="mono">switch</span> bugs in C — always double-check each case.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
