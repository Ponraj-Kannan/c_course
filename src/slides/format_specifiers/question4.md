---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that declares <code>int n = 42</code> and prints it using all five flags, each on its own line with a label:<br>— <code>%-10d</code> → left-align flag <code>-</code><br>— <code>%+d</code> → always show sign flag <code>+</code><br>— <code>%010d</code> → zero-pad flag <code>0</code><br>— <code>% d</code> → space flag (space before positive numbers)<br>— <code>%#x</code> → alternate form flag <code>#</code> (adds <code>0x</code> prefix)<br><br>Use <code>|</code> as boundary markers to make alignment visible.'
  },
  {
    text: '<b>Q2:</b> Write a C program that declares a negative integer <code>int neg = -99</code> and a positive integer <code>int pos = 99</code>. Print both using <code>%+d</code> and <code>% d</code> and observe how each flag behaves differently for positive vs negative values. Print with labels.'
  },
  {
    text: '<b>Q3:</b> Write a C program that prints the integer <code>255</code> using the <code>#</code> flag in three ways:<br>— <code>%#o</code> → octal with leading <code>0</code><br>— <code>%#x</code> → hex with leading <code>0x</code><br>— <code>%#X</code> → hex with leading <code>0X</code><br><br>Then also print the same value using <code>%#10x</code> and <code>%-#10x</code> to combine the <code>#</code> flag with width and alignment.'
  }
]
</script>

<Slide
  topic="Format Specifiers in C"
  sub-topic="Practice Problems — Slide 5: Flags"
  :contents="contents"
/>
