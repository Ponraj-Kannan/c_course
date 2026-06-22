---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an <code>int</code> variable and assigns it the maximum possible value using <code>INT_MAX</code> from <code>&lt;limits.h&gt;</code>. Print the value, then add <code>1</code> to it and print again. Add a comment explaining why the result wraps around (overflow behavior).'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares three <code>int</code> variables: one positive, one negative, and one zero. Print each using <code>%d</code>. Then print the size of <code>int</code> in bytes using <code>sizeof</code> and calculate the range manually as <code>-(2^(size*8-1))</code> to <code>2^(size*8-1) - 1</code> and print both bounds.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — int"
  :contents="contents"
/>
