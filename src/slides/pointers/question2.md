---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer <code>x = 5</code> and a pointer <code>p</code> pointing to it. Using only <code>*p</code> (not <code>x</code> directly), change the value to <code>50</code>. Print <code>x</code> after the change to confirm the update worked.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>float</code> variable <code>temp = 36.6</code> and a pointer to it. Use the pointer to:<br>1. Print the original value<br>2. Update it to <code>98.4</code><br>3. Print the updated value<br><br>All reads and writes to <code>temp</code> must go through the pointer using the <code>*</code> operator.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Slide 2: & and * Operators"
  :contents="contents"
/>
