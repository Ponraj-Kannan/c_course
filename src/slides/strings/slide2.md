---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — DECLARING & INITIALIZING STRINGS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Strings in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Declaring &amp; <span class="highlight">Initializing</span> Strings</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Four Initialization Styles</div>

  <div v-after style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:14px;font-family:'Fira Code',monospace;font-size:.72rem;line-height:2;">
    <span style="color:#6b7280;">// 1. String literal — size auto-computed</span><br>
    <span style="color:#0e6ead;">char</span> name[] = <span style="color:#2d7a00;">"Alice"</span>;<br>
    <br>
    <span style="color:#6b7280;">// 2. Fixed size — must include \0 space</span><br>
    <span style="color:#0e6ead;">char</span> city[<span style="color:#b45309;">10</span>] = <span style="color:#2d7a00;">"Chennai"</span>;<br>
    <br>
    <span style="color:#6b7280;">// 3. Char-by-char with explicit \0</span><br>
    <span style="color:#0e6ead;">char</span> grade[] = {<span style="color:#2d7a00;">'A'</span>, <span style="color:#2d7a00;">'+'</span>, <span style="color:#2d7a00;">'\0'</span>};<br>
    <br>
    <span style="color:#6b7280;">// 4. Pointer to string literal (read-only!)</span><br>
    <span style="color:#0e6ead;">char</span> *msg = <span style="color:#2d7a00;">"Hello"</span>;
  </div>

  <div v-click class="callout callout-danger" style="margin-top:6px;">
    <div><strong>Style 4 is read-only:</strong> <span class="mono">char *msg = "Hello"</span> points to a string literal in read-only memory — modifying it (e.g. <span class="mono">msg[0] = 'h'</span>) is undefined behaviour.</div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Memory Diagram — char city[10]</div>

  <div v-after class="mem-box">
    <div class="mem-header">char city[10] = "Chennai" (7 chars + \0)</div>
    <div class="mem-row"><div class="mem-name">city[0]</div><div class="mem-val">'C'</div></div>
    <div class="mem-row"><div class="mem-name">city[1]</div><div class="mem-val">'h'</div></div>
    <div class="mem-row"><div class="mem-name">city[2]</div><div class="mem-val">'e'</div></div>
    <div class="mem-row"><div class="mem-name">city[3..6]</div><div class="mem-val">'n','n','a','i'</div></div>
    <div class="mem-row"><div class="mem-name">city[7]</div><div class="mem-val" style="color:var(--red-dark);">'\0'</div></div>
    <div class="mem-row"><div class="mem-name">city[8..9]</div><div class="mem-val" style="color:var(--muted);">unused (0)</div></div>
  </div>

  <div v-click class="callout callout-info" style="margin-top:6px;">
    <div>When the array is larger than the string, remaining bytes are <strong>zero-filled</strong> — so <span class="mono">city[8]</span> and <span class="mono">city[9]</span> hold <span class="mono">0</span> automatically.</div>
  </div>

  <div v-click class="callout callout-warn" style="margin-top:4px;">
    <div><strong>No built-in assignment:</strong> You can't do <span class="mono">city = "Delhi"</span> after declaration — use <span class="mono">strcpy(city, "Delhi")</span> instead.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
