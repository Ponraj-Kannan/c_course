---
transition: fade
---

<script setup>
const contents = [
  {
    text: '<b>Q1:</b> Write two versions of a C program that allocates an integer with <code>malloc</code>, stores a value, frees it, then tries to print the value through the pointer:<br>— <b>Version A (dangling):</b> access the pointer after <code>free</code> without NULLing it — show this is use-after-free (undefined behaviour).<br>— <b>Version B (safe):</b> set the pointer to <code>NULL</code> immediately after <code>free</code>, add an <code>if (ptr != NULL)</code> guard before reading — show no dangling access occurs.<br><br>Add comments clearly labelling the dangerous line in Version A.'
  },
  {
    text: '<b>Q2:</b> Write a C program with a function <code>int *createValue(int n)</code> that declares a <b>local</b> integer inside the function, assigns <code>n</code> to it, and returns its address. In <code>main()</code>, call the function and try to print the returned address. Add a comment explaining why this is a dangling pointer (the local variable is destroyed when the function returns). Then write the corrected version using <code>malloc</code> inside the function to allocate on the heap instead, which survives the function return.'
  }
]
</script>

<Slide
  topic="Dynamic Memory in C"
  sub-topic="Practice Problems — Dangling Pointers"
  :contents="contents"
/>
