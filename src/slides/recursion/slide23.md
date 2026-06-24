<script setup>
const contents = [
  { text: '<b>Problem:</b> Write a recursive function to check whether a given string is a palindrome.' },
  { text: '<b>Input:</b> <code>"racecar"</code> → <code>1 (true)</code>' },
  { text: '<b>Input:</b> <code>"hello"</code> → <code>0 (false)</code>' },
  { text: '<b>Note:</b> A string is a palindrome if it reads the same forwards and backwards. Use recursion only. Use <code>char[]</code> and pass start/end indices.', highlight: true },
  // { text: '<b>Hint:</b> Compare <code>str[start]</code> and <code>str[end]</code>. If they differ, return 0. Otherwise recurse with <code>start+1</code> and <code>end-1</code>. Base case: if <code>start >= end</code>, return 1.', highlight: true },
]
</script>

<Slide
  topic="Recursion"
  sub-topic="Practice Problem"
  :contents="contents"
/>
