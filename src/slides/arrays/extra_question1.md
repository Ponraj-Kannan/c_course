---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (1D — Tricky):</b> Write a C program that declares an integer array of 5 elements. Without using a second array, <b>reverse the array in place</b> (only swap elements within the same array) and print the result.'
  },
  {
    text: '<b>Q2 (1D — Tricky):</b> Write a C program that reads <code>n</code> integers into an array. Find and print the <b>second largest</b> element <b>without sorting</b> the array — just by traversing it once or twice with comparisons.'
  },
  {
    text: '<b>Q3 (1D — Tricky):</b> Write a C program that declares an integer array with possible duplicate values. Print only the elements that appear <b>more than once</b>, making sure each repeated value is printed only <b>one time</b> in the output (no duplicate printing of the same repeated number).'
  }
]
</script>

<Slide
  topic="Arrays in C"
  sub-topic="Extra Practice — 1D Arrays (Tricky)"
  :contents="contents"
/>
