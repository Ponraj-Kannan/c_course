---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program with a function <code>printMatrix(int arr[][3], int rows)</code> that prints a 2D array with 3 fixed columns. Call this function from <code>main()</code> with a <code>2x3</code> matrix of your choice.'
  },
  {
    text: '<b>Q2:</b> Write a C program with a function <code>int sumMatrix(int arr[][4], int rows)</code> that takes a 2D array with 4 fixed columns and returns the sum of all its elements. Call it from <code>main()</code> on a <code>3x4</code> matrix and print the result.'
  },
  {
    text: '<b>Q3:</b> Write a C program with a function <code>void transposeSquare(int arr[][3], int n)</code> that transposes a square <code>3x3</code> matrix <b>in place</b> (swap <code>arr[i][j]</code> with <code>arr[j][i]</code>). Print the matrix before and after calling the function.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Practice Problems — Passing Arrays to Functions (2D)"
  :contents="contents"
/>
