---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (Tricky — printf):</b> Write a C program that prints the following pattern using only <code>printf</code> and escape sequences — no loops allowed:<br><code>Line 1\\tColumn A</code><br><code>Line 2\\tColumn B</code><br><code>Line 3\\tColumn C</code><br><br>Then on the same line as "Line 3 Column C", use <code>\\r</code> to overwrite the beginning of that line with <code>DONE</code> and observe what gets printed. Add a comment explaining what <code>\\r</code> does.'
  },
  {
    text: '<b>Q2 (Tricky — scanf):</b> Write a C program that reads a date in the format <code>DD/MM/YYYY</code> using a <b>single <code>scanf</code> call</b> with a format string that includes the slash separators (e.g., <code>scanf("%d/%d/%d", ...)</code>). Store day, month, and year in separate integers and print them individually with labels.'
  },
  {
    text: '<b>Q3 (Tricky — getchar):</b> Write a C program that reads a sentence using <code>getchar()</code> in a loop (until <code>\'\\n\'</code>). Count and print separately: the number of <b>vowels</b>, the number of <b>consonants</b>, and the number of <b>spaces</b> in the sentence. Do not use any string functions — process each character as it is read.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Extra Practice — Tricky I/O Questions (Set 1)"
  :contents="contents"
/>
