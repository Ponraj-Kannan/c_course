---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares an integer <code>num = 255</code>. Print it using all six integer specifiers in separate <code>printf</code> lines with labels:<br>— <code>%d</code> → signed decimal<br>— <code>%i</code> → signed decimal<br>— <code>%u</code> → unsigned decimal<br>— <code>%o</code> → octal<br>— <code>%x</code> → lowercase hex<br>— <code>%X</code> → uppercase hex'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares an <code>unsigned int</code> variable with value <code>3000000000</code>. Print it using <code>%u</code> and also using <code>%d</code>. Observe and add a comment explaining why <code>%d</code> gives a wrong or negative value for large unsigned integers.'
  },
  {
    text: '<b>Q3:</b> Write a C program that reads a decimal integer from the user and prints it in all three bases — decimal (<code>%d</code>), octal (<code>%o</code>), and hexadecimal (<code>%x</code>) — on three separate lines with labels <code>"Decimal:"</code>, <code>"Octal:"</code>, and <code>"Hex:"</code>.'
  }
]
</script>

<Slide
  topic="Format Specifiers in C"
  sub-topic="Practice Problems — Slide 2: Integer Specifiers"
  :contents="contents"
/>
