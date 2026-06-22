---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares a pointer <code>ptr</code> and initializes it to <code>NULL</code>. Then declare an integer <code>val = 99</code>. Before using the pointer, check if it is <code>NULL</code>. If it is, assign the address of <code>val</code> to it. Then print the value through the pointer.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares three integer variables <code>a</code>, <code>b</code>, and <code>c</code> with values <code>10</code>, <code>20</code>, <code>30</code>. Declare a pointer, initialize it to <code>NULL</code>, and then sequentially point it to each variable, printing the value and address at each step.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems"
  :contents="contents"
/>
