---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — VALID VS INVALID IDENTIFIERS
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Identifiers in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Valid</span> vs <span class="highlight">Invalid</span> Identifiers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">

  <div v-click class="section-label">Valid Identifiers</div>

  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);min-width:130px;">age</div>
      <div class="small-text">Lowercase letters only</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);min-width:130px;">_count</div>
      <div class="small-text">Starts with underscore</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);min-width:130px;">total_score</div>
      <div class="small-text">Letters and underscore</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);min-width:130px;">value2</div>
      <div class="small-text">Digit after a letter is fine</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);min-width:130px;">MAX_SIZE</div>
      <div class="small-text">All caps with underscore</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#f0fff4;border:2px solid var(--green);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--green);min-width:130px;">StudentName</div>
      <div class="small-text">PascalCase — mixed caps</div>
    </div>
  </div>

</div>

<div class="flex-col">

  <div v-click class="section-label">Invalid Identifiers</div>

  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);min-width:130px;">2score</div>
      <div class="small-text">Starts with a digit</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);min-width:130px;">my score</div>
      <div class="small-text">Contains a space</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);min-width:130px;">total#val</div>
      <div class="small-text">Contains special char #</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);min-width:130px;">int</div>
      <div class="small-text">Reserved keyword</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);min-width:130px;">my-name</div>
      <div class="small-text">Hyphen not allowed</div>
    </div>
    <div style="display:flex;gap:10px;align-items:center;" v-click>
      <div style="background:#fff5f5;border:2px solid var(--red);border-radius:8px;padding:6px 14px;font-family:'Fira Code',monospace;font-weight:700;color:var(--red-dark);min-width:130px;">val@home</div>
      <div class="small-text">@ is a special character</div>
    </div>
  </div>

  <div v-click class="callout callout-danger" style="margin-top:8px;">
    <div><strong>Compiler reaction:</strong> Using an invalid identifier causes a <strong>compile-time error</strong> — the program will not build until it is fixed.</div>
  </div>

</div>

</div>

  </template>
</Slide2>
