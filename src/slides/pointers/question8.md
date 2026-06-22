---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an <code>int</code> variable and a <code>float</code> variable. Use a single <code>void *</code> pointer to first point to the <code>int</code>, cast it to <code>int *</code>, and print the value. Then reassign the same <code>void *</code> to the <code>float</code>, cast it to <code>float *</code>, and print that value.'
  },
  {
    text: '<b>Q2:</b> Write a C program that uses <code>malloc()</code> to dynamically allocate memory for an array of 5 integers. Store values <code>1</code> to <code>5</code> in the allocated memory using a pointer. Print all values, then free the memory using <code>free()</code>. Remember: <code>malloc()</code> returns a <code>void *</code>, so cast it appropriately to <code>int *</code>.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems"
  :contents="contents"
/>
