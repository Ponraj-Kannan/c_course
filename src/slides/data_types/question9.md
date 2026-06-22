---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that demonstrates <b>implicit type conversion</b> (widening). Declare <code>int a = 5</code> and <code>double b = 2.5</code>. Compute <code>double result = a + b</code> and print it. Then compute <code>int r2 = a + b</code> and print it to show narrowing truncation. Add comments on each line explaining what conversion happens automatically.'
  },
  {
    text: '<b>Q2:</b> Write a C program that shows the <b>integer division trap</b> and its fix using explicit casting. First compute <code>int a = 7, b = 2</code> and print <code>a / b</code> (result will be <code>3</code>, not <code>3.5</code>). Then fix it by casting: <code>(float)a / b</code> and print the correct result. Also demonstrate casting in the other direction by assigning <code>double d = 9.99</code> to an <code>int</code> and showing the truncation.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — Type Conversion"
  :contents="contents"
/>
