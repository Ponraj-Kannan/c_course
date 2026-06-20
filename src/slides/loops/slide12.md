---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Calculate and print the sum of all even numbers between 1 and 50 using a <b>for</b> loop.' },
  { text: '<b>Expected Output:</b> <code>Sum of even numbers = 650</code>' },
  { text: '<b>Note:</b> Use a <b>for</b> loop. A number is even if <code>number % 2 == 0</code>. Declare <code>int sum = 0</code> before the loop and add each even number to it.' },
]
</script>

<Slide
  topic="For Loop"
  sub-topic="Practice Problem"
  :contents="contents"
/>
