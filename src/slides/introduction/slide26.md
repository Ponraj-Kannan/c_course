<Slide2 topic="Practical Activities — Part 1">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">Practical <span class="highlight">Activities</span></div>

<div class="activity-box">
  <div class="act-title">Hands-on Practice</div>

  <div class="g2" style="gap:10px;">

  <div class="flex-col" style="gap:8px;">
    <div class="act-task" v-click>
      <strong>Activity 1 — Write Your First C Program</strong>
      <div style="margin-top:5px;color:#2d7a00;font-family:'Fira Code',monospace;font-size:.7rem;">
        Create <span style="color:#b45309;">hello.c</span> that prints "Hello World".
      </div>
      <div class="hint">Hint: include stdio.h and use printf inside main().</div>
    </div>

    <div class="act-task" v-click>
      <strong>Activity 2 — Modify Hello World</strong>
      <div style="margin-top:5px;color:#2d7a00;font-family:'Fira Code',monospace;font-size:.7rem;">
        Change the text to your own name. Re-compile and run.
      </div>
      <div class="hint">Hint: edit the string inside the printf call.</div>
    </div>

    <div class="act-task" v-click>
      <strong>Activity 3 — Print Multiple Lines</strong>
      <div style="margin-top:5px;color:#2d7a00;font-family:'Fira Code',monospace;font-size:.7rem;">
        Print three lines: Name, Course, College.
      </div>
      <div class="hint">Hint: use \n inside the string or three printf calls.</div>
    </div>
  </div>

  <div class="flex-col" style="gap:8px;">
    <div class="act-task" v-click>
      <strong>Activity 4 — Escape Sequences</strong>
      <div style="margin-top:5px;color:#2d7a00;font-family:'Fira Code',monospace;font-size:.7rem;">
        Print "Name:\tValue" using \t and \n. Try \\ and \" too.
      </div>
      <div class="hint">Hint: \t = tab, \\ = backslash.</div>
    </div>

    <div class="act-task" v-click>
      <strong>Activity 5 — Compile with GCC</strong>
      <div style="margin-top:5px;color:#2d7a00;font-family:'Fira Code',monospace;font-size:.7rem;">
        Use gcc to compile your file and run the executable from the terminal.
      </div>
      <div class="hint">Hint: gcc hello.c -o hello, then ./hello</div>
    </div>

    <div class="act-task" v-click>
      <strong>Bonus — Bug Hunt</strong>
      <div style="margin-top:5px;color:#2d7a00;font-family:'Fira Code',monospace;font-size:.7rem;">
        Remove the semicolon from printf and try to compile. Read the error message.
      </div>
      <div class="hint">Hint: error messages tell you WHERE and WHY.</div>
    </div>
  </div>
  </div>
</div>

  </template>
</Slide2>
