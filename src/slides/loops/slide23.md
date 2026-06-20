---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Write a C program to check whether a given number is <b>prime</b> or not, using a <b>for</b> loop with <b>break</b>.' },
  { text: '<b>Input:</b> <code>17</code>' },
  {
    text: '<b>Expected Output:</b><br><code>17 is a Prime Number</code>'
  },
  {
    text: '<b>Note:</b> A prime number is divisible only by 1 and itself. Use a <b>for</b> loop from <code>i = 2</code> to <code>i &lt;= n/2</code>. Inside the loop, if <code>n % i == 0</code>, the number is <b>not prime</b> — set a flag and <b>break</b>. After the loop, check the flag to print the result. Use an <code>int</code> flag variable like <code>isPrime = 1</code> (assume prime) and set it to <code>0</code> if divisible.'
  },
]
</script>

<Slide
  topic="Practice"
  sub-topic="Prime Number Check — For Loop + Break"
  :contents="contents"
/>
