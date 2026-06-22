---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that defines a <code>struct Student</code> with fields <code>int roll</code>, <code>float cgpa</code>, and <code>char grade</code>. Declare a variable of this struct, assign values to each field, and print them. Also print the size of the struct using <code>sizeof</code> and compare it to the sum of individual field sizes to observe struct padding.'
  },
  {
    text: '<b>Q2:</b> Write a C program that defines the same fields as the previous question but inside a <code>union</code> instead of a <code>struct</code>. Assign a value to <code>roll</code>, print it, then assign a value to <code>cgpa</code>, and print both <code>roll</code> and <code>cgpa</code>. Observe that assigning to one field overwrites the other. Print <code>sizeof</code> of the union and compare it to the struct size to show the memory-sharing difference.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — Derived Types — Structs & Unions"
  :contents="contents"
/>
