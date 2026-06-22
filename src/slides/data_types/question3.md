---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares <code>char ch = \'A\'</code>. Print it using both <code>%c</code> (as a character) and <code>%d</code> (as its ASCII value). Then use arithmetic to print the next 4 uppercase letters (<code>B</code>, <code>C</code>, <code>D</code>, <code>E</code>) using a loop that increments <code>ch</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a lowercase letter from the user using <code>scanf(" %c")</code>. Convert it to uppercase using arithmetic (subtract <code>32</code> or use <code>\'a\' - \'A\'</code> as the offset) without using any library function. Print the original and converted character with their ASCII values.'
  }
]
</script>

<Slide
  topic="Data Types in C"
  sub-topic="Practice Problems — char"
  :contents="contents"
/>
