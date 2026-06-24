---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares the same string <code>"Hello"</code> in all four styles:<br>1. <code>char s1[] = "Hello";</code><br>2. <code>char s2[6] = "Hello";</code><br>3. <code>char s3[] = {\'H\',\'e\',\'l\',\'l\',\'o\',\'\\0\'};</code><br>4. <code>char *s4 = "Hello";</code><br><br>Print each using <code>%s</code>, and print the size of each using <code>sizeof</code> with <code>%lu</code> to observe which ones include the null terminator in their count.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>char</code> array of size 10, manually places characters <code>\'C\'</code>, <code>\'o\'</code>, <code>\'d\'</code>, <code>\'e\'</code> at indices 0–3 and a <code>\'\\0\'</code> at index 4. Print the string using <code>%s</code>. Then change one character via its index and print again. This demonstrates that <code>char[]</code> strings are mutable.'
  }
]
</script>

<Slide
  topic="Strings in C"
  sub-topic="Practice Problems — Declaring & Initializing Strings"
  :contents="contents"
/>
