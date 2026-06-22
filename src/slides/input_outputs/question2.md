---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads an integer, a float, and a character from the user using <b>a single <code>scanf</code> call</b> with multiple format specifiers. Print all three values back using <code>printf</code>. Make sure to pass the address of each variable using <code>&</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that asks the user to enter their age (int) and then their initial (char). Use <b>two separate <code>scanf</code> calls</b>. To avoid the leftover newline trap, add a space before <code>%c</code> in the second <code>scanf</code> (i.e., <code>" %c"</code>). Print both values.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads 5 integers from the user one by one using <code>scanf</code> inside a <code>for</code> loop and stores them in an array. After all inputs are read, print them in reverse order using <code>printf</code>.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Practice Problems — scanf"
  :contents="contents"
/>
