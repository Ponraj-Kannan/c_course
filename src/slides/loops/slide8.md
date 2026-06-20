---
transition: slide-up
---

<script setup>
const contents = [
  { text: '<b>Problem:</b> Write a C program that asks the user to enter a positive number. Keep asking until the user enters a valid positive number (greater than 0). Use a <b>do-while</b> loop.' },
  { text: '<b>Sample Input/Output:</b><br><code>Enter a positive number: -5</code><br><code>Invalid! Try again.</code><br><code>Enter a positive number: 0</code><br><code>Invalid! Try again.</code><br><code>Enter a positive number: 7</code><br><code>You entered: 7</code>' },
  { text: '<b>Note:</b> The do-while loop is ideal here because we need to show the prompt <strong>at least once</strong> before checking validity.' },
]
</script>

<Slide
  topic="do-while Loop"
  sub-topic="Practice Problem"
  :contents="contents"
/>
