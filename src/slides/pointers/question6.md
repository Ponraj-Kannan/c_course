---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer array <code>scores[5]</code> and reads 5 values from the user. Use a pointer to compute and print the <b>sum</b> and <b>average</b> of the elements. Access every element strictly through pointer notation (<code>*(ptr + i)</code>), not bracket indexing.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an integer array of 5 elements. Use a pointer to reverse the array <b>in-place</b> (swap first with last, second with second-last, and so on using the pointer). Print the array before and after reversal.'
  }
]
</script>

<Slide
  topic="Pointers in C"
  sub-topic="Practice Problems — Slide 6: Pointers and Arrays"
  :contents="contents"
/>
