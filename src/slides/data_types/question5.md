---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares one variable of each modified type below and prints its value and size using <code>sizeof</code> with <code>%lu</code>:<br>— <code>short int</code> → <code>%hd</code><br>— <code>long int</code> → <code>%ld</code><br>— <code>long long int</code> → <code>%lld</code><br>— <code>unsigned int</code> → <code>%u</code><br><br>Assign values that clearly require each type (use a large value for <code>long long</code>).'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>signed char</code> with value <code>-5</code> and an <code>unsigned char</code> with value <code>250</code>. Print both using <code>%d</code> to show their integer interpretation. Then assign <code>-1</code> to an <code>unsigned int</code> and print it using <code>%u</code> to observe how the bit pattern is reinterpreted as a large positive number.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — Type Modifiers"
  :contents="contents"
/>
