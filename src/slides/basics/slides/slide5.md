<Slide2 topic="Identifiers — Rules &amp; Conventions">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Identifiers</span> — Naming Things in C</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      An <strong style="color:var(--red);">identifier</strong> is the <strong style="color:var(--green);">name</strong> you give to variables, functions, arrays, structures — anything you create.
    </div>
  </div>

  <div v-click class="section-label">Naming Rules</div>

  <div v-after class="card card-blue">
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Allowed: letters <span class="mono">a-z A-Z</span>, digits <span class="mono">0-9</span>, underscore <span class="mono">_</span></li>
      <li>Must <strong>start</strong> with a letter or <span class="mono">_</span>, never a digit</li>
      <li>No spaces, hyphens, or special symbols</li>
      <li>Cannot be a C keyword</li>
      <li><strong>Case-sensitive:</strong> <span class="mono">age</span> and <span class="mono">Age</span> are different</li>
    </ul>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Good names explain themselves. <span class="mono">total_marks</span> is much clearer than <span class="mono">t</span>.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Common Conventions</div>

  <table v-after class="cmp-table">
    <thead>
      <tr><th>Style</th><th>Example</th><th>Used For</th></tr>
    </thead>
    <tbody>
      <tr><td>camelCase</td><td class="mono">studentName</td><td>Variables</td></tr>
      <tr><td>snake_case</td><td class="mono">total_marks</td><td>Variables (C tradition)</td></tr>
      <tr><td>UPPER_CASE</td><td class="mono">MAX_LIMIT</td><td>Constants</td></tr>
      <tr><td>PascalCase</td><td class="mono">Student</td><td>Structs / types</td></tr>
    </tbody>
  </table>

  <div v-click class="card card-orange" style="margin-top:6px;">
    <div class="slide-h3" style="color:var(--orange);">Identifier Length</div>
    <div class="body-text">Modern C allows long names. Keep them <strong>readable</strong> but not excessively long.</div>
  </div>

  <div v-click class="card card-purple">
    <div class="small-text"><strong>Tip:</strong> Pick a style and stay consistent inside one project.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
