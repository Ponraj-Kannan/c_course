---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array of 5 elements. Declare a pointer <code>p</code> and assign it the array name directly (<code>int *p = arr;</code>) without using <code>&arr[0]</code>. Use the pointer to print all 5 elements, demonstrating array-to-pointer decay.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an integer array of 6 elements. Print every element <b>twice</b> — once using array bracket notation (<code>arr[i]</code>) and once using pointer arithmetic (<code>*(arr + i)</code>) — to show both notations produce identical output.'
  },
  {
    text: '<b>Q3:</b> Write a C program that declares an integer array of 5 elements and a pointer to its first element. Use pointer arithmetic (incrementing the pointer in a loop, <b>not</b> array indexing) to find and print the <b>sum</b> of all elements.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Arrays and Pointers"
  :contents="contents"
/>
