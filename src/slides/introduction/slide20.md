<script setup>
const contents = [
  { text: '<b>#include</b> — Preprocessor directive — pulls in another file\'s code.' },
  { text: '<b>stdio.h</b> — Standard I/O header — gives us <code>printf</code> and <code>scanf</code>.' },
  { text: '<b>int main()</b> — The entry point. Returns an integer status to the OS.' },
  { text: '<b>printf()</b> — Built-in function that prints to the screen.' },
  { text: '<b>"Hello World"</b> — The string literal we want to print.' },
  { text: '<b>return 0;</b> — Tells the OS the program finished successfully.' }
]
</script>

<Slide
  topic="C Programming"
  sub-topic="Hello World Program"
  :contents="contents"
/>
