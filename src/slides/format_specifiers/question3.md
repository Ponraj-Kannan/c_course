---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares <code>int n = 42</code> and prints it four ways on separate lines with labels:<br>— <code>%d</code> → default<br>— <code>%10d</code> → right-aligned in width 10<br>— <code>%-10d</code> → left-aligned in width 10 (use <code>|</code> after to show spacing)<br>— <code>%010d</code> → zero-padded width 10'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares <code>float price = 1234.5678</code> and prints it using:<br>— <code>%f</code> → default (6 decimal places)<br>— <code>%.2f</code> → rounded to 2 decimal places<br>— <code>%10.2f</code> → right-aligned in total width 10 with 2 decimal places<br>— <code>%-10.2f</code> → left-aligned in total width 10 with 2 decimal places<br><br>Use <code>|</code> as a boundary marker after each value to clearly show alignment.'
  },
  {
    text: '<b>Q3:</b> Write a C program that declares a string <code>str[] = "Programming"</code> and prints it using:<br>— <code>%s</code> → full string<br>— <code>%.5s</code> → only first 5 characters<br>— <code>%15s</code> → right-aligned in width 15<br>— <code>%-15s</code> → left-aligned in width 15<br><br>This demonstrates that precision in <code>%s</code> controls the number of characters printed, not decimal places.'
  }
]
</script>

<Slide
  topic="Format Specifiers in C"
  sub-topic="Practice Problems — Slide 4: Width & Precision Formatting"
  :contents="contents"
/>
