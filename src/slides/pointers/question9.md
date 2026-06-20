---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program with a function <code>swap(int *a, int *b)</code> that swaps two integers using pointers. In <code>main()</code>, declare two integers, print them before the call, call <code>swap()</code>, and print them after to confirm the values were exchanged.'
  },
  {
    text: '<b>Q2:</b> Write a C program with a function <code>calculate(int a, int b, int *sum, int *product)</code> that computes both the sum and product of two integers and stores the results through the pointer parameters. In <code>main()</code>, call the function and print both results. This demonstrates returning multiple values from a function using pointers.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Slide 9: Pointers and Function Parameters"
  :contents="contents"
/>
