---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that allocates an integer array of size 4, stores values, prints them, then frees the memory. Immediately after calling <code>free()</code>, set the pointer to <code>NULL</code>. Then add an <code>if (ptr != NULL)</code> guard before any further use of the pointer to show the safe-after-free pattern. Add a comment explaining why setting to <code>NULL</code> after <code>free</code> is a best practice.'
  },
  {
    text: '<b>Q2:</b> Write a C program that demonstrates that <code>free(NULL)</code> is safe. Declare a pointer and initialise it to <code>NULL</code>. Call <code>free(ptr)</code> on it and show the program does not crash. Then write a second section where a pointer is allocated, freed, and immediately set to <code>NULL</code> — try calling <code>free</code> on it again to show that the NULL guard prevents a double-free crash.'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — free"
  :contents="contents"
/>
