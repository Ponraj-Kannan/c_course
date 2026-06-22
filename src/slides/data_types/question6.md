---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array of 4 elements. Print the address of each element using <code>&arr[i]</code> with <code>%p</code> and also print the difference between consecutive addresses using <code>%lu</code>. Observe that the difference equals <code>sizeof(int)</code> — confirming contiguous memory layout.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an integer variable and a pointer to it. Print the address stored in the pointer using <code>%p</code>, the value it points to using <code>*ptr</code>, and the address of the pointer itself using <code>&ptr</code>. Then declare an array and a pointer set to the array name — print the first three elements using both pointer arithmetic and array indexing to confirm they are equivalent.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — Derived Types — Arrays & Pointers"
  :contents="contents"
/>
