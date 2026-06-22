---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1 (Tricky — sprintf):</b> Write a C program that reads a student\'s name, roll number, and percentage from the user. Use <code>sprintf()</code> to format all three values into a single string (e.g., <code>"Name: Alice | Roll: 101 | Percent: 91.50%"</code>) and then print that string using <code>puts()</code>. This shows how <code>printf</code>-style formatting can build strings in memory.'
  },
  {
    text: '<b>Q2 (Tricky — sscanf):</b> Write a C program that has a hardcoded string <code>"25 37.5 A"</code> representing age, weight, and grade. Use <code>sscanf()</code> to parse all three values out of the string into separate variables (<code>int</code>, <code>float</code>, <code>char</code>) and print them with labels. This demonstrates reading structured data from a string instead of from the keyboard.'
  },
  {
    text: '<b>Q3 (Tricky — full pipeline):</b> Write a C program that reads a full line using <code>fgets()</code>, then uses <code>sscanf()</code> on that line to extract a name (single word) and an integer score. Compute a letter grade using an <code>else if</code> ladder and print a final result line using <code>printf</code> in the format: <code>"Alice scored 88 — Grade: A"</code>.'
  }
]
</script>

<Slide
  topic="I/O in C"
  sub-topic="Extra Practice — Tricky I/O Questions (Set 5)"
  :contents="contents"
/>
