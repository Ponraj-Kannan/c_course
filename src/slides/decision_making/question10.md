---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads a season number (1–4). Use a <code>switch</code> statement <b>with fall-through</b> to print all the months belonging to that season:<br>— <code>1</code>: Winter → Dec, Jan, Feb<br>— <code>2</code>: Spring → Mar, Apr, May<br>— <code>3</code>: Summer → Jun, Jul, Aug<br>— <code>4</code>: Autumn → Sep, Oct, Nov<br><br>Group the months using fall-through so each case only needs one <code>break</code>.'
  },
  {
    text: '<b>Q2:</b> Write <b>two versions</b> of a C program that reads a number from 1 to 3:<br><br><b>Version A:</b> Use <code>switch</code> <b>without <code>break</code></b> — observe how all cases below the matched case also execute.<br><br><b>Version B:</b> Use <code>switch</code> <b>with <code>break</code></b> — only the matched case executes.<br><br>Print a message in each case (e.g., <code>"Case 1"</code>, <code>"Case 2"</code>, <code>"Case 3"</code>) so the difference in behavior is clearly visible in the output.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 10: switch — Fall-through Behavior"
  :contents="contents"
/>
