---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads an integer and uses an <code>else if</code> ladder to classify it as:<br>— <code>"Negative"</code> if less than 0<br>— <code>"Zero"</code> if equal to 0<br>— <code>"Small positive"</code> if between 1 and 50<br>— <code>"Large positive"</code> if greater than 50<br><br>Only one message should be printed per run.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a person\'s age and uses an <code>else if</code> ladder to print their life stage:<br>— <code>0–12</code>: <code>"Child"</code><br>— <code>13–17</code>: <code>"Teenager"</code><br>— <code>18–64</code>: <code>"Adult"</code><br>— <code>65 and above</code>: <code>"Senior"</code><br><br>Make sure the conditions are written in the correct order so only the right block executes.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 4: else if Ladder — Syntax"
  :contents="contents"
/>
