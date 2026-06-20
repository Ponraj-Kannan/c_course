---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads an integer. Use a <b>nested <code>if-else</code></b> to first check if it is positive or not. If positive, nest a second check to determine if it is <b>even or odd</b>. If not positive, nest a check to determine if it is <b>zero or negative</b>.<br><br>Print one of: <code>"Positive Even"</code>, <code>"Positive Odd"</code>, <code>"Zero"</code>, or <code>"Negative"</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a person\'s <b>income</b> and <b>age</b>. Use nested <code>if-else</code> to check loan eligibility:<br>— Outer condition: age must be between 21 and 60<br>— Inner condition (if age is valid): income must be greater than 30000<br><br>Print <code>"Eligible for loan"</code>, <code>"Income too low"</code>, or <code>"Age not eligible"</code> accordingly.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 6: Nested if-else — Syntax"
  :contents="contents"
/>
