---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — VOID TYPE
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Data Types in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">The <span class="highlight">void</span> Type</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      <span class="mono" style="color:var(--red);">void</span> means <strong style="color:var(--green);">"no type" or "nothing"</strong>. It is used in three specific contexts — you cannot declare a regular variable of type <span class="mono">void</span>.
    </div>
  </div>

  <div v-click style="margin-top:8px;">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
      <span class="pill pill-red">1 — void Return Type</span>
    </div>
    <div style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
      <span style="color:#0e6ead;">void</span> <span style="color:#2d7a00;">printHello</span>() {<br>
      &nbsp;&nbsp;<span style="color:#2d7a00;">printf</span>(<span style="color:#2d7a00;">"Hello!\n"</span>);<br>
      &nbsp;&nbsp;<span style="color:#6b7280;">// no return value needed</span><br>
      }
    </div>
    <div class="small-text" style="margin-top:4px;">Function returns nothing — <span class="mono">void</span> tells the compiler not to expect a return value.</div>
  </div>

  <div v-click style="margin-top:8px;">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
      <span class="pill pill-blue">2 — void Parameter List</span>
    </div>
    <div style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
      <span style="color:#0e6ead;">int</span> <span style="color:#2d7a00;">getScore</span>(<span style="color:#0e6ead;">void</span>) {<br>
      &nbsp;&nbsp;<span style="color:#0e6ead;">return</span> <span style="color:#b45309;">95</span>;<br>
      }
    </div>
    <div class="small-text" style="margin-top:4px;">Explicitly says the function takes <strong>no arguments</strong> — more precise than empty parentheses in C.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click style="margin-top:4px;">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
      <span class="pill pill-green">3 — void Pointer</span>
    </div>
    <div style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px 14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:1.9;">
      <span style="color:#0e6ead;">void</span> *ptr;<br>
      <span style="color:#0e6ead;">int</span>  x = <span style="color:#b45309;">10</span>;<br>
      ptr = &amp;x;  <span style="color:#6b7280;">// can point to any type</span>
    </div>
    <div class="small-text" style="margin-top:4px;">A <span class="mono">void *</span> is a <strong>generic pointer</strong> — it can hold the address of any type, but must be cast before dereferencing.</div>
  </div>

  <div v-click class="section-label" style="margin-top:10px;">Three Uses at a Glance</div>

  <table class="cmp-table">
    <thead v-click>
      <tr><th>Context</th><th>Meaning</th></tr>
    </thead>
    <tbody>
      <tr v-click><td><span class="mono">void func()</span></td><td>Function returns nothing</td></tr>
      <tr v-click><td><span class="mono">func(void)</span></td><td>Function takes no arguments</td></tr>
      <tr v-click><td><span class="mono">void *ptr</span></td><td>Generic pointer — type unknown</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Cannot declare:</strong> <span class="mono">void x;</span> is a compile error — <span class="mono">void</span> is not a storage type, only a placeholder meaning "nothing."</div>
  </div>

</div>

</div>

  </template>
</Slide2>
