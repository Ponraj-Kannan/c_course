---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that uses <code>calloc()</code> to allocate memory for an array of 6 integers. Print all 6 values immediately after allocation — before assigning anything — to confirm they are all <code>0</code> (zero-initialisation guarantee). Then assign values and print again. Free the memory at the end.'
  },
  {
    text: '<b>Q2:</b> Write a C program that uses <code>calloc()</code> to create a dynamically allocated array of 5 <code>float</code> values. Read 5 floats from the user, store them in the allocated array, compute and print the average. Include a NULL check after <code>calloc</code> and free the memory when done.'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — calloc"
  :contents="contents"
/>
