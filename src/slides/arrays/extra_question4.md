---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (2D — Tricky):</b> Write a C program that declares a <code>3x3</code> 2D integer array. Print the matrix <b>rotated 90 degrees clockwise</b> — the first column (read bottom to top) becomes the first row of the output. You may use a second array to store the rotated result.'
  },
  {
    text: '<b>Q2 (2D — Tricky):</b> Write a C program that declares a <code>3x3</code> 2D integer array. Find and print the <b>row with the highest sum</b> of its elements and the <b>column with the highest sum</b> of its elements, along with their respective row/column index.'
  },
  {
    text: '<b>Q3 (2D — Tricky):</b> Write a C program that declares two <code>2x2</code> matrices and adds them element-by-element to produce a third <code>2x2</code> result matrix. Then, separately, write the logic to <b>multiply</b> the same two <code>2x2</code> matrices using standard matrix multiplication rules, and print both results.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Extra Practice — 2D Arrays (Tricky, Set 2)"
  :contents="contents"
/>
