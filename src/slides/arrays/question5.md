---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares a 2D integer array of 3 rows and 4 columns (<code>int arr[3][4];</code>) without initializing it. Use nested <code>for</code> loops to assign each element the value <code>row * 4 + col</code>, then print the full grid in matrix format.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a 2D array representing a <code>4x4</code> seating layout (0 = empty, 1 = occupied). Use nested loops to fill it with values entered by the user, then print it as a grid of rows and columns.'
  },
  {
    text: '<b>Q3:</b> Write a C program that declares a 2D integer array of size <code>3x3</code>. Using <code>sizeof</code>, calculate and print the total number of elements, and the size in bytes of the whole array versus a single row. This should help illustrate the row-major memory layout.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — 2D Array Basics"
  :contents="contents"
/>
