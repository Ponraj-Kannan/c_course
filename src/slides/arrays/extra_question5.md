---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (1D — Tricky):</b> Write a C program that reads an array of integers. Without using any extra array, <b>remove all duplicate values</b> from the array (keep only the first occurrence of each value) and print the resulting array along with its new effective length.'
  },
  {
    text: '<b>Q2 (1D — Tricky):</b> Write a C program that declares an integer array. Find two indices <code>i</code> and <code>j</code> such that <code>arr[i] + arr[j]</code> equals a given <b>target sum</b> entered by the user. Print the pair of values (or indices) if found, otherwise print <code>"No pair found"</code>.'
  },
  {
    text: '<b>Q3 (2D — Tricky):</b> Write a C program that declares a <code>4x4</code> 2D integer array representing a grid of 0s and 1s. Count and print the total number of <b>1s in the entire grid</b>, and also print how many <b>full rows</b> (all elements equal to 1) exist in the grid.'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Extra Practice — 1D & 2D Mixed (Tricky)"
  :contents="contents"
/>
