---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads a sentence from the user. Use the following functions and print the result of each with a label:<br>— <code>strchr(str, \'e\')</code> → find the first occurrence of <code>\'e\'</code> and print the substring from that point<br>— <code>strstr(str, "the")</code> → find if the word <code>"the"</code> exists in the sentence and print the substring from that point, or print <code>"Not found"</code> if NULL is returned<br>— <code>strlwr(str)</code> → convert and print in lowercase<br>— <code>strupr(str)</code> → convert and print in uppercase'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a string and uses <code>strrev()</code> to reverse it. Print the original and reversed strings. Then manually check if the original and reversed strings are equal using <code>strcmp()</code> — if they are, print <code>"Palindrome"</code>; otherwise print <code>"Not a palindrome"</code>. This combines multiple string functions in a single meaningful task.'
  }
]
</script>

<Slide
  topic="Strings in C"
  sub-topic="Practice Problems — Other Useful String Functions"
  :contents="contents"
/>
