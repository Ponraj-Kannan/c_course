---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that collects the following user inputs using the <b>most appropriate I/O function for each</b>:<br>— Student name (may contain spaces) → use <code>fgets()</code><br>— Age → use <code>scanf()</code><br>— Grade letter → use <code>getchar()</code> (with buffer flush)<br><br>Print all three values at the end using <code>printf</code> and <code>puts()</code> appropriately.'
  },
  {
    text: '<b>Q2:</b> Write a C program that builds a simple <b>student record</b> by reading name, roll number, and CGPA from the user — choosing the right I/O function for each field. Then print the complete record in a formatted table using <code>printf</code> with <code>%.2f</code> for CGPA and <code>%s</code> for the name.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads a <b>menu choice</b> (integer 1–4) using <code>scanf</code>, flushes the buffer using <code>getchar()</code>, then reads a sentence using <code>fgets()</code>, and finally prints the sentence using <code>puts()</code>. Use a <code>switch</code> on the menu choice to prefix the output with a label like <code>"Note:"</code>, <code>"Warning:"</code>, <code>"Info:"</code>, or <code>"Error:"</code>.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Practice Problems"
  :contents="contents"
/>
