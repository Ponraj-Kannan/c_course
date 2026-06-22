---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads a name (single word) and an age from the user using <code>scanf</code>. Use <code>%19s</code> for the name (to limit input to 19 characters and protect the 20-char buffer) and <code>%d</code> for age. Print both values back. Add a comment explaining why the width limit in <code>%s</code> matters for buffer safety.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a <code>float</code> and a <code>double</code> from the user using <code>scanf</code>. Use <code>%f</code> for the float and <code>%lf</code> for the double. Print both using <code>printf</code> with <code>%.6f</code>. Add a comment explaining why using <code>%f</code> instead of <code>%lf</code> for a <code>double</code> in <code>scanf</code> leads to incorrect results.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads three values on one line in the format <code>int float char</code> using a single <code>scanf</code> with three specifiers (<code>%d %f %c</code>). Note: add a space before <code>%c</code> to skip whitespace. Print all three with labels. Then separately read a hex value using <code>%x</code> in <code>scanf</code> and print it with <code>%d</code> to show it was correctly stored as decimal.'
  }
]
</script>

<Slide
  topic="Format Specifiers in C"
  sub-topic="Practice Problems — Slide 6: Format Specifiers in scanf"
  :contents="contents"
/>
