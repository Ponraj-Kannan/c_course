---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares <code>float f = 3.14f</code> and <code>double d = 3.14</code>. Print both using <code>%.10f</code> (10 decimal places) to expose the precision difference between <code>float</code> and <code>double</code>. Also print the size of each using <code>sizeof</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that demonstrates the <b>floating-point equality trap</b>. Compute <code>float result = 0.1f + 0.2f</code> and check if it equals <code>0.3f</code> using <code>==</code> inside an <code>if</code> statement. Print whether they are equal or not. Then fix it using an epsilon comparison (<code>result - 0.3f &lt; 0.0001f</code>) and print the corrected result.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — float & double"
  :contents="contents"
/>
