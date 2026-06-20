---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (1D — Tricky):</b> Write a C program that reads <code>n</code> integers into an array. <b>Left-rotate</b> the array by one position (the first element moves to the end, all others shift left by one) and print the rotated array. Do this without using a second array — shift elements within the same array.'
  },
  {
    text: '<b>Q2 (1D — Tricky):</b> Write a C program that declares an integer array containing both positive and negative numbers. <b>Rearrange</b> the array so that all negative numbers come first, followed by all positive numbers — <b>without changing the relative order</b> of negatives among themselves or positives among themselves is not required, just group them.'
  },
  {
    text: '<b>Q3 (1D — Tricky):</b> Write a C program that reads an array of integers. Find the <b>missing number</b> from a sequence of <code>1</code> to <code>n+1</code> where exactly one number is missing from the array of size <code>n</code> (e.g., array <code>{1,2,4,5}</code> is missing <code>3</code>). Do this using a mathematical formula, not by checking each number one by one.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Extra Practice — 1D Arrays (Tricky, Set 2)"
  :contents="contents"
/>
