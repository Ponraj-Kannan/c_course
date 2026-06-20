---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Take a number as input and repeatedly divide it by 3 until the result becomes less than 1. Print the result after each division.' },
  { text: '<b>Input:</b> <code>81</code>' },
  { text: '<b>Expected Output:</b><br><code>81 / 3 = 27</code><br><code>27 / 3 = 9</code><br><code>9 / 3 = 3</code><br><code>3 / 3 = 1</code><br><code>Result: 1</code>' },
  { text: '<b>Note:</b> Use a <b>while</b> loop. The loop should continue as long as the number is greater than or equal to <code>3</code>.' },
]
</script>

<Slide
  topic="While Loop"
  sub-topic="Practice Problem"
  :contents="contents"
/>
