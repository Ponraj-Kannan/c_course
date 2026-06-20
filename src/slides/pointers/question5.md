---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array <code>marks[5] = {45, 67, 82, 91, 55}</code>. Using a pointer and pointer arithmetic only (no array indexing with <code>[]</code>), print all 5 elements. Then print the address of each element to observe how the address increments by <code>sizeof(int)</code> each time.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an integer array of 6 elements. Use a pointer to traverse the array and find:<br>1. The largest element<br>2. The smallest element<br><br>Use only pointer arithmetic to move through the array. Print the final result with the values and their positions (index).'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Slide 5: Pointer Arithmetic"
  :contents="contents"
/>
