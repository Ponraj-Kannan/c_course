---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array of 5 elements. Print the value at index <code>0</code> (first element) and index <code>4</code> (last element) to demonstrate zero-based indexing.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an array of 5 student marks. Read a position number from the user (1 to 5) and update the mark at that position to a new value entered by the user. Print the full array before and after the update.'
  },
  {
    text: '<b>Q3:</b> Write a C program that declares an integer array <code>arr[6] = {10, 20, 30, 40, 50, 60};</code>. Swap the value at index <code>0</code> with the value at index <code>5</code>, and swap the value at index <code>1</code> with the value at index <code>4</code>. Print the array before and after swapping.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Accessing & Modifying Array Elements"
  :contents="contents"
/>
