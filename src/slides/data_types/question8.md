---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that prints the size in bytes of every fundamental type using <code>sizeof</code> and <code>%lu</code>:<br><code>char</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>long long</code>, <code>float</code>, <code>double</code>, <code>long double</code>.<br><br>Format the output as a two-column table: type name on the left, size on the right, aligned using <code>\\t</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an integer array of 10 elements. Use <code>sizeof</code> to calculate and print:<br>1. Total size of the array in bytes<br>2. Size of one element<br>3. Number of elements (derived from the two above — no hardcoding <code>10</code>)<br><br>Then declare a <code>struct</code> with at least 3 fields and print its <code>sizeof</code>, showing it may differ from the sum of its members due to padding.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — sizeof Operator"
  :contents="contents"
/>
