---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads three integers. Use <b>nested <code>if-else</code></b> to find and print the largest of the three.<br><br><b>Expected Output (example):</b><br><code>Enter three numbers: 4 9 6</code><br><code>Largest: 9</code><br><br>Do not use any library functions — use only nested conditions.'
  },
  {
    text: '<b>Q2:</b> Write a C program to check whether a given year is a <b>leap year</b> using nested <code>if-else</code>. Apply the full rule:<br>— Divisible by 400 → leap year<br>— Else if divisible by 100 → not a leap year<br>— Else if divisible by 4 → leap year<br>— Else → not a leap year<br><br>Print <code>"Leap year"</code> or <code>"Not a leap year"</code>.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 7: Nested if-else — Example"
  :contents="contents"
/>
