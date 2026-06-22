---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads a full line of text (including spaces) using <code>fgets(str, sizeof(str), stdin)</code> into a <code>char</code> array of size 50, and then prints it using <code>puts()</code>. Observe that <code>puts()</code> adds an automatic newline at the end.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads three lines of text (like a name, city, and college) using <code>fgets()</code> into three separate <code>char</code> arrays. Print all three using <code>puts()</code> with a label before each. This demonstrates reading multi-word strings safely.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads a string using <code>fgets()</code> and manually removes the trailing newline character that <code>fgets()</code> stores (hint: find the <code>\'\\n\'</code> in the string and replace it with <code>\'\\0\'</code>). Print the cleaned string using <code>printf</code> with extra text appended after it to confirm no stray newline remains.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Practice Problems — gets & puts"
  :contents="contents"
/>
