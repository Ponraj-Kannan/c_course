---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — FUNCTION ARGUMENTS & PARAMETERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Functions in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Function <span class="highlight">Arguments</span> &amp; <span class="highlight">Parameters</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.8rem;line-height:1.6;color:var(--slate);">
      <strong style="color:var(--navy-mid);">Parameters</strong> are placeholders defined in the function signature.<br>
      <strong style="color:var(--red);">Arguments</strong> are the actual values supplied when calling the function.
    </div>
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.74rem;line-height:2.1;">
    <span style="color:#6b7280;">/* Parameters: a and b */</span><br>
    <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">multiply</span>(<span style="color:#b45309;">int</span> <span style="color:#2d7a00;">a</span>, <span style="color:#b45309;">int</span> <span style="color:#2d7a00;">b</span>) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ef5050;">return</span> <span style="color:#2d7a00;">a</span> * <span style="color:#2d7a00;">b</span>;<br>
    }<br><br>
    <span style="color:#6b7280;">/* Arguments: 6 and 7 */</span><br>
    <span style="color:#b45309;">int</span> r = <span style="color:#0e6ead;">multiply</span>(<span style="color:#b45309;">6</span>, <span style="color:#b45309;">7</span>);
  </div>

  <div v-click style="display:flex;gap:10px;align-items:center;background:#f7f8fc;border-radius:10px;padding:12px;border:1px solid var(--border);">
    <div style="text-align:center;flex:1;">
      <div style="font-size:.6rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Arguments (caller)</div>
      <div style="display:flex;gap:6px;justify-content:center;">
        <div style="background:#fde8e8;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);">6</div>
        <div style="background:#fde8e8;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);">7</div>
      </div>
    </div>
    <div style="font-size:1.4rem;color:var(--muted);">→</div>
    <div style="text-align:center;flex:1;">
      <div style="font-size:.6rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Parameters (callee)</div>
      <div style="display:flex;gap:6px;justify-content:center;">
        <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);">a=6</div>
        <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);">b=7</div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-success">
    <div>The number, order, and types of arguments must match the parameters exactly — this is enforced by the compiler.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Types of Functions by Parameters</div>

  <div style="display:flex;flex-direction:column;gap:8px;">

    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
        <span class="pill pill-navy">No Arguments, No Return</span>
      </div>
      <div style="font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;color:var(--slate);">
        <span style="color:#b45309;">void</span> <span style="color:#0e6ead;">greet</span>() { <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hi!"</span>); }
      </div>
    </div>

    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
        <span class="pill pill-green">With Arguments, No Return</span>
      </div>
      <div style="font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;color:var(--slate);">
        <span style="color:#b45309;">void</span> <span style="color:#0e6ead;">printNum</span>(<span style="color:#b45309;">int</span> n) { <span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"%d"</span>, n); }
      </div>
    </div>

    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
        <span class="pill pill-blue">No Arguments, With Return</span>
      </div>
      <div style="font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;color:var(--slate);">
        <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">getYear</span>() { <span style="color:#ef5050;">return</span> <span style="color:#b45309;">2025</span>; }
      </div>
    </div>

    <div v-click class="card" style="padding:10px 14px;">
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
        <span class="pill pill-red">With Arguments &amp; Return</span>
      </div>
      <div style="font-family:'Fira Code',monospace;font-size:.7rem;line-height:1.9;color:var(--slate);">
        <span style="color:#b45309;">int</span> <span style="color:#0e6ead;">add</span>(<span style="color:#b45309;">int</span> a, <span style="color:#b45309;">int</span> b) { <span style="color:#ef5050;">return</span> a+b; }
      </div>
    </div>

  </div>

</div>

</div>

  </template>
</Slide2>
