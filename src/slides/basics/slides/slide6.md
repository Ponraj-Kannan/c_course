<Slide2 topic="Identifiers — Valid vs Invalid">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Valid</span> vs <span class="highlight">Invalid</span> Identifiers</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-green" style="text-align:center;">
    <div class="slide-h2" style="color:var(--green);">Valid</div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">studentName</span>     <span style="color:#6b7280;">// good camelCase</span><br>
    <span style="color:#0e6ead;">total_marks</span>     <span style="color:#6b7280;">// good snake_case</span><br>
    <span style="color:#0e6ead;">count1</span>          <span style="color:#6b7280;">// digit at end is OK</span><br>
    <span style="color:#0e6ead;">_temp</span>           <span style="color:#6b7280;">// underscore start</span><br>
    <span style="color:#0e6ead;">MAX_LIMIT</span>       <span style="color:#6b7280;">// constant style</span>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-red" style="text-align:center;">
    <div class="slide-h2" style="color:var(--red-dark);">Invalid</div>
  </div>

  <div v-click class="code-block" style="border-color:var(--red);">
    <span style="color:#c0392b;">1count</span>          <span style="color:#6b7280;">// starts with digit</span><br>
    <span style="color:#c0392b;">float</span>           <span style="color:#6b7280;">// it's a keyword</span><br>
    <span style="color:#c0392b;">student-name</span>    <span style="color:#6b7280;">// hyphen not allowed</span><br>
    <span style="color:#c0392b;">my var</span>          <span style="color:#6b7280;">// space not allowed</span><br>
    <span style="color:#c0392b;">total$</span>          <span style="color:#6b7280;">// special char</span>
  </div>
</div>

</div>

<div v-click class="callout callout-info" style="margin-top:10px;font-size:.7rem;">
  <div><strong>Quick test:</strong> If you can't say the name out loud as a normal word, the compiler probably can't either.</div>
</div>

  </template>
</Slide2>
