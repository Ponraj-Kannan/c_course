<script setup>
const contents = [
  { text: '<b>Documentation</b> — Comments describing the program.' },
  { text: '<b>Header file</b> — Loads built-in functions like printf.' },
  { text: '<b>Global decl.</b> — Variables accessible everywhere.' },
  { text: '<b>main()</b> — Mandatory entry point of every C program.' },
  { text: '<b>Variables</b> — Local data for the function.' },
  { text: '<b>Statements</b> — The actual work the program does.' },
  { text: '<b>return 0</b> — Tells the OS the program ended successfully.' }
]
</script>

<Slide
  topic="C Programming"
  sub-topic="Structure of a C Program"
  :contents="contents"
/>