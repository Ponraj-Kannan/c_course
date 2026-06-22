---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (Tricky — getchar loop):</b> Write a C program that reads characters using <code>getchar()</code> until <code>EOF</code> (simulate with <code>Ctrl+D</code> on Linux or <code>Ctrl+Z</code> on Windows). Count and print the total number of characters, words, and lines in the input — similar to the Unix <code>wc</code> command.'
  },
  {
    text: '<b>Q2 (Tricky — printf without newline):</b> Write a C program that prints a <b>progress bar</b> from 0% to 100% in steps of 10, all on the <b>same line</b>, overwriting the previous value using <code>\\r</code> and <code>fflush(stdout)</code> after each step. Use a loop with a small delay (a large empty loop) to simulate progress. Final output should stay at <code>100%</code>.'
  },
  {
    text: '<b>Q3 (Tricky — fgets multi-line):</b> Write a C program that reads exactly 3 lines of text using <code>fgets()</code>, strips the trailing <code>\'\\n\'</code> from each, and then prints them joined together on a <b>single line</b> separated by a space using <code>printf</code>. This demonstrates controlled multi-line input merging.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Extra Practice — Tricky I/O Questions (Set 4)"
  :contents="contents"
/>
