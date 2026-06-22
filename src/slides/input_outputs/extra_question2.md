---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (Tricky — scanf + getchar mix):</b> Write a C program that reads <code>n</code> using <code>scanf</code>, then reads <code>n</code> full lines of text (which may include spaces) using <code>fgets()</code> inside a loop, storing each into a 2D char array. After all input is done, print all lines in reverse order (last entered line first). Remember to flush the newline after <code>scanf</code> before starting <code>fgets()</code>.'
  },
  {
    text: '<b>Q2 (Tricky — putchar):</b> Write a C program that reads a string using <code>fgets()</code> and prints it <b>character by character in reverse</b> using only <code>putchar()</code> in a loop. First calculate the length of the string manually (without <code>strlen</code>), then loop backward and call <code>putchar()</code> for each character.'
  },
  {
    text: '<b>Q3 (Tricky — fgets + processing):</b> Write a C program that reads a line of text using <code>fgets()</code>, then counts how many <b>words</b> are in the line (words separated by spaces). Print the word count. Handle multiple consecutive spaces correctly so they are not counted as extra words.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Extra Practice — Tricky I/O Questions (Set 2)"
  :contents="contents"
/>
