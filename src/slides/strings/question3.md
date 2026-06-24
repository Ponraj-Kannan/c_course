---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads two strings from the user. Use <code>strlen()</code> to print the length of each string (not counting the null terminator). Then use <code>strcmp()</code> to compare them and print one of three messages based on the return value:<br>— Return <code>0</code> → <code>"Strings are equal"</code><br>— Return <code>&lt; 0</code> → <code>"First string comes before second alphabetically"</code><br>— Return <code>&gt; 0</code> → <code>"First string comes after second alphabetically"</code>'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads an array of 5 strings from the user. Use <code>strcmp()</code> inside a nested loop to find and print the <b>lexicographically smallest</b> (earliest in alphabetical order) string among all five. Do not use any sorting — just comparisons.'
  }
]
</script>

<Slide
  topic="Strings in C"
  sub-topic="Practice Problems — strlen & strcmp"
  :contents="contents"
/>
