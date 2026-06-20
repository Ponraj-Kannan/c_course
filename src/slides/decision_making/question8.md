---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads an integer from 1 to 7 representing a day of the week. Use a <code>switch</code> statement to print the name of the day (<code>1 → "Monday"</code>, <code>2 → "Tuesday"</code>, … <code>7 → "Sunday"</code>). Include a <code>default</code> case that prints <code>"Invalid day"</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a <code>char</code> representing an arithmetic operator (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) and two float operands. Use a <code>switch</code> statement to perform and print the result of the selected operation. Handle division by zero in the <code>/</code> case. Print <code>"Invalid operator"</code> in the <code>default</code> case.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 8: switch — Syntax"
  :contents="contents"
/>
