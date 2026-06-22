---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads characters one by one using <code>getchar()</code> in a loop until the user presses <code>Enter</code> (<code>\'\\n\'</code>). Count and print the total number of characters entered (excluding the newline itself).'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a line of characters using <code>getchar()</code> and echoes each character back immediately using <code>putchar()</code>, but converts every <b>lowercase letter to uppercase</b> before printing. Non-letter characters should be printed as-is. Stop on <code>\'\\n\'</code>.'
  },
  {
    text: '<b>Q3:</b> Write a C program that first uses <code>scanf</code> to read an integer, then uses <code>getchar()</code> to flush the leftover newline from the input buffer, and then reads a character using <code>getchar()</code> and prints it with <code>putchar()</code>. This demonstrates the buffer-flush use case of <code>getchar()</code>.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Practice Problems — getchar & putchar"
  :contents="contents"
/>
