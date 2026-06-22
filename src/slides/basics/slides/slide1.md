<Slide2 topic="C Tokens — Introduction">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">What are <span class="highlight">C Tokens ?</span></div>

<div class="g2" style="gap:14px;align-items:start;">

<div class="flex-col">

  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">token</strong> is the <strong style="color:var(--green);">smallest meaningful unit</strong> in a C program — the words, symbols, and numbers the compiler reads one at a time.
    </div>
  </div>

  <div v-click class="callout callout-warn">
    <div><strong>Why it matters:</strong> The compiler splits your code into tokens first; if even one token is wrong, the program won't build.</div>
  </div>

  <div v-click class="card card-red">
    <div class="slide-h3" style="margin-bottom:6px;">Real-World Analogy</div>
    <div class="body-text">An English sentence is made of <strong>words</strong> and <strong>punctuation</strong>. A C statement is made of <strong>tokens</strong> — keywords, names, operators, symbols.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Six Categories of Tokens</div>

  <div v-after class="g3" style="gap:8px;">
    <div class="card card-red" style="text-align:center;padding:8px;">
      <div class="slide-h3" style="color:var(--red-dark);">Keywords</div>
      <div class="small-text mono">int, if</div>
    </div>
    <div class="card card-blue" style="text-align:center;padding:8px;">
      <div class="slide-h3" style="color:var(--blue);">Identifiers</div>
      <div class="small-text mono">age, sum</div>
    </div>
    <div class="card card-green" style="text-align:center;padding:8px;">
      <div class="slide-h3" style="color:var(--green);">Constants</div>
      <div class="small-text mono">18, 3.14</div>
    </div>
    <div class="card card-orange" style="text-align:center;padding:8px;">
      <div class="slide-h3" style="color:var(--orange);">Operators</div>
      <div class="small-text mono">+ - * /</div>
    </div>
    <div class="card card-purple" style="text-align:center;padding:8px;">
      <div class="slide-h3" style="color:var(--purple);">Symbols</div>
      <div class="small-text mono">{ } ; ,</div>
    </div>
    <div class="card card-teal" style="text-align:center;padding:8px;">
      <div class="slide-h3" style="color:var(--teal);">Strings</div>
      <div class="small-text mono">"Hello"</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Variables are a special use of identifiers — every variable name is also a token.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
