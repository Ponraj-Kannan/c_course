---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that separately declares an <code>int</code>, a <code>float</code>, a <code>double</code>, and a <code>char</code> variable with values of your choice. For each, declare its correctly typed pointer and assign the address. Print each variable\'s value through its pointer and also print <code>sizeof</code> of each pointer type to observe how type widths differ.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>double</code> variable <code>price = 199.99</code>. Declare a <code>double *</code> pointer to it. Through the pointer, increase the price by <code>50.0</code> and print the new value. Then declare a <code>char</code> variable <code>grade = \'A\'</code>, a <code>char *</code> pointer to it, change the grade to <code>\'B\'</code> via the pointer, and print it.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Slide 4: Pointer Types and Type Safety"
  :contents="contents"
/>
