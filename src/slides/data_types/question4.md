---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program with three separate functions demonstrating all three uses of <code>void</code>:<br>1. <code>void printMessage(void)</code> — void return type and void parameter list, just prints a message<br>2. <code>void printSum(int a, int b)</code> — void return type with parameters, prints the sum<br>3. A <code>main()</code> that calls both functions.'
  },
  {
    text: '<b>Q2:</b> Write a C program that demonstrates a <code>void *</code> pointer. Declare an <code>int</code> and a <code>float</code>. Assign the address of the <code>int</code> to a <code>void *</code> pointer, cast it to <code>int *</code>, and print the value. Then reassign the same <code>void *</code> to the <code>float</code>, cast to <code>float *</code>, and print. Show that <code>void *</code> can point to any type.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — void"
  :contents="contents"
/>
