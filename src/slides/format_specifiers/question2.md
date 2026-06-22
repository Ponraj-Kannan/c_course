---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares <code>double val = 123456.789</code>. Print it using all three float specifiers with labels:<br>— <code>%f</code> → standard decimal notation<br>— <code>%e</code> → scientific notation (lowercase)<br>— <code>%g</code> → shorter of <code>%f</code> or <code>%e</code><br><br>Observe how <code>%g</code> automatically picks the more compact form.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a <code>char</code> variable <code>ch = \'Z\'</code>, a string <code>name[] = "Karthik"</code>, and a pointer <code>int *p = NULL</code>. Print each using its correct specifier: <code>%c</code> for the char, <code>%s</code> for the string, and <code>%p</code> for the pointer address. Also print a literal <code>%</code> sign using <code>%%</code>.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads a <code>double</code> from the user using <code>scanf</code> with <code>%lf</code>, then prints it using <code>%f</code>, <code>%e</code>, and <code>%g</code> in three separate lines. Add a comment explaining why <code>%lf</code> is required in <code>scanf</code> for <code>double</code> but <code>%f</code> alone works in <code>printf</code>.'
  }
]
</script>

<Slide
  topic="Format Specifiers in C"
  sub-topic="Practice Problems — Slide 3: Float, Char & String Specifiers"
  :contents="contents"
/>
