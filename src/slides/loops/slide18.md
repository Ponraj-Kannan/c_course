---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Loop through numbers from <code>1</code> to <code>20</code>. Find the <b>first</b> number that is divisible by both <code>3</code> and <code>5</code>. Print it and stop the loop immediately.' },
  {
    text: '<b>Expected Output:</b><br><code>15</code>'
  },
  {
    text: '<b>Note:</b> Use a <b>for</b> loop with <code>i</code> from <code>1</code> to <code>20</code>. Inside the loop, use an <b>if</b> condition to check both divisibility conditions using the <b>&&</b> (AND) operator. When the condition is met, <b>printf</b> the number and <b>break</b> out of the loop.'
  },
]
</script>

<Slide
  topic="Loop Control"
  sub-topic="Practice Problem"
  :contents="contents"
/>
