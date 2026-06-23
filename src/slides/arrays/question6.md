---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares and initializes a <code>3x3</code> integer array using nested braces (e.g., <code>int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};</code>). Use nested <code>for</code> loops to print the matrix row by row.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads values for a <code>2x3</code> matrix from the user using nested <code>for</code> loops, then prints the matrix in proper row/column format with aligned spacing.'
  },
  {
    text: '<b>Q3:</b> Write a C program that initializes a <code>3x3</code> matrix and computes the <b>sum of all elements</b>, the <b>sum of each row</b>, and the <b>sum of each column</b>, using nested loops. Print all the results clearly labeled.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Practice Problems — Initializing & Accessing 2D Arrays"
  :contents="contents"
/>
