---
transition: fade
---
<script setup>
const contents = [
  { text: '<b>Problem:</b> You are given two sets of values containing an integer, a float, and a character. Write a C program to print each value using the correct format specifier for its data type.' },
  { text: '<b>Input 1:</b> <code>int: 25</code>, <code>float: 98.6</code>, <code>char: A</code>' },
  { text: '<b>Input 2:</b> <code>int: 100</code>, <code>float: 3.14</code>, <code>char: Z</code>' },
  { text: '<b>Expected Output:</b> <code>Integer : 25</code><br><code>Float   : 98.600000</code><br><code>Char    : A</code><br><code>Integer : 100</code><br><code>Float   : 3.140000</code><br><code>Char    : Z</code>' }
]
</script>
<Slide
  topic="Format Specifiers & Escape Sequence"
  sub-topic="Practice Problem 1"
  :contents="contents"
/>
