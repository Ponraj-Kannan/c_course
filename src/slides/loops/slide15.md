---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Display the following number grid pattern using a nested loop in C.' },
  { text: '<b>Expected Output:</b><br><code>1 2 3</code><br><code>4 5 6</code><br><code>7 8 9</code>' },
  { text: '<b>Note:</b> Use a nested <b>for</b> loop. The outer loop controls the rows (1 to 3) and the inner loop controls the columns (1 to 3). Calculate each number as <code>(i-1)*3 + j</code> where <code>i</code> is the row and <code>j</code> is the column.' },
]
</script>

<Slide
  topic="Nested Loops"
  sub-topic="Practice Problem"
  :contents="contents"
/>
