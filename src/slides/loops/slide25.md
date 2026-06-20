---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Print a <b>diamond star pattern</b> using nested <b>for</b> loops in C.' },
  {
    text: '<b>Expected Output (for n=3):</b><br><code>  *</code><br><code> * *</code><br><code>* * *</code><br><code> * *</code><br><code>  *</code>'
  },
  {
    text: '<b>Note:</b> The pattern has two halves — <b>upper</b> and <b>lower</b>. For the upper half, use: outer loop <code>i</code> from <code>1</code> to <code>n</code>; inner loop 1 prints <code>(n - i)</code> spaces; inner loop 2 prints <code>(2*i - 1)</code> stars. For the lower half, use: outer loop <code>i</code> from <code>n-1</code> down to <code>1</code>; same space and star logic. Set <code>n = 3</code>.'
  },
]
</script>

<Slide
  topic="Practice"
  sub-topic="Diamond Pattern — Nested Loops"
  :contents="contents"
/>
