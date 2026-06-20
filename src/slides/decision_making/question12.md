---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write a C program that reads two integers and checks if they are equal using <code>==</code> inside an <code>if</code> condition. Print <code>"Equal"</code> or <code>"Not equal"</code>. Then write a <b>second version</b> where you intentionally use <code>=</code> instead of <code>==</code> inside the <code>if</code> condition and observe the difference in behavior. Add a comment explaining why the second version is a bug.'
  },
  {
    text: '<b>Q2:</b> Write a C program that reads a number and uses an <code>if-else</code> to check if it is greater than 100. Place a <b>semicolon after the <code>if</code> condition</b> intentionally in the second version (stray semicolon bug). Write both versions — one correct and one with the semicolon — and add comments explaining what the stray semicolon causes.'
  }
]
</script>

<Slide
  topic="Decision Making in C"
  sub-topic="Practice Problems — Slide 12: Common Mistakes"
  :contents="contents"
/>
