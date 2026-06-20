---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that uses a <code>switch</code> statement with an <code>int</code> variable to print a category label for values 1, 2, and 3. Then rewrite the same logic using a <code>char</code> variable with cases <code>\'A\'</code>, <code>\'B\'</code>, and <code>\'C\'</code>. Both programs must compile and run correctly, demonstrating that <code>switch</code> works with integer and character types.'
  },
  {
    text: '<b>Q2:</b> Write a C program that uses a <code>switch</code> statement where multiple cases share the same action using fall-through, and one case has a <b>unique action</b>. Then add a <code>default</code> case at the end. The switch expression must be a user-input integer. This exercise must demonstrate: shared cases, a unique case, and a default — all in one valid <code>switch</code> block.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 11: switch — Rules & Restrictions"
  :contents="contents"
/>
