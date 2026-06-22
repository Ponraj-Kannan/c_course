---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that uses <code>printf</code> to print the following output <b>exactly</b> as shown — using escape sequences for tab and newline:<br><code>Name:&nbsp;&nbsp;&nbsp;&nbsp;Alice</code><br><code>Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20</code><br><code>Grade:&nbsp;&nbsp;&nbsp;A</code><br><br>Each label and value must be separated using <code>\\t</code>, and each line must end with <code>\\n</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an <code>int</code>, a <code>float</code>, a <code>char</code>, and a string (<code>char[]</code>). Use a <b>single <code>printf</code> statement</b> with multiple format specifiers (<code>%d</code>, <code>%.2f</code>, <code>%c</code>, <code>%s</code>) to print all four values on one line with proper labels.'
  },
  {
    text: '<b>Q3:</b> Write a C program that prints a simple <b>invoice</b> using <code>printf</code>:<br><code>Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty&nbsp;&nbsp;&nbsp;Price</code><br><code>Pen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.00</code><br><code>Notebook&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85.50</code><br><br>Use <code>\\t</code> for alignment and <code>%.2f</code> for prices. All values must be stored in variables, not hardcoded inside <code>printf</code>.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Practice Problems — printf"
  :contents="contents"
/>
