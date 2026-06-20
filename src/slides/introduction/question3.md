---
transition: fade
---
<script setup>
const contents = [
  { text: '<b>Problem:</b> You are given two product names and prices. Write a C program to print them in a right-aligned column format using width and precision format specifiers to make the output look like a billing receipt.' },
  { text: '<b>Input 1:</b> <code>Product: "Apple", Price: 50.5</code>' },
  { text: '<b>Input 2:</b> <code>Product: "Notebook", Price: 120.75</code>' },
  { text: '<b>Expected Output:</b> <code>Product          Price</code><br><code>Apple            50.50</code><br><code>Notebook        120.75</code>' }
]
</script>
<Slide
  topic="Format Specifiers & Escape Sequence"
  sub-topic="Practice Problem 3"
  :contents="contents"
/>
