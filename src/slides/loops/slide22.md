---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Print the first <b>10 terms</b> of the <b>Fibonacci series</b> using a <b>while</b> loop in C.' },
  { text: '<b>Input:</b> No input required.' },
  {
    text: '<b>Expected Output:</b><br><code>0 1 1 2 3 5 8 13 21 34</code>'
  },
  {
    text: '<b>Note:</b> In the Fibonacci series, each number is the sum of the two before it. Start with <code>a = 0</code> and <code>b = 1</code>. In each iteration: print <code>a</code>, then compute <code>next = a + b</code>, then shift: <code>a = b</code> and <code>b = next</code>. Repeat using a <b>while</b> loop for 10 iterations.'
  },
]
</script>

<Slide
  topic="Practice"
  sub-topic="Fibonacci Series — While Loop"
  :contents="contents"
/>
