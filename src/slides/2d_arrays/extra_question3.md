---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares a <code>4x4</code> 2D integer array filled with values of your choice. Print only the elements that lie on the <b>border</b> (first row, last row, first column, last column) — skip the inner elements entirely.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>3x3</code> 2D integer array. Calculate and print the sum of the <b>main diagonal</b> (top-left to bottom-right) and the sum of the <b>anti-diagonal</b> (top-right to bottom-left) separately.'
  },
  {
    text: '<b>Q3:</b> Write a C program that declares a <code>3x3</code> matrix. Check whether it is a <b>symmetric matrix</b> — meaning <code>arr[i][j]</code> is equal to <code>arr[j][i]</code> for every position. Print <code>"Symmetric"</code> or <code>"Not Symmetric"</code> based on the result.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Extra Practice — 2D Arrays (Tricky)"
  :contents="contents"
/>
