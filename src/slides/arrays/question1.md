---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array of size 5 using the syntax <code>int arr[5];</code> without initializing it. Print all 5 elements to observe the <b>default/garbage values</b>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares and initializes an array of 6 integers using an initializer list (e.g., <code>int nums[6] = {2, 4, 6, 8, 10, 12};</code>). Print all the elements one by one.'
  },
  {
    text: '<b>Q3:</b> Write a C program that declares an integer array of size 8 but initializes only the <b>first 3 values</b> (e.g., <code>int arr[8] = {1, 2, 3};</code>). Print all 8 elements and observe what value the uninitialized elements take.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Declaring & Initializing Arrays"
  :contents="contents"
/>
