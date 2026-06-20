---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Write a C program to <b>reverse the digits</b> of a number entered by the user using a <b>while</b> loop.' },
  { text: '<b>Input:</b> <code>12345</code>' },
  {
    text: '<b>Expected Output:</b><br><code>Reversed Number: 54321</code>'
  },
  {
    text: '<b>Note:</b> Use the modulo operator <code>%</code> to extract the last digit: <code>digit = n % 10</code>. Build the reversed number using: <code>reversed = reversed * 10 + digit</code>. Then remove the last digit: <code>n = n / 10</code>. Repeat with a <b>while</b> loop as long as <code>n != 0</code>. Initialize <code>int reversed = 0</code> before the loop.'
  },
]
</script>

<Slide
  topic="Practice"
  sub-topic="Reverse a Number — While Loop"
  :contents="contents"
/>
