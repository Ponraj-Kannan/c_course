---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer <code>n = 10</code>, a pointer <code>p</code> to <code>n</code>, and a double pointer <code>pp</code> to <code>p</code>. Using only <code>**pp</code>, change the value of <code>n</code> to <code>999</code>. Print <code>n</code>, <code>*p</code>, and <code>**pp</code> before and after the change to confirm all three reflect the same updated value.'
  },
  {
    text: '<b>Q2:</b> Write a C program with a function <code>allocate(int **pp, int val)</code> that receives a double pointer, assigns the address of a local static integer with value <code>val</code> to <code>*pp</code>. In <code>main()</code>, declare a pointer <code>p</code>, call <code>allocate(&p, 42)</code>, and print the value through <code>p</code> after the call. This simulates how double pointers are used to modify a pointer from inside a function.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems"
  :contents="contents"
/>
