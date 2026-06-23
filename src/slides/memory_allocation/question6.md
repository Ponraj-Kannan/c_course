---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write two versions of a C program that allocates an array of 10 integers inside a function <code>void fillData()</code>:<br>— <b>Version A (leaks):</b> the function allocates with <code>malloc</code> but never frees — the pointer is lost when the function returns.<br>— <b>Version B (fixed):</b> the function frees the memory before returning, or returns the pointer to <code>main()</code> which frees it.<br><br>Add comments in each version explaining why the leak happens or why it is fixed.'
  },
  {
    text: '<b>Q2:</b> Write a C program that allocates memory inside a loop (e.g., 5 iterations, each allocating a 4-element int array) and intentionally overwrites the pointer each iteration without freeing — creating a leak on every pass. Then write the corrected version that frees each allocation before reassigning the pointer. Add comments showing where each leak occurs in the buggy version.'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — Memory Leaks"
  :contents="contents"
/>
