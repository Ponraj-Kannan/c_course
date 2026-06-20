---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Write a C program to calculate the <b>factorial</b> of a number entered by the user using a <b>for</b> loop.' },
  { text: '<b>Input:</b> <code>5</code>' },
  {
    text: '<b>Expected Output:</b><br><code>Factorial of 5 = 120</code>'
  },
  {
    text: '<b>Note:</b> Factorial of n is n × (n-1) × (n-2) × ... × 1. So 5! = 5 × 4 × 3 × 2 × 1 = 120. Declare <code>long long fact = 1</code> before the loop. Use a <b>for</b> loop with <code>i</code> from <code>1</code> to <code>n</code>, multiplying <code>fact = fact * i</code> in each iteration.'
  },
]
</script>

<Slide
  topic="Practice"
  sub-topic="Factorial — For Loop"
  :contents="contents"
/>
