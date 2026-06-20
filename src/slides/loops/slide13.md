---
transition: slide-up
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 13 — while vs do-while vs for COMPARISON
═══════════════════════════════════════════════════════ -->

<Slide2 topic="Comparison">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">while</span> vs <span class="highlight">do-while</span> vs <span class="highlight">for</span></div>

<div>
<table class="cmp-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>while Loop</th>
      <th>do-while Loop</th>
      <th>for Loop</th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <td><strong>Condition check</strong></td>
      <td>Before body</td>
      <td>After body</td>
      <td>Before body</td>
    </tr>
    <tr v-click>
      <td><strong>Minimum runs</strong></td>
      <td class="no">0 times (may skip)</td>
      <td class="yes">Always 1 time</td>
      <td class="no">0 times (may skip)</td>
    </tr>
    <tr v-click>
      <td><strong>Best used when</strong></td>
      <td>Iterations unknown</td>
      <td>Must run at least once</td>
      <td>Iterations known</td>
    </tr>
    <tr v-click>
      <td><strong>Counter update</strong></td>
      <td class="no">Manual inside body</td>
      <td class="no">Manual inside body</td>
      <td class="yes">In loop header</td>
    </tr>
    <tr v-click>
      <td><strong>Infinite loop risk</strong></td>
      <td class="no">Higher</td>
      <td class="no">Higher</td>
      <td class="yes">Lower</td>
    </tr>
    <tr v-click>
      <td><strong>Typical use case</strong></td>
      <td>Input validation</td>
      <td>Menu-driven programs</td>
      <td>Arrays, ranges, counting</td>
    </tr>
  </tbody>
</table>
</div>

<div class="g2" style="gap:10px;margin-top:10px;">

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px;font-family:'Fira Code',monospace;font-size:.65rem;line-height:1.8;">
    <div style="color:#ef5050;font-weight:700;margin-bottom:4px;">while — checks first</div>
    <span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">1</span>;<br>
    <span style="color:#ef5050;">while</span> (i &lt;= <span style="color:#b45309;">3</span>) {<br>
    <span style="padding-left:16px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d\n"</span>, i);</span>
    <span style="padding-left:16px;display:block;">i++;</span>
    }
  </div>

  <div v-click style="background:#f6f8fa;border-radius:10px;border:1px solid #e1e4e8;padding:10px;font-family:'Fira Code',monospace;font-size:.65rem;line-height:1.8;">
    <div style="color:#2d7a00;font-weight:700;margin-bottom:4px;">for — all-in-one header</div>
    <span style="color:#ef5050;">for</span> (<span style="color:#0e6ead;">int</span> i = <span style="color:#b45309;">1</span>; i &lt;= <span style="color:#b45309;">3</span>; i++) {<br>
    <span style="padding-left:16px;display:block;"><span style="color:#2d7a00;">printf</span>(<span style="color:#b45309;">"%d\n"</span>, i);</span>
    }
  </div>

</div>

  </template>
</Slide2>
