---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — WHAT IS A 2D ARRAY?
═══════════════════════════════════════════════════════ -->

<Slide2 topic="2D Arrays in C">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What is a <span class="highlight">2D Array?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">2D array</strong> is an array of arrays — it organises data in a <strong style="color:var(--green);">table of rows and columns</strong>. Think of it as a grid where every cell holds one value.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Real-World Analogy:</strong> A <strong>classroom seating chart</strong> — rows are the row number, columns are the seat number. You locate any student by saying "Row 2, Seat 3".</div>
  </div>

</div>

<div class="flex-col">
<div v-click class="section-label" style="margin-top:4px;">1D Array vs 2D Array</div>

  <div v-after style="display:flex;flex-direction:column;gap:8px;">
    <div style="background:var(--red-soft);border:1px solid var(--red);border-radius:10px;padding:12px 14px;">
      <div style="font-size:.65rem;font-weight:700;color:var(--red-dark);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">1D Array — a single row</div>
      <div style="display:flex;gap:6px;">
        <div class="idx-cell">10</div>
        <div class="idx-cell">20</div>
        <div class="idx-cell">30</div>
        <div class="idx-cell">40</div>
      </div>
      <div style="display:flex;gap:6px;margin-top:3px;">
        <div class="idx-num" style="min-width:38px;">[0]</div>
        <div class="idx-num" style="min-width:38px;">[1]</div>
        <div class="idx-num" style="min-width:38px;">[2]</div>
        <div class="idx-num" style="min-width:38px;">[3]</div>
      </div>
    </div>
    <div style="background:#f0fff4;border:1px solid var(--green);border-radius:10px;padding:12px 14px;">
      <div style="font-size:.65rem;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">2D Array — rows × columns (3×3)</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="display:flex;gap:6px;align-items:center;">
          <div style="font-family:'Fira Code',monospace;font-size:.6rem;color:var(--muted);width:24px;">R0</div>
          <div class="idx-cell">1</div><div class="idx-cell">2</div><div class="idx-cell">3</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <div style="font-family:'Fira Code',monospace;font-size:.6rem;color:var(--muted);width:24px;">R1</div>
          <div class="idx-cell">4</div><div class="idx-cell">5</div><div class="idx-cell">6</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;">
          <div style="font-family:'Fira Code',monospace;font-size:.6rem;color:var(--muted);width:24px;">R2</div>
          <div class="idx-cell">7</div><div class="idx-cell">8</div><div class="idx-cell">9</div>
        </div>
        <div style="display:flex;gap:6px;margin-left:28px;">
          <div class="idx-num" style="min-width:38px;">C0</div>
          <div class="idx-num" style="min-width:38px;">C1</div>
          <div class="idx-num" style="min-width:38px;">C2</div>
        </div>
      </div>
    </div>
  </div>

</div>

</div>

  </template>
</Slide2>