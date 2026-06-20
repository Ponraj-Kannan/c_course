---
transition: fade
---
<script setup>
const contents = [
  { text: '<b>Problem:</b> You are given two sets of student details. Write a C program to print the details in a neatly formatted table using escape sequences such as <code>\\n</code>, <code>\\t</code>, and <code>\\\\</code> to format the output properly.' },
  { text: '<b>Input 1:</b> <code>Name: Alice, Age: 20, Grade: A</code>' },
  { text: '<b>Input 2:</b> <code>Name: Bob, Age: 22, Grade: B</code>' },
  { text: '<b>Expected Output:</b> <code>Name\\tAge\\tGrade</code><br><code>Alice\\t20\\tA</code><br><code>--------------------</code><br><code>Bob\\t\\t22\\tB</code>' }
]
</script>
<Slide
  topic="Format Specifiers & Escape Sequence"
  sub-topic="Practice Problem 2"
  :contents="contents"
/>
