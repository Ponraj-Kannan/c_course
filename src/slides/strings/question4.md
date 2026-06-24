---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares a destination <code>char</code> array of size 50. Use <code>strcpy()</code> to copy a source string into it, then use <code>strcat()</code> to append a second string to the destination. Print after each operation. Then rewrite using the safer <code>strncpy(dest, src, sizeof(dest) - 1)</code> and <code>strncat(dest, extra, sizeof(dest) - strlen(dest) - 1)</code> and add a comment explaining why the <code>n</code> variants prevent buffer overflow.'
  },
  {
    text: '<b>Q2:</b> Write a C program that builds a full name by reading a first name and a last name separately. Use <code>strcpy()</code> to copy the first name into a result buffer, then <code>strcat()</code> to append a space <code>" "</code>, then <code>strcat()</code> again to append the last name. Print the combined full name. Make sure the destination buffer is large enough to hold both names plus the space and null terminator.'
  }
]
</script>

<Slide
  topic="Strings in C"
  sub-topic="Practice Problems — strcpy & strcat"
  :contents="contents"
/>
