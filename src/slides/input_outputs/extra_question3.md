---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (Tricky — printf formatting):</b> Write a C program that reads 5 student names and their marks into two arrays. Print a formatted result table using <code>printf</code> where each name column is left-aligned in a fixed width of 15 characters (<code>%-15s</code>) and each mark is right-aligned in a width of 5 characters (<code>%5d</code>). Add a header row and a separator line made of dashes.'
  },
  {
    text: '<b>Q2 (Tricky — scanf return value):</b> Write a C program that reads integers from the user in a loop using <code>scanf</code>. Use the <b>return value of <code>scanf</code></b> (it returns the number of successfully read items) to detect when the user enters a non-integer and break out of the loop. Print all successfully read integers and how many were read in total.'
  },
  {
    text: '<b>Q3 (Tricky — mixed I/O):</b> Write a C program that simulates a simple login prompt. Read a username (no spaces) using <code>scanf</code>, flush the buffer, then read a passphrase (may contain spaces) using <code>fgets()</code>. Strip the trailing newline from the passphrase. Check if the username equals <code>"admin"</code> and the passphrase equals <code>"open sesame"</code> — print <code>"Access granted"</code> or <code>"Access denied"</code> accordingly.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Extra Practice — Tricky I/O Questions (Set 3)"
  :contents="contents"
/>
