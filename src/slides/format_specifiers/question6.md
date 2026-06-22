---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares one variable of each of the following types and prints each using the correct length modifier:<br>— <code>short int</code> → <code>%hd</code><br>— <code>signed char</code> → <code>%hhd</code><br>— <code>long int</code> → <code>%ld</code><br>— <code>long long int</code> → <code>%lld</code><br><br>Assign values that clearly require each type (e.g., use a very large value for <code>long long</code>) and print with labels.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>long double</code> variable with a precise decimal value (e.g., <code>3.141592653589793L</code>) and prints it using <code>%Lf</code>. Also declare a regular <code>double</code> with the same value and print it using <code>%f</code>. Compare the number of digits printed by each to show the precision difference.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads a <code>long long int</code> from the user using <code>scanf</code> with <code>%lld</code> and a <code>short int</code> using <code>%hd</code>. Print both back with their correct <code>printf</code> length modifiers. Assign the <code>long long</code> a value large enough (e.g., <code>9000000000</code>) to show why a regular <code>int</code> with <code>%d</code> would not be sufficient.'
  }
]
</script>

<Slide
  topic="Format Specifiers in C"
  sub-topic="Practice Problems — Slide 7: Length Modifiers"
  :contents="contents"
/>
