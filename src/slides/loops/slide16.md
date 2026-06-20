---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Print a number triangle pattern using nested <b>for</b> loops in C.' },
  {
    text: '<b>Expected Output:</b><br><code>1</code><br><code>1 2</code><br><code>1 2 3</code><br><code>1 2 3 4</code>'
  },
  {
    text: '<b>Note:</b> Use an <b>outer loop</b> with <code>i</code> from <code>1</code> to <code>4</code> to control the row number. Use an <b>inner loop</b> with <code>j</code> from <code>1</code> to <code>i</code> to print numbers in each row. Use <code>printf("%d ", j)</code> inside the inner loop and <code>printf("\\n")</code> after the inner loop completes each row.'
  },
]
</script>

<Slide
  topic="Nested Loops"
  sub-topic="Practice Problem"
  :contents="contents"
/>
