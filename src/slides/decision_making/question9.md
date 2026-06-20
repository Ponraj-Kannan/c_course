---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads a month number (1–12) using a <code>switch</code> statement and prints the number of days in that month. Use <b>fall-through</b> to group months with the same number of days (e.g., 28, 30, or 31 days). Include a <code>default</code> case for invalid input.<br><br><b>Note:</b> Assume February always has 28 days.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a single digit (0–9) using a <code>switch</code> statement and prints whether it is:<br>— <code>0</code>: <code>"Zero"</code><br>— <code>1, 3, 5, 7, 9</code>: <code>"Odd digit"</code> (use fall-through)<br>— <code>2, 4, 6, 8</code>: <code>"Even digit"</code> (use fall-through)<br>— Any other value: <code>"Not a single digit"</code>'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 9: switch — Example & Flow"
  :contents="contents"
/>
