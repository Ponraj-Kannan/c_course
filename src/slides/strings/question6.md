---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares both <code>char arr[] = "Hello"</code> and <code>char *ptr = "Hello"</code>. Show that <code>arr[0] = \'J\'</code> works and prints <code>"Jello"</code>. Then attempt to understand why <code>ptr[0] = \'J\'</code> is unsafe — add a comment explaining that <code>char *</code> pointing to a string literal points to <b>read-only memory</b> and modifying it causes undefined behaviour. Use <code>%p</code> to print and compare the addresses of <code>arr</code> and <code>ptr</code>.'
  },
  {
    text: '<b>Q2:</b> Write a C program with a function <code>int countChar(char *str, char ch)</code> that takes a <code>char *</code> parameter and counts how many times <code>ch</code> appears in the string using pointer arithmetic (increment the pointer in a loop, no array indexing). Call it from <code>main()</code> with a string read via <code>fgets()</code> and a character read via <code>getchar()</code>. Print the count.'
  }
]
</script>

<Slide
  topic="Strings in C"
  sub-topic="Practice Problems — Strings & Pointers"
  :contents="contents"
/>
