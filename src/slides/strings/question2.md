---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads a full name (with spaces) from the user using <code>fgets(str, sizeof(str), stdin)</code> into a <code>char</code> array of size 50. Strip the trailing <code>\'\\n\'</code> that <code>fgets</code> stores. Print the name using both <code>printf("%s\\n", str)</code> and <code>puts(str)</code>, and observe the difference in how the newline is handled by each.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a single word using <code>scanf("%s", str)</code> and a full sentence using <code>fgets()</code> (after flushing the buffer with <code>getchar()</code>). Print both with appropriate labels. Add comments explaining why <code>scanf("%s")</code> stops at whitespace and cannot read multi-word input, while <code>fgets</code> reads the entire line including spaces.'
  }
]
</script>

<Slide
  topic="Strings in C"
  sub-topic="Practice Problems — String Input & Output"
  :contents="contents"
/>
