---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that uses <code>malloc()</code> to dynamically allocate memory for an array of 5 integers. Always check if the returned pointer is <code>NULL</code> before using it — if it is, print <code>"Memory allocation failed"</code> and exit. Store values <code>10, 20, 30, 40, 50</code> using the pointer, print all elements, then free the memory.'
  },
  {
    text: '<b>Q2:</b> Write a C program that uses <code>malloc()</code> to allocate memory for a single <code>struct</code> with fields <code>int id</code> and <code>float score</code>. After allocation and NULL check, assign values to both fields through the pointer using <code>-&gt;</code>. Print the values and free the memory. This shows <code>malloc</code> is not limited to arrays.'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — malloc"
  :contents="contents"
/>
